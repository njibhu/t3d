# `t3d-utils`

## Usage:
`yarn ts-node ./bin/rdata-extract.ts PATH_TO/GW2-64.exe OUTPUT_FILE.json`

Enable parser diagnostics with `--debug-structs <LOG_FILE>`:
`yarn ts-node ./bin/rdata-extract.ts PATH_TO/GW2-64.exe OUTPUT_FILE.json --debug-structs struct-debug.log`

## Notes:
This version only supports the 64bits version of guildwars2. (Pointer size is 8 bytes)
