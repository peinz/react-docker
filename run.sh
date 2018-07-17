#!/bin/sh

docker run -ti -p 8080:8080 --name react-docker -v $PWD/app:/myfiles/app -d react-docker
