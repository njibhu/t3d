/*
 * Copyright (C) 2012 Rhoot <https://github.com/rhoot>
 * https://github.com/rhoot/Gw2Browser/blob/master/src/Readers/ImageReader.cpp
 * 
 **/

#include "3dcx.h"

#include <cmath>
#include <cstdlib>

template <typename T>
T* allocate(uint p_count)
{
  return static_cast<T*>(::malloc(p_count * sizeof(T)));
}

void process3DCXBlock(RGB* p_colors, const DCXBlock& p_block, uint p_blockX, uint p_blockY, uint p_width)
{
  const float floatToByte = 127.5f;
  const float byteToFloat = (1.0f / floatToByte);

  uint64 red = p_block.red;
  uint64 green = p_block.green;
  uint8 reds[8];
  uint8 greens[8];

  // Reds 1 and 2
  reds[0] = (red & 0xff);
  reds[1] = (red & 0xff00) >> 8;
  red >>= 16;
  // Reds 3 to 8
  if (reds[0] > reds[1]) {
    for (uint i = 2; i < 8; i++) {
      reds[i] = ((8 - i) * reds[0] + (i - 1) * reds[1]) / 7;
    }
  }
  else {
    for (uint i = 2; i < 6; i++) {
      reds[i] = ((6 - i) * reds[0] + (i - 1) * reds[1]) / 5;
    }
    reds[6] = 0x00;
    reds[7] = 0xff;
  }
  // Greens 1 and 2
  greens[0] = (green & 0xff);
  greens[1] = (green & 0xff00) >> 8;
  green >>= 16;
  //Greens 3 to 8
  if (greens[0] > greens[1]) {
    for (uint i = 2; i < 8; i++) {
      greens[i] = ((8 - i) * greens[0] + (i - 1) * greens[1]) / 7;
    }
  }
  else {
    for (uint i = 2; i < 6; i++) {
      greens[i] = ((6 - i) * greens[0] + (i - 1) * greens[1]) / 5;
    }
    greens[6] = 0x00;
    greens[7] = 0xff;
  }

  struct { float r; float g; float b; } normal;
  for (uint y = 0; y < 4; y++) {
    uint curPixel = (p_blockY + y) * p_width + p_blockX;

    for (uint x = 0; x < 4; x++) {
      RGB& color = p_colors[curPixel];

      // Get normal
      normal.r = ((float)reds[red & 7] * byteToFloat) - 1.0f;
      normal.g = ((float)greens[green & 7] * byteToFloat) - 1.0f;

      // Compute blue, based on red/green
      normal.b = std::sqrt(1.0f - normal.r * normal.r - normal.g * normal.g);

      // Store normal
      color.r = ((normal.r + 1.0f) * floatToByte);
      color.g = ((normal.g + 1.0f) * floatToByte);
      color.b = ((normal.b + 1.0f) * floatToByte);

      // Invert green as that seems to be the more common format
      color.g = 0xff - color.g;

      curPixel++;
      red >>= 3;
      green >>= 3;
    }
  }
}

void process3DCX(const RGBA* p_data, uint p_width, uint p_height, BGR*& po_colors, uint8*& po_alphas)
{
  uint numPixels = (p_width * p_height);
  uint numBlocks = numPixels >> 4;
  const DCXBlock* blocks = reinterpret_cast<const DCXBlock*>(p_data);

  po_colors = allocate<BGR>(numPixels);
  po_alphas = nullptr; // 3DCX does not use alpha

  const uint numHorizBlocks = p_width >> 2;
  const uint numVertBlocks = p_height >> 2;

#pragma omp parallel for
  for (int y = 0; y < static_cast<int>(numVertBlocks); y++) {
    for (uint x = 0; x < numHorizBlocks; x++)
    {
      const DCXBlock& block = blocks[(y * numHorizBlocks) + x];
      // 3DCX actually uses RGB and not BGR, so *pretend* that's what the output is
      process3DCXBlock(reinterpret_cast<RGB*>(po_colors), block, x * 4, y * 4, p_width);
    }
  }
}