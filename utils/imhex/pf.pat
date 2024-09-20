#include "std/mem.pat"

struct PF_Header {
  char identifier[2];
  u16 flags;
  padding[2];
  u16 pf_version;
  char type[4];
};

fn PFChunk_read(auto chunk) {
  return chunk.type;
};

struct PF_Chunk {
  char type[4];
  u32 size;
  u16 version;
  u16 header_size;
  u32 offset_table;
  u8 data[size - header_size + 8];
} [[format_read("PFChunk_read")]];

struct File {
  PF_Header file_header;
  PF_Chunk chunks[while(!std::mem::eof())];
};

File file @ 0x00;
