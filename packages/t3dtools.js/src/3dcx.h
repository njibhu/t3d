/*
 * Copyright (C) 2012 Rhoot <https://github.com/rhoot>
 * https://github.com/rhoot/Gw2Browser/blob/master/src/Readers/ImageReader.cpp
 * 
 **/

#ifndef THREEDCX_H
#define THREEDCX_H

#include <cstdint>

typedef unsigned int            uint;       /**< Short for 'unsigned int'. */
typedef uint8_t                 uint8;      /**< Unsigned 8-bit integer. */
typedef uint32_t                uint32;     /**< Unsigned 32-bit integer. */
typedef uint64_t                uint64;     /**< Unsigned 64-bit integer. */
typedef uint16_t                uint16;     /**< Unsigned 16-bit integer. */

union RGBA
{
  struct {
    uint8 r;
    uint8 g;
    uint8 b;
    uint8 a;
  };
  uint8 parts[4];
  uint32 color;
};

struct BGR
{
  uint8   b;
  uint8   g;
  uint8   r;
};

struct RGB
{
  uint8   r;
  uint8   g;
  uint8   b;
};

struct DCXBlock     // Should be 3DCXBlock, but names can't start with a number D:
{
  uint64  green;
  uint64  red;
};

void process3DCXBlock(RGB* p_colors, const DCXBlock& p_block, uint p_blockX, uint p_blockY, uint p_width);
void process3DCX(const RGBA* p_data, uint p_width, uint p_height, BGR*& po_colors, uint8*& po_alphas);

#endif // ndef THREEDCX_H