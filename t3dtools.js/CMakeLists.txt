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
	" -s EXPORTED_FUNCTIONS='[\"_inflate\", \"_workImage\"]'"
	" -s EXTRA_EXPORTED_RUNTIME_METHODS='[\"ccall\", \"setValue\", \"writeArrayToMemory\", \"getValue\"]'"
	" -s ALLOW_MEMORY_GROWTH=1"
)

string(CONCAT T3DTOOLS_LINK_OPTIONS
	${ALL_LINK_OPTIONS}
	" -s \"EXPORT_NAME='t3dtools'\" -s MODULARIZE=1"
)

string(CONCAT T3DWORKER_LINK_OPTIONS
	${ALL_LINK_OPTIONS}
	" --post-js src/t3dlib_worker.js"
)

add_executable(t3dtools src/t3dtools.cc)
target_sources(t3dtools PUBLIC src/3dcx.cc)
target_link_libraries(t3dtools gw2DatTools gw2Formats libsquish)
set_target_properties(t3dtools PROPERTIES LINK_FLAGS ${T3DTOOLS_LINK_OPTIONS})

add_executable(t3dworker src/t3dtools.cc)
target_sources(t3dworker PUBLIC src/3dcx.cc)
target_link_libraries(t3dworker gw2DatTools gw2Formats libsquish)
set_target_properties(t3dworker PROPERTIES LINK_FLAGS ${T3DWORKER_LINK_OPTIONS})