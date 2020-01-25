# Roadmap
* [+] = done
* [~] = ongoing

____
## ROADMAP 1.2.0

### Major: 

    ⋅ Cleanup of the Utils + DataRenderers:
        ⋅ Move all the chunk handling stuff into utils and make the DataRenderers pretty interfaces []
        ⋅ RenderUtils []
        ⋅ MaterialUtils []
    ⋅ Use gw2 skydomes + (threejs example sky) []
    ⋅ Replace all deprecated uses of LocalReader and change it []
    ⋅ Cleanup the GW2Chunk []
    ⋅ Move Tyria2D to its own project
    ⋅ Use Babel to have an ES5 target as well.

### Minor: 

    ⋅  Clean all the todos []
    ⋅  Rework the LOD in TerrainRenderer and SingleModelViewer (see id: 229478)
        ⋅  Debug tool: (see threejs example interactive/buffergeometry ): Tells name of a mesh by pointing at it [+] (Done in example)
    ⋅ Make EmissiveMap work []
        ⋅ Fix (if not with emissivemap) the black not transparent textures (backside) []
    ⋅ Check normal maps and other kind of maps []
____
## ROADMAP 1.1.0

### Major: 

    ⋅ Update THREEjs + tools [+]
    ⋅ Major revamp of the LocalReader:
        ⋅ Only use of t3dtools [+]
        ⋅ Allow spawn of webworkers [+]
        ⋅ Migrate to IndexedDB; store all Mft data (Type, CRC, size) into it [+]
        ⋅ Fast rescan with existing data [+]
        ⋅ Full rewrite of LocalReader (archive) [+]
    ⋅ Tyria3DFormats splitup + autoscript [+]
    ⋅ GW2Chunk:
        ⋅ Multiple definitions: __root property name is now defining the use of the chunk [+]
    ⋅ Migrate Yuidoc to Jsdoc [+]

### Minor: 

    ⋅  Bump to 1.1 [+]
    ⋅  Copyrights mentions and headers [+]
    ⋅  Rewrite gulpfile [+]
    ⋅  Check npm dependencies [+]
