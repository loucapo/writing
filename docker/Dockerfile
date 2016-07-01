FROM eco_node:latest

MAINTAINER ecosystem@saplinglearning.com

ADD ./package.json ./package.json
ADD ./config ./config

RUN mkdir /root/.ssh/

#RUN ssh -oStrictHostKeyChecking=no bitbucket.org || true

RUN npm install --silent

ADD ./app /$HOME/app
