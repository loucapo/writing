#!/usr/bin/env bash

source `which env_parallel.bash`
parallel --jobs 32 --ungroup < services.txt
