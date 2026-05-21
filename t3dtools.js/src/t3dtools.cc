/*
 * Copyright 2018 Njibhu <manu@njibhu.eu>
 * This code is published under MIT License.
 * 
 * Contains some code from RequestTimeout408 (https://github.com/RequestTimeout408/)
 **/

#include <cstdio>
#include <cstring>
#include <cstdlib>
#include <vector>
#include <emscripten.h>

#include "gw2DatTools/compression/inflateDatFileBuffer.h"
#include "gw2DatTools/compression/inflateTextureFileBuffer.h"
#include "gw2DatTools/exception/Exception.h"
#include "gw2formats/TextureFile.h"
#include "squish/squish.h"
#include "3dcx.h"


#define BCDEC_IMPLEMENTATION
#define BCDEC_BC4BC5_PRECISE
#include "bcdec.h"

extern "C" {
    //Help to make fast rebuilds
    const int16_t BUILD_VERSION = 15;
}

//Support for GW1 textures have been dropped since it's not used in Tyria3DLib

//TODO [1]: Port all exceptions to errorcodes
enum ErrorCode
{
    OK = 0x0,
    INFLATER_EXCEPTION = 0x01,
    STD_EXCEPTION = 0x02,
    IMG_NO_MIPMAP_FOUND = 0x03, // No mipmap levels found!
    IMG_UNKNOWN_MIPMAP_FORMAT = 0x04,
};

