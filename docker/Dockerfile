FROM sls_node:latest

MAINTAINER ecosystem@saplinglearning.com

ADD ./package.json ./package.json
ADD ./config ./config
COPY ./.npmrc ./.npmrc

RUN mkdir /root/.ssh/

#RUN ssh -oStrictHostKeyChecking=no bitbucket.org || true

RUN npm install --silent

ADD ./app /$HOME/app
