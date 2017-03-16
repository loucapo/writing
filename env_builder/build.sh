#!/bin/bash 

###########################################
#
# This script is used to dynamically build an .env file
# ./build.sh <type> <key file> <path to place .env file> <values file>
#  type = local | bamboo
#  key file = path to key file
#  path to the .env = only required for local
#  values file = path to values file (only required for local)
#
###########################################

TYPE="$1"
KEY_FILE="$2"
PATH="$3"
VALUE_FILE="$4"

die() { echo "$@" 1>&2 ; exit 1; }

KEY=()
if [ -f "$KEY_FILE" ]; then
  while read -r line
  do
    if [ ! -z $line ]; then
      KEY+=("$line")
    fi
  done < "$KEY_FILE"
else 
  die "$KEY_FILE not found"
fi

if [ $TYPE == "local" ]; then
  ENV_FILE="$PATH/.env"
  if [ -f "$ENV_FILE" ]; then
    echo ".env file already exists"
    exit
  fi

  if [ -z "$VALUE_FILE" ]; then
    die "VALUE_FILE is unset or empty"
  fi

  if [ -f "$VALUE_FILE" ]; then
    VALUE=()
    while read -r line
    do
      if [ ! -z $line ]; then
       VALUE+=("$line")
     fi
    done < "$VALUE_FILE"
  else
      die "$VALUE_FILE not found"
  fi

  if [ ${#KEY[@]} != ${#VALUE[@]} ]; then 
    die "You have a miss match of keys and values!  Please check your files"
  fi 

  echo "Everything looks good so far creating env file now..."
  for COUNTER in "${!KEY[@]}"; do
   echo "${KEY[$COUNTER]}=${VALUE[$COUNTER]}" >> $ENV_FILE
  done 
  echo "$ENV_FILE file is created"
  echo "---------------------"
  exit
fi

if [ $TYPE == "bamboo" ]; then
  ENV_FILE=".env"
  for COUNTER in "${!KEY[@]}"; do
    BAMBOO_VAR = "bamboo.${KEY[$COUNTER]}"
    if [ ! -z ${"$BAMBOO_VAR"} ]; then 
      echo "${KEY[$COUNTER]}=${"$BAMBOO_VAR"}" >> $ENV_FILE
    else
      die "$BAMBOO_VAR does not exist!  Please update Bamboo environment variables"
    fi 
  done
fi