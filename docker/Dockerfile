FROM eco_node:latest

MAINTAINER reharik@gmail.com

ADD ./package.json ./package.json
#ADD ./bablerc ./bablerc

RUN npm install --silent

ADD ./app /$HOME/app