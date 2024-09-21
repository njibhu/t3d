#include "std/io.pat"

bool x64Mode in;
u64 chunkMaxAddres in;

struct Pointer<T> {
  if(x64Mode) {
    u64 __offset;
    if(__offset == 0){} // Skip null pointers
    else if($ + __offset < chunkMaxAddres) {
      T data @ $ + __offset - 8 [[inline]];
    } else {
      T data @ $ - (9 + (0xffffffffffffffff - __offset)) [[inline]];
    }
  } else {
    u32 __offset;
    if(__offset == 0){} // Skip null pointers
    else if($ + __offset < chunkMaxAddres) {
      T data @ $ + __offset - 4 [[inline]];
    } else {
      T data @ $ - (5 + (0xffffffff - __offset)) [[inline]];
    }
  }
};

struct FixedArray<T, auto Length> {
  T array[Length] [[inline]];
};

struct DynArray<T> {
  u32 __length;
  Pointer<FixedArray<T, parent.__length>> array [[inline]];
};

struct RefArray<T> {
  u32 __length;
  Pointer<FixedArray<Pointer<T>, parent.__length>> array [[inline]];
};

struct String {
  char string[];
};

struct String16 {
  char16 string[];
};

using RefString = Pointer<String>;
using RefString16 = Pointer<String16>;
using Filename = Pointer<FixedArray<u16, 3>>;
using Uint8 = u8;
using Uint16 = u16;
using Uint32 = u32;
using Uint64 = u64;
using Float32 = float;
using Float64 = double;
using CString = String;
using FileRef = Filename;
