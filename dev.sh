#!/usr/bin/env bash

source `which env_parallel.bash`
source .envrc.example
parallel --jobs 32 --ungroup < services.txt
