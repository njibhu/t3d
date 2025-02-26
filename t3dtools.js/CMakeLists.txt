cmake_minimum_required (VERSION 3.2)

project (t3dtools)

SET(CMAKE_C_COMPILER emcc)
SET(CMAKE_CXX_COMPILER em++)
SET(CMAKE_AR emar)
SET(CMAKE_RANLIB emranlib)
add_definitions(-std=c++11)

include_directories(src/)
add_library(gw2DatTools STATIC 
	src/gw2DatTools/utils/BitArray.i
	src/gw2DatTools/compression/inflateTextureFileBuffer.cpp
	src/gw2DatTools/compression/huffmanTreeUtils.cpp
	src/gw2DatTools/compression/inflateDatFileBuffer.cpp
	src/gw2DatTools/compression/HuffmanTree.i
	src/gw2DatTools/exception/Exception.cpp
	src/gw2DatTools/format/ANDat.cpp
	src/gw2DatTools/format/Mapping.cpp
	src/gw2DatTools/format/Mft.cpp
	src/gw2DatTools/interface/ANDatInterface.cpp
)

add_library(gw2Formats STATIC
	src/gw2formats/TextureFile.cpp
)

add_library(libsquish STATIC
	src/squish/singlecolourfit.cpp
	src/squish/clusterfit.cpp 
	src/squish/colourset.cpp
	src/squish/rangefit.cpp 
	src/squish/maths.cpp 
	src/squish/texture_compression_s3tc.txt
	src/squish/squish-Info.plist
	src/squish/config 
	src/squish/colourfit.cpp
	src/squish/singlecolourlookup.inl
	src/squish/squish.cpp
	src/squish/colourblock.cpp
	src/squish/alpha.cpp
)

string(CONCAT ALL_LINK_OPTIONS
	" --pre-js src/pre.js"
	" -s EXPORTED_FUNCTIONS='[\"_inflate\", \"_workImage\", \"_malloc\", \"_free\"]'"
	" -s EXPORTED_RUNTIME_METHODS='[\"ccall\", \"setValue\", \"writeArrayToMemory\", \"getValue\"]'"
	" -s ALLOW_MEMORY_GROWTH=1"
  " -s NO_DISABLE_EXCEPTION_CATCHING"
  " -s ASSERTIONS"
)

string(CONCAT T3DTOOLS_LINK_OPTIONS
	${ALL_LINK_OPTIONS}
	" -s \"EXPORT_NAME='t3dtools'\" -s MODULARIZE=1"
)

string(CONCAT T3DWORKER_LINK_OPTIONS
	${ALL_LINK_OPTIONS}
	" --post-js src/t3dlib_worker.js -s WASM_ASYNC_COMPILATION=0"
)

add_executable(t3dtools.js src/t3dtools.cc)
target_sources(t3dtools.js PUBLIC src/3dcx.cc)
target_link_libraries(t3dtools.js gw2DatTools gw2Formats libsquish)
set_target_properties(t3dtools.js PROPERTIES LINK_FLAGS ${T3DTOOLS_LINK_OPTIONS})
set_target_properties(t3dtools.js PROPERTIES ADDITIONAL_CLEAN_FILES t3dtools.wasm)

add_executable(t3dworker.js src/t3dtools.cc)
target_sources(t3dworker.js PUBLIC src/3dcx.cc)
target_link_libraries(t3dworker.js gw2DatTools gw2Formats libsquish)
set_target_properties(t3dworker.js PROPERTIES LINK_FLAGS ${T3DWORKER_LINK_OPTIONS})
set_target_properties(t3dworker.js PROPERTIES ADDITIONAL_CLEAN_FILES t3dworker.wasm)
