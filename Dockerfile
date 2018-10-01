FROM node:8.12

WORKDIR /usr/src/app
COPY . .
RUN yarn && \
    yarn build-dev

EXPOSE 8080
CMD [ "yarn", "serve" ]