FROM node:14-stretch

RUN mkdir app
WORKDIR /app

RUN mkdir src

COPY package.json /app
RUN yarn global add pm2
RUN yarn

COPY src /app/src
COPY .env /app

EXPOSE 8080
ENTRYPOINT [ "pm2-runtime", "src/" ]