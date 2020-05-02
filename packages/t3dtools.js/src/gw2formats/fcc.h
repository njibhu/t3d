// File: gw2formats/fcc.h

/*	Copyright (C) 2012 Rhoot <https://github.com/rhoot>

    This file is part of gw2formats.

    gw2formats is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

#pragma once

#ifndef GW2FORMATS_FCC_H_INCLUDED
#define GW2FORMATS_FCC_H_INCLUDED

namespace gw2f {
namespace fcc {

enum FourCC
{
    _3DCX = 0x58434433,
    ABIX  = 0x58494241,
    ABNK  = 0x4b4e4241,
    AMSP  = 0x50534d41,
    ANIM  = 0x4d494e41,
    anic  = 0x63696e61,
    anim  = 0x6d696e61,
    AMAT  = 0x54414d41,
    area  = 0x61657261,
    ASND  = 0x444e5341,
    ATEC  = 0x43455441,
    ATEP  = 0x50455441,
    ATET  = 0x54455441,
    ATEU  = 0x55455441,
    ATEX  = 0x58455441,
    ATTX  = 0x58545441,
    audi  = 0x69647561,
    BIDX  = 0x58444942,
    BKCK  = 0x4b434b42,
    bxm2  = 0x326d7862,
    CINP  = 0x504e4943,
    cmaC  = 0x43616d63,
    cmpc  = 0x63706d63,
    cntc  = 0x63746e63,
    comp  = 0x706d6f63,
    CSCN  = 0x4e435343,
    cube  = 0x65627563,
    dcal  = 0x6c616364,
    DX9S  = 0x53395844,
    DXT1  = 0x31545844,
    DXT2  = 0x32545844,
    DXT3  = 0x33545844,
    DXT4  = 0x34545844,
    DXT5  = 0x35545844,
    DXTA  = 0x41545844,
    DXTL  = 0x4c545844,
    DXTN  = 0x4e545844,
    emoc  = 0x636f6d65,
    env   = 0x00766e65,
    eula  = 0x616c7565,
    GEOM  = 0x4d4f4547,
    GRMT  = 0x544d5247,
    havk  = 0x6b766168,
    hvkC  = 0x436b7668,
    lght  = 0x7468676c,
    Main  = 0x6e69614d,
    main  = 0x6e69616d,
    mapc  = 0x6370616d,
    mfst  = 0x7473666d,
    mMet  = 0x74654d6d,
    MODL  = 0x4c444f4d,
    mpsd  = 0x6473706d,
    msn   = 0x006e736d,
    parm  = 0x6d726170,
    PGTB  = 0x42544750,
    PIMG  = 0x474d4950,
    prlt  = 0x746c7270,
    prp2  = 0x32707270,
    PRPS  = 0x53505250,
    rive  = 0x65766972,
    ROOT  = 0x544f4f52,
    seqn  = 0x6e716573,
    shad  = 0x64616873,
    shex  = 0x78656873,
    shor  = 0x726f6873,
    SKEL  = 0x4c454b53,
    strs  = 0x73727473,
    surf  = 0x66727573,
    trn   = 0x006e7274,
    trni  = 0x696e7274,
    txtm  = 0x6d747874,
    txtV  = 0x56747874,
    txtv  = 0x76747874,
    vari  = 0x69726176,
    zon2  = 0x326e6f7a,
};

}; // namespace fcc
}; // namespace gw2f

#endif // GW2FORMATS_FCC_H_INCLUDED
