// File: TextureFile.cpp

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

#include "TextureFile.h"

#include <algorithm>
//#include <fstream>
//#include <stdexcept>
#include <sstream>

#include "fcc.h"
#include "../gw2DatTools/exception/Exception.h"

namespace gw2f
{
namespace 
{

class MipMapData
    : public IMipMapData
{
    uint16 m_width;
    uint16 m_height;
    uint32 m_format;
    std::vector<byte> m_data;
public:
    MipMapData(uint16 p_width, uint16 p_height, uint32 p_format, const byte* p_data, uint32 p_size);
    MipMapData(const IMipMapData& p_other);
    virtual ~MipMapData();
    virtual uint16 width() const override;
    virtual uint16 height() const override;
    virtual uint32 format() const override;
    virtual const byte* data() const override;
    virtual uint32 size() const override;
    virtual uint32 uncompressedSize() const override;
};

MipMapData::MipMapData(uint16 p_width, uint16 p_height, uint32 p_format, const byte* p_data, uint32 p_size)
    : m_width(p_width)
    , m_height(p_height)
    , m_format(p_format)
    , m_data(p_size)
{
    std::copy_n(p_data, p_size, m_data.data());
}

MipMapData::MipMapData(const IMipMapData& p_other)
    : m_width(p_other.width())
    , m_height(p_other.height())
    , m_format(p_other.format())
    , m_data(p_other.size())
{
    std::copy_n(p_other.data(), p_other.size(), m_data.data());
}

MipMapData::~MipMapData()
{
}

uint16 MipMapData::width() const
{
    return m_width;
}

uint16 MipMapData::height() const
{
    return m_height;
}

uint32 MipMapData::format() const
{
    return m_format;
}

const byte* MipMapData::data() const
{
    return m_data.data();
}

uint32 MipMapData::size() const
{
    return m_data.size();
}

uint32 MipMapData::uncompressedSize() const
{
    uint32 numBlocks = ((m_width + 3) >> 2) * ((m_height + 3) >> 2);
    switch (m_format)
    {
    case fcc::DXT1:
    case fcc::DXTA:
        return numBlocks * 8;
    case fcc::DXT2:
    case fcc::DXT3:
    case fcc::DXT4:
    case fcc::DXT5:
    case fcc::DXTL:
    case fcc::DXTN:
    case fcc::_3DCX:
        return numBlocks * 16;
    default:
        throw gw2dt::exception::Exception("Unsupported format.");
    }
}

}; // anon namespace

TextureFile::TextureFile()
{
}

TextureFile::TextureFile(const byte* p_data, uint32 p_size)
{
    //assign(p_data, p_size);
    if (p_size < 12) {  throw gw2dt::exception::Exception("Texture file data too small"); }
    clear();

    auto fourcc = *reinterpret_cast<const uint32*>(p_data);
    if (fourcc != fcc::ATEX && fourcc != fcc::ATEC && fourcc != fcc::ATEP &&
        fourcc != fcc::ATET && fourcc != fcc::ATEU && fourcc != fcc::ATTX)
    {
        std::stringstream message;
        message << "Invalid header " << fourcc;
        throw gw2dt::exception::Exception(message.str().c_str());
    }

    auto format = *reinterpret_cast<const uint32*>(p_data + 4);
    auto width  = *reinterpret_cast<const uint16*>(p_data + 8);
    auto height = *reinterpret_cast<const uint16*>(p_data + 10);

    auto pos = p_data + 12;
    auto end = p_data + p_size;



    while (pos < end) {
        auto size = *reinterpret_cast<const uint32*>(pos);
        m_data.push_back(new MipMapData(width, height, format, pos, size));
        pos      += size;
        width   >>= 1;
        height  >>= 1;
    }
    //throw gw2dt::exception::Exception("SLUTA nu!");
}

/*TextureFile::TextureFile(const std::string& p_filename)
{
    load(p_filename);
}*/

TextureFile::TextureFile(const TextureFile& p_other)
{
    *this = p_other;
}

TextureFile::~TextureFile()
{
    for (auto it = std::begin(m_data); it != std::end(m_data); it++) {
        delete *it;
    }
}

TextureFile& TextureFile::operator=(const TextureFile& p_other)
{
    clear();
    m_data.resize(p_other.m_data.size());
    for (uint32 i = 0; i < p_other.m_data.size(); i++) {
        m_data[i] = new MipMapData(*p_other.m_data[i]);
    }
    return *this;
}

/*bool TextureFile::load(const std::string& p_filename)
{
    std::ifstream input(p_filename, std::ios::in | std::ios::binary);

    input.seekg(0, std::ios::end);
    auto size = static_cast<uint32>(input.tellg());
    input.seekg(0, std::ios::beg);

    std::vector<byte> buffer(size);
    input.read(reinterpret_cast<char*>(buffer.data()), size);
    input.close();

    return assign(buffer.data(), buffer.size());
}*/

bool TextureFile::assign(const byte* p_data, uint32 p_size)
{
    if (p_size < 12) { return false; }
    clear();

    auto fourcc = *reinterpret_cast<const uint32*>(p_data);
    if (fourcc != fcc::ATEX && fourcc != fcc::ATEC && fourcc != fcc::ATEP &&
        fourcc != fcc::ATET && fourcc != fcc::ATEU && fourcc != fcc::ATTX)
    {
        return false;
    }

    auto format = *reinterpret_cast<const uint32*>(p_data + 4);
    auto width  = *reinterpret_cast<const uint16*>(p_data + 8);
    auto height = *reinterpret_cast<const uint16*>(p_data + 10);

    auto pos = p_data + 12;
    auto end = p_data + p_size;



    while (pos < end) {
        auto size = *reinterpret_cast<const uint32*>(pos);
        m_data.push_back(new MipMapData(width, height, format, pos, size));
        pos      += size;
        width   >>= 1;
        height  >>= 1;
    }
}

void TextureFile::clear()
{
    for (auto it = std::begin(m_data); it != std::end(m_data); it++) {
        delete *it;
    }
    m_data.clear();
}

uint16 TextureFile::width() const
{
    if (m_data.size() == 0) { return 0; }
    return m_data[0]->width();
}

uint16 TextureFile::height() const
{
    if (m_data.size() == 0) { return 0; } 
    m_data[0]->height();
}

uint32 TextureFile::format() const
{
    if (m_data.size() == 0) { return 0; } 
    m_data[0]->format();
}

uint32 TextureFile::mipMapCount() const
{
    return m_data.size();
}

const IMipMapData& TextureFile::mipMapLevel(uint32 p_level) const
{
    if (p_level >= m_data.size()) { throw std::out_of_range("The given index is too large."); }
    return *m_data[p_level];
}

}; // namespace gw2f
