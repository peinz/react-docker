FROM node:8.11.3-alpine

RUN apk update && apk add nginx \
 && mkdir /run/nginx \
 && adduser -D -g 'www' www \
 && mkdir /www \
 && chown -R www:www /var/lib/nginx \ 
 && chown -R www:www /var/tmp/nginx \ 
 && chown -R www:www /www

WORKDIR /myfiles

COPY ./app/package*.json ./
RUN npm install

COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY ./app ./app
COPY ./config/* ./
CMD ./start.sh
