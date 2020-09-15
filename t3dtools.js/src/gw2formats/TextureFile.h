// File: gw2formats/TextureFile.h

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

#ifndef GW2FORMATS_TEXTUREFILE_H_INCLUDED
#define GW2FORMATS_TEXTUREFILE_H_INCLUDED

#include <string>
#include <vector>

#include "base.h"

namespace gw2f
{

/** Represents a mipmap level in a texture file. */
class IMipMapData
{
public:
    /** Destructor. */
    virtual ~IMipMapData() {}
    /** Gets the width of this mipmap level. */
    virtual uint16 width() const = 0;
    /** Gets the height of this mipmap level. */
    virtual uint16 height() const = 0;
    /** Gets the format of the contained data. */
    virtual uint32 format() const = 0;
    /** Gets the compressed pixel data. */
    virtual const byte* data() const = 0;
    /** Gets the size of the compressed pixel data. */
    virtual uint32 size() const = 0;
    /** Gets the size of the uncompressed pixel data. */
    virtual uint32 uncompressedSize() const = 0;
};

/** Represents a texture file. */
GW2FORMATS_API class TextureFile
{
    std::vector<IMipMapData*> m_data;
    uint32 m_format;
public:
    /** Default constructor. */
    TextureFile();
    /** Constructor. Assigns it the given data. Ownership of the data is not
     *  claimed, it still needs to be freed by the caller.
     *  \param[in]  p_data  Data to assign.
     *  \param[in]  p_size  Size of the given data. */
    TextureFile(const byte* p_data, uint32 p_size);
    /** Constructor. Loads data from the given file.
     *  \param[in]  p_filename  Name of the file to load. */
    //TextureFile(const std::string& p_filename);
    /** Copy constructor. */
    TextureFile(const TextureFile& p_other);
    /** Destructor. */
    ~TextureFile();

    /** Assignment operator. Copies the data from the given TextureFile. */
    TextureFile& operator=(const TextureFile& p_other);
    
    /** Attempts to load data from the given file.
     *  \param[in]  p_filename  Name of the file to load.
     *  \return bool    True if successful, false if not. */
    //bool load(const std::string& p_filename);
    /** Attempts to load data from the given buffer.
     *  \param[in]  p_data  Data to load.
     *  \param[in]  p_size  Size of p_data.
     *  \return bool    True if successful, false if not. */
    bool assign(const byte* p_data, uint32 p_size);
    /** Clears the contents of this instance. */
    void clear();

    /** Gets the width of this texture. */
    uint16 width() const;
    /** Gets the height of this texture. */
    uint16 height() const;
    /** Gets the format of this texture, needed for decompression. */
    uint32 format() const;

    /** Gets the amount of mipmaps contained in this texture file. */
    uint32 mipMapCount() const;
    /** Gets the given mipmap level.
     *  \param[in]  p_level     Mipmap level to get.
     *  \throws std::out_of_range   Thrown if the given mipmap level is too high. */
    const IMipMapData& mipMapLevel(uint32 p_level) const;
};

}; // namespace gw2f

#endif // GW2FORMATS_TEXTUREFILE_H_INCLUDED
