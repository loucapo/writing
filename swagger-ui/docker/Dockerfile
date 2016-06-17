FROM nginx
MAINTAINER sls

ENV VERSION "v2.1.4"
ENV FOLDER "swagger-ui-2.1.4"

WORKDIR /opt/app/current

RUN apt-get update
ADD ./swagger-ui/docker/nginx.conf /etc/nginx/nginx.conf
ADD ./swagger-ui/dist .
# webserver port
EXPOSE 80
