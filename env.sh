#!/bin/bash
for x in `cat .envrc.example`; do export $x; done;
