FROM node:8.12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
ADD . .
RUN chmod +x start.sh

EXPOSE 8080
CMD ./start.sh