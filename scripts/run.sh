#!bin/bash
if [ $# -eq 0 ]
  then
    echo "pass map path, a start room and optionally one object (ex. sh scripts/run.sh ./maps/first-map.json 4 \"Knife\")"
    exit 1
fi

docker run --entrypoint npm mytest run start $1 $2 $3
