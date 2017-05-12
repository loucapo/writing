# Writing Tools

## Prerequisites

- nodejs
- yarn
- postgresql
- make
- parallel
- direnv

## Installation

```
$ brew install postgresql
$ brew install node
$ brew install yarn
$ brew install parallel
$ brew install direnv
$ make deps
```

## Database Initialization

```
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