extern "C"{
    uint8_t* inflate(uint32_t inputSize, const uint8_t* pInputBuffer, uint32_t& orOutputSize, uint8_t& pErrors) 
    {
        uint8_t* pOutputBuffer = nullptr;
        pErrors = OK;
        try { //TODO [1]
            pOutputBuffer = gw2dt::compression::inflateDatFileBuffer(inputSize, pInputBuffer, orOutputSize);
        }
        catch (gw2dt::exception::Exception& caught) {
            pErrors = INFLATER_EXCEPTION;
            return pOutputBuffer;
        }
        catch (const std::exception&) {
            pErrors = STD_EXCEPTION;
            return pOutputBuffer;
        }

        return pOutputBuffer;
    }

    uint8_t* workImage(uint32_t inputSize, const uint8_t* pInputBuffer, uint32_t& orOutputSize, uint16_t& oDxtType, uint16_t& oImgW, uint16_t& oImgH, uint8_t& pErrors)
    {
        pErrors = OK;
        uint8_t* pOutputBuffer = nullptr;
        BGR* po_colors = nullptr;
        uint8* po_alphas = nullptr;

        try {
            /// Read image file
            gw2f::TextureFile file(pInputBuffer, inputSize);

            /// Get mipmap info
            uint32_t mipCount = file.mipMapCount();

            if(mipCount==0){
                emscripten_log(EM_LOG_CONSOLE | EM_LOG_ERROR, "(t3dtools.js) - workImage: No mipmap levels found!");
                pErrors = IMG_NO_MIPMAP_FOUND;
                return pOutputBuffer;
            }
            auto& mipmap = file.mipMapLevel(0); //std::min(2/*0*/, mipCount)

            uint16_t width = mipmap.width();
            uint16_t height = mipmap.height();

            std::vector<uint8_t> buffer(mipmap.uncompressedSize());
            uint32_t size = static_cast<uint32_t>(buffer.size());

            /// Translate DXT to bitmap
            uint32_t mipmapFormat = mipmap.format();

            ///Inflate mipmap 0 (highest quality)
            uint32_t formatFourCC = mipmapFormat;
            if(mipmapFormat == 0x58374342){ // BC7
                formatFourCC = 0x58434433;
            } else if (mipmapFormat == 0x4c545844){ // DXTL
                formatFourCC = 0x35545844;
            }

            gw2dt::compression::inflateTextureBlockBuffer(
                width, height,
                formatFourCC,
                mipmap.size(),
                mipmap.data(),
                size,
                buffer.data()
            );

            uint32_t bitmapSize = 0;
            int dxtFormat = 0;

            switch(mipmapFormat)
            {
                case 0x31545844: // DXT1
                    oDxtType=1;
                    bitmapSize = static_cast<uint32_t>(width) * static_cast<uint32_t>(height) * 4u;
                    dxtFormat = squish::kDxt1;
                    break;

                case 0x33545844: // DXT3
                    oDxtType=3;
                    bitmapSize = static_cast<uint32_t>(width) * static_cast<uint32_t>(height) * 4u;
                    dxtFormat = squish::kDxt3;
                    break;

                case 0x4c545844: // DXTL
                case 0x35545844: // DXT5
                    oDxtType=5;
                    bitmapSize = static_cast<uint32_t>(width) * static_cast<uint32_t>(height) * 4u;
                    dxtFormat = squish::kDxt5;
                    break;

                case 0x58374342: // BC7
                    oDxtType=7;
                    bitmapSize = static_cast<uint32_t>(width) * static_cast<uint32_t>(height) * 4u;
                    break;

                case 0x58434433: // 3DCX
                    bitmapSize = static_cast<uint32_t>(width) * static_cast<uint32_t>(height) * 4u;
                    break;

                default:{
                    emscripten_log(EM_LOG_CONSOLE | EM_LOG_ERROR, "(t3dtools.js) - workImage: Unknown mipmap format %d", mipmapFormat);
                    pErrors = IMG_UNKNOWN_MIPMAP_FORMAT;
                    return pOutputBuffer;
                }
            }

            pOutputBuffer = static_cast<uint8_t*>(malloc(bitmapSize));
            if (pOutputBuffer == nullptr) {
                pErrors = STD_EXCEPTION;
                return nullptr;
            }

            /// NOT 3DCX NOR BC7
            if(mipmapFormat != 0x58434433 && mipmapFormat != 0x58374342){
                squish::DecompressImage(pOutputBuffer, width, height, buffer.data(), dxtFormat);

                /// DXTL
                if( mipmapFormat == 0x4c545844 ){
                    for (uint32_t i = 0; i < bitmapSize; i += 4) {
                        pOutputBuffer[i + 0] =  ( pOutputBuffer[i + 0] * pOutputBuffer[i + 3] )  / 0xff;
                        pOutputBuffer[i + 1] =  ( pOutputBuffer[i + 1] * pOutputBuffer[i + 3] )  / 0xff;
                        pOutputBuffer[i + 2] =  ( pOutputBuffer[i + 2] * pOutputBuffer[i + 3] )  / 0xff;
                    }
                }
            }

            // BC7
            else if(mipmapFormat == 0x58374342){
                uint8_t* src = buffer.data();

                for(int y = 0; y < height; y += 4){
                    for(int x = 0; x < width; x += 4){
                        uint8_t* dst = pOutputBuffer + (y * width + x) * 4;
                        bcdec_bc7(src, dst, width * 4);
                        src += BCDEC_BC7_BLOCK_SIZE;
                    }
                }
            }

            /// 3DCX
            else{
                process3DCX(
                    reinterpret_cast<const RGBA*>(buffer.data()),
                    width,
                    height,
                    po_colors,
                    po_alphas);

                BGR* colors = po_colors;
                //Loop through image and set all pixels
                for (int y = height - 1; y >= 0 ; y--) {
                    for (int x = 0; x<width; x++)
                    {
                        pOutputBuffer[(x+y*width)*4 + 0] = (*colors).b;
                        pOutputBuffer[(x+y*width)*4 + 1] = (*colors).g;
                        pOutputBuffer[(x+y*width)*4 + 2] = (*colors).r;
                        pOutputBuffer[(x+y*width)*4 + 3] = 255;
                        colors++;
                    }
                }

                free(po_colors);
                po_colors = nullptr;
            }

            /// Set width height and mem size for image
            orOutputSize = bitmapSize;
            oImgH = height;
            oImgW = width;

            pErrors = OK;
            return pOutputBuffer;
        }
        catch (const gw2dt::exception::Exception&) {
            if (po_colors != nullptr) {
                free(po_colors);
            }
            free(pOutputBuffer);
            pErrors = INFLATER_EXCEPTION;
            return nullptr;
        }
        catch (const std::exception&) {
            if (po_colors != nullptr) {
                free(po_colors);
            }
            free(pOutputBuffer);
            pErrors = STD_EXCEPTION;
            return nullptr;
        }
    }
}
