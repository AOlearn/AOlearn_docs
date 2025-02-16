# AOLearn

A ML framework for AO the hyper parallel computer

## What is AOLearn?

This library provides implementations of several common machine learning algorithms. It is designed primarily for educational purposes and small-scale projects. For applications demanding high performance or significant parallelism, consider deploying trained models to the _ao_ hyper-parallel computer by Arweave, which offers a powerful environment for Lua-based computation.


## How to get started
### easy (recomended)
- open ide.betteridea.dev
- now while creating a new process select aolearn as the module id in the more options -> AO Process module

### advanced
- add the module id while spawning a new process in aos cli or aoconnect sdk ao.spawn as  **'qG-uo90351vUF7WPmUcObFtk7NU1isZYdPS0r2yQdKY'**

### importing
``` lua
aolearn=require('aolearn')
```
