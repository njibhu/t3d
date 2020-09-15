/*
 * Copyright 2018 Njibhu <manu@njibhu.eu>
 * This code is published under MIT License.
 * 
 * Contains some code from RequestTimeout408 (https://github.com/RequestTimeout408/)
 **/

#include <cstdio>
#include <cstring>

#include "gw2DatTools/compression/inflateDatFileBuffer.h"
#include "gw2DatTools/compression/inflateTextureFileBuffer.h"
#include "gw2DatTools/exception/Exception.h"
#include "gw2formats/TextureFile.h"
#include "squish/squish.h"
#include "3dcx.h"

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
        catch (std::exception) {
            pErrors = INFLATER_EXCEPTION;
            return pOutputBuffer;
        }

        return pOutputBuffer;
    }

    uint8_t* workImage(uint32_t inputSize, const uint8_t* pInputBuffer, uint32_t& orOutputSize, uint16_t& oDxtType, uint16_t& oImgW, uint16_t& oImgH, uint8_t& pErrors)
    {
        uint8_t* pOutputBuffer = nullptr;
        /// Read image file
        gw2f::TextureFile file(pInputBuffer, inputSize);

        /// Get mipmap info
        uint32_t mipCount = file.mipMapCount();

        if(mipCount==0){
            pErrors = IMG_NO_MIPMAP_FOUND;
            return pOutputBuffer;
        }    
        auto& mipmap = file.mipMapLevel(0); //std::min(2/*0*/, mipCount)


        uint16_t width = mipmap.width();
        uint16_t height = mipmap.height();    

        // Allocate output buffer, if needed
        std::vector<uint8_t> buffer;
        if (buffer.size() < mipmap.uncompressedSize()) {
            buffer.resize(mipmap.uncompressedSize());
        }

        // Decompress mipmap
        uint32_t size = buffer.size();
    
        uint32_t inflatedImageSize = buffer.size();
        std::vector<uint8_t> imageBuffer;

        uint8_t* textureBuffer = nullptr;


        /// Translate DXT to bitmap
        uint32_t mipmapFormat = mipmap.format();

        //mipmapFormat = 0x35545844;

        ///Inflate mipmap 0 (highest quality)
        gw2dt::compression::inflateTextureBlockBuffer(
            width, height,
            mipmapFormat == 0x4c545844 ? 0x35545844 : mipmapFormat,
            mipmap.size(),
            mipmap.data(),
            size,
            buffer.data()
        );

        

        int bitmapSize=0;

        int dxtFormat=0;

        switch(mipmapFormat)
        {
            case 0x31545844: // DXT1
                oDxtType=1;
                //bitmapSize = width*height*3;
                bitmapSize = width*height*4;
                dxtFormat = squish::kDxt1;
                break;

            case 0x33545844: // DXT3
                oDxtType=3;
                bitmapSize = width*height*4;
                dxtFormat = squish::kDxt3;
                break;
            
            case 0x4c545844: // DXTL
            case 0x35545844: // DXT5
                oDxtType=5;
                bitmapSize = width*height*4;
                dxtFormat = squish::kDxt5;
                break;

            case 0x58434433: // 3DCX
                bitmapSize = width*height*4;
                break;

            default:{
                //std::stringstream message;
                //message << "Unknown mipmap format " << mipmapFormat << " extracted size " << mipmap.uncompressedSize();
                //throw gw2dt::exception::Exception(message.str());
                pErrors = IMG_UNKNOWN_MIPMAP_FORMAT;
                return pOutputBuffer;
            }
        }

        ///DXT
        squish::u8 pixels[bitmapSize];  // uncompressed pixles
        
        /// NOT 3DCX
        if(mipmapFormat != 0x58434433){          

            /// DXTL
            if( mipmapFormat == 0x4c545844 ){
            }
            
            squish::DecompressImage( pixels, width, height, buffer.data(), dxtFormat);

            /// DXTL
            if( mipmapFormat == 0x4c545844 ){
                for (uint i = 0; i < width * height * 4; i+=4) {
                pixels[i + 0] =  ( pixels[i + 0] * pixels[i + 3] )  / 0xff;
                pixels[i + 1] =  ( pixels[i + 1] * pixels[i + 3] )  / 0xff;
                pixels[i + 2] =  ( pixels[i + 2] * pixels[i + 3] )  / 0xff;
                            
                }
            }
        }

        /// 3DCX
        else{
            BGR* po_colors = nullptr;
            uint8* po_alphas = nullptr;
            process3DCX(
                reinterpret_cast<RGBA*>(buffer.data()),
                width,
                height,
                po_colors,
                po_alphas);

            //Loop through image and set all pixels
            for (int y = height - 1; y >= 0 ; y--) {
                for (int x = 0; x<width; x++)
                {
                    pixels[ (x+y*width)*4 + 0] = (*po_colors).b;
                    pixels[ (x+y*width)*4 + 1] = (*po_colors).g;
                    pixels[ (x+y*width)*4 + 2] = (*po_colors).r;
                    pixels[ (x+y*width)*4 + 3] = 255;
                    po_colors++;
                }
            }

        }

        pOutputBuffer = new uint8_t[bitmapSize];
        /// Pass bitmap back
        memcpy(pOutputBuffer,pixels,bitmapSize);
        

        /// Set width height and mem size for image
        orOutputSize = bitmapSize;
        oImgH = height;
        oImgW = width;

        pErrors = OK;
        return pOutputBuffer;  
    }
}
