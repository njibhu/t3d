# T3D

This is the new home of the Tyria3D project.

### Come and try it here:

- [Explorer](https://njibhu.github.io/t3d/explorer/index.html)
- [T3D Examples](https://njibhu.github.io/t3d/examples/index.html)

## What is T3D ? Whasn't there a Tyria3DLibrary ?

T3D is a new mono-repository to combine work on the few small projects using the library.
The point of using a mono-repo is to allow faster iterations on different part of the project. It also decrease greatly the work to maintain the project.

The library contians the core logic for parsing and transorming all the data coming from the dat archive.

The projects built on it are:

### - Tyria3DApp (now abandonned)

Tyria3DApp was the legacy app viewer that was publicly available to the community. Due to recent changes to the formats, it is not compatible anymore with the current game files. Because of the growing differences and incertainty about the ownership of the project, it is now abandonned.

### - Tyria2D (Part of the examples)

An archive browser with integrated chunk parser for the file archive. Still from the original release of the Tyria3DLibrary.

### - SimpleModelViewer (Part of the examples)

A simple 3d model viewer for the file archive. Still from the original release of the Tyria3DLibrary.

### - Explorer (new!)

The explorer is a newly built version of the Tyria3DApp built on top of the current version of the library. The developement of the explorer will focus in the future on this version.

## Extra modules

### - t3dtools.js

This project contains the asm.js port of the t3dtools written originally by Ahom.

### - utils

This module contains a lot of utility including the generators for the declaration and definitions files for the new parser.

---

## Current goals and status

This repository contains experimental and not-working code. Some of it is imported, and other are work in progress.

The two current main focus are:

- Finishing the new parser written in typescript and integrate it with the library. This will allow for much easier maintenance as the game continues to be updated.

- Get the explorer functional and working as well as Tyria3DApp was.

---

## Contributors

Here are a few names of people which contributions have been critical to the existance of this project:

- Ahom
- RequestTimeout408
