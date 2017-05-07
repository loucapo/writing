### Getting Started
Assuming that the repos have not been cloned.
If they have been cloned make sure `wk_frontend` is on branch `wk_dev` then skip to step 2.

#### 1) Clone
    make clone-repos

#### 2) Make it run
    make run
      ...
      (build and download)
      ...
    localhost:10080


### Overview

WK Compose is an orchestration script that builds docker containers for `wk_frontend`, `wk_api`,
`wk_serve`, and `wk_data`. It downloads all the necessary dependencies per container and launches them.

### Make commands

Being an orchestration script, the `Makefile` contains commands that help manage the lifecycle of
the application. The following commands are made accessible:

##### Build and run the App stack
  * `run` (runs all with files copied into docker containers)
  * `run-dev` (runs with all app files mounted in containers to local files)

##### Clone Repos
  * `clone-repos` (clones ALL repos)

##### Build Containers
* `docker-build-node`
* `docker-build-front-end`

##### Remove ALL containers and images
  * `kill-all`

##### Remove SELECT containers and images
  * `kill-all-but-bases`
  * `kill-all-but-node`
  * `kill-front-end`
  * etc...

##### exec into a container
  * `exec con=[mycontainer]`
