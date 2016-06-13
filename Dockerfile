FROM node:4.4.5
ADD . /opt/cbapi
WORKDIR /opt/cbapi
RUN npm install
CMD node app.js
EXPOSE 3000
