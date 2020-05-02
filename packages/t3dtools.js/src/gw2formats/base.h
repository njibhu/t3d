// gw2formats/base.h

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

#ifndef GW2FORMATS_BASE_H_INCLUDED
#define GW2FORMATS_BASE_H_INCLUDED

#include <cstdint>

// DLL
#ifdef GW2FORMATS_DLL
#  ifdef _MSC_VER
#    ifdef GW2FORMATS_EXPORT
#      define GW2FORMATS_API __declspec(dllexport)
#    else
#      define GW2FORMATS_API __declspec(dllimport)
#    endif
#    define GW2FORMATS_APIENTRY __stdcall
#  else
#    error For gw2formats to be able to compile as a DLL with this compiler, support must be added to include/gw2formats/base.h.
#  endif
// STATIC LIB
#else
#  define GW2FORMATS_API
#  define GW2FORMATS_APIENTRY
#endif

namespace gw2f {

typedef uint8_t         byte;       /**< One byte. */
typedef uint16_t        word;       /**< Unsigned 16-bit integer. */
typedef uint32_t        dword;      /**< Unsigned 32-bit integer. */
typedef uint64_t        qword;      /**< Unsigned 64-bit integer. */

typedef int8_t          int8;       /**< Signed 8-bit integer. */
typedef uint8_t         uint8;      /**< Unsigned 8-bit integer. */
typedef int16_t         int16;      /**< Signed 16-bit integer. */
typedef uint16_t        uint16;     /**< Unsigned 16-bit integer. */
typedef int32_t         int32;      /**< Signed 32-bit integer. */
typedef uint32_t        uint32;     /**< Unsigned 32-bit integer. */
typedef int64_t         int64;      /**< Signed 64-bit integer. */
typedef uint64_t        uint64;     /**< Unsigned 64-bit integer. */

typedef float           float32;    /**< 32-bit float. */
typedef double          float64;    /**< 64-bit float. */

// Unicode chars (NOTE: UNTESTED FOR ANYTHING BUT MSVC)
#ifdef _MSC_VER
   typedef wchar_t      char16;     /**< UTF-16 character. */
   typedef uint32       char32;     /**< UTF-32 character. */
#  define GW2F_U16(x)   L##x
#elif defined(__has_feature) && __has_feature(cxx_unicode_literals)
   typedef char16_t     char16;     /**< UTF-16 character. */
   typedef char32_t     char32;     /**< UTF-32 character. */
#  define GW2F_U16(x)   u##x
#  define GW2F_U32(x)   U##x
#elif defined(__GNUC__) && (__GNUC__ > 4 || (__GNUC__ == 4 && __GNUC_MINOR__ >= 5))
   typedef char16_t     char16;     /**< UTF-16 character. */
   typedef char32_t     char32;     /**< UTF-32 character. */
#  define GW2F_U16(x)   u##x
#  define GW2F_U32(x)   U##x
#else
#  if defined(WCHAR_MAX) && (WCHAR_MAX == 0xffff)
     typedef wchar_t    char16;     /**< UTF-16 character. */
#    define GW2F_U16(x) L##x
#  else
     typedef uint16     char16;     /**< UTF-16 character. */
#  endif
#  if defined(WCHAR_MAX) && (WCHAR_MAX == 0xffffffff)
     typedef wchar_t    char32;     /**< UTF-32 character. */
#    define GW2F_U32(x) L##x
#  else
     typedef uint32     char32;     /**< UTF-32 character. */
#  endif
#endif 

}; // namespace gw2f

#endif // GW2FORMATS_BASE_H_INCLUDED
