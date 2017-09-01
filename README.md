# Writing Tools

## Prerequisites

* [Homebrew](https://docs.brew.sh/Installation.html)
* [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html)
* [Docker for Mac](https://store.docker.com/editions/community/docker-ce-desktop-mac)
* PostgreSQL (`brew install postgresql`)
* Node.js (`brew install node`)
* Yarn (`brew install yarn`)
* make (`brew install make`)
* direnv (`brew install direnv`)
* parallel (`brew install parallel`)

## Installation

```
$ make deps
```

Note that you will need to be on the MacMillan VPN in order to download some of these dependencies.

## Database Initialization

```
$ source env.sh
$ brew services start postgresql
$ psql postgres -c "CREATE ROLE writer_key WITH SUPERUSER LOGIN PASSWORD 'writer_key'"
$ psql postgres -c "CREATE DATABASE writer_key OWNER writer_key"
$ psql -U writer_key -c "DROP SCHEMA public"
$ psql -U writer_key -c "CREATE SCHEMA public AUTHORIZATION writer_key"
$ psql -U writer_key -c "CREATE SCHEMA writer_key AUTHORIZATION writer_key"
$ cd data && yarn migrate up && yarn loadData
```

## Development

```
$ source env.sh
$ make
$ open http://localhost:10080/instructor (for instructor experience)
$ open http://localhost:10080/student (for student experience)
```
NOTE: You may additionally add a UUID for an activity after the instructor or student
routes if you would like to target a specific resource.

## Docker

We typically do development in a non-containerized environment. However, we like to make sure that all changes still work inside the container that will be deployed to production.

### Configuring the AWS Command-Line Tools
In order to run the containerized version of the application, you'll need to configured your AWS CLI. To do this, run
```$ aws configure```
and enter your AWS Access Key ID and AWS Secret Access Key as needed. For the default region name, you can put `us-east-1`.

### Running the Docker Container
To build and run the Docker Container, run
```
$ make dockerDevUp
```
The application will run on the same ports as in the non-containerized environment (10080).

### Stopping and Removing the Docker Container
The containers should all stop gracefully when shutting down the server, but if you need to shut down and remove the containers for whatever reason, run
```
$ make dockerDevDown
```

## Linting

```
$ make lint # runs yarn lint in all projects
```

## Testing

```
$ source .envrc.example
$ make test
```

## Config Autoloading

```
$ cp .envrc.example .envrc
$ direnv allow . # edit .envrc and run this to reload config
```
