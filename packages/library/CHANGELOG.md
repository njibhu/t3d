# Changelog

All changes on the project will be documented in this file

## 1.1.0 - 

### Changed
 * Upgrade threejs support to r91, but dropped compatibility with older versions of threejs
 * ModelRenderer have been renamed SingleModelRenderer (more descriptive)
 * The contributors are listed in the AUTHORS.md file and the copyright headers have been updated
 * README.md have been updated
 * LocalReader have been completely rewrite. Many of the old API have been removed, 
   the critical ones are still here but deprecated.
   See the top of the LocalReader file or documentation to see details on API change.
 * The documentation is no-longer generated with yuidoc but jsdoc3 to have better support of async functions.
   A lot of small documentation changes have been made to make the result being as consistant as possible with
   the old documentation.
 * Many ES4 class declarations have been upgraded to ES6.
 * The T3D static class becomes a static object to be more consistant. The only change is that it cannot be used
   with the operator new anymore.
 * GW2File and GW2Chunk are now correctly internally referenced with their proper names instead of File and Chunk.
 * RenderUtils.loadLocalTexture is now deprecated because it is just a re-export from MaterialUtils. Direct use of
   the latter one will be required in the future.

### Removed
 * Support for Nacl inflater have been removed, every platform uses t3dtools.js now.

### Added
 * The new LocalReader allow to save progress of scan
 * Added DDS, PNG, RIFF, yui scripts, raw ASND types detected by the scan function.
 * Added a new script for IDA to generate chunk definitions with the 64bit version of guildwars 2 (GW2-64.exe)