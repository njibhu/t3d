# T3D

This is the new home of the Tyria3D project.

### Come and try it here:

- [Explorer](https://njibhu.github.io/t3d/explorer/index.html)
- [Archive Browser](https://njibhu.github.io/t3d/browser/index.html)
- [T3D Examples](https://njibhu.github.io/t3d/examples/index.html)

## What is T3D ? Wasn't there a Tyria3DLibrary ?

T3D is a new mono-repository to combine the work of the few small projects using the library.
The point of using a mono-repo is allowing faster iterations on different parts of the project. It also greatly decreases the burden of maintaining the project.

The library contains the core logic for parsing and transforming the data coming from the `.dat` archive.

The projects built on it are:

### - Tyria3DApp (now abandonned)

Tyria3DApp was the legacy map viewer publicly available. Due to recent changes to the archive, it is no longer compatible with the current game files. Because of the increasing differences and incertainty about the ownership of the project it is now abandonned.

### - T3D Explorer (new!)

The explorer is a newly built version of the Tyria3DApp built on top of the current version of the library. The developement of the explorer will now focus on this version instead of the legacy Tyria3DApp.

### - T3D Browser (previously Tyria2D)

An archive browser with an integrated chunk parser for the file archive. Coming from the original release of the Tyria3DLibrary.

### - SimpleModelViewer (Part of the examples)

A simple 3D model viewer for the file archive. Coming from the original release of the Tyria3DLibrary.

## Extra modules

### - t3dtools.js

This project contains the `wasm` port of the t3dtools originally written by Ahom.

### - utils

This module contains a lot of utilities including the generators for the declaration and definition files for the new parser.

---

## Current goals and status

This repository contains experimental and non-working code. Some of it is imported while other is work in progress.

The current main focus is:

- Finishing the new parser written in TypeScript and integrate it with the library. This will allow for much easier maintenance as the game continues to be updated.

---

## Contributors

Here are a few people which contributions have been critical to the existance of this project:

- Ahom
- RequestTimeout408

## License

All the code is under GPL 3 license with the exception of assets from ArenaNet's Guild Wars 2 Asset Kit.
A COPYRIGHT file in the same folder of these assets contains the necessary copyright notice.
