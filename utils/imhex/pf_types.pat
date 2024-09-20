bool x64Mode in;
u64 chunkMaxAddres in;

struct Pointer<T> {
  if(x64Mode) {
    u64 offset;
    if(offset != 0 && $ + offset < chunkMaxAddres) {
      T data @ $ + offset - 8;
    } else {
      std::print("Pointer out of range");
    }
  } else {
    u32 offset;
    T data @ $ + offset;
  }
};

struct FixedArray<T, auto Length> {
  T array[Length];
};

struct DynArray<T> {
  u32 length;
  Pointer<FixedArray<T, parent.length>> array;
};

struct RefArray<T> {
  u32 length;
  Pointer<FixedArray<Pointer<T>, parent.length>> array;
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
