FROM nginx

# Maintainer
MAINTAINER MVN

# set WORKDIR
WORKDIR /opt/app/current

COPY ./nginx.conf /etc/nginx/nginx.conf

RUN mkdir /opt/app/current/dist

VOLUME ./dist:/opt/app/current/dist
