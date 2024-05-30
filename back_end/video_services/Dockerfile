from node:16-alpine

USER root

# Create app directory
WORKDIR /usr/src/app


# Install app dependencies
COPY package.json ./

RUN apk update
RUN apk add
RUN apk add --no-cache ffmpeg
RUN npm install


# Bundle app source
COPY . .

EXPOSE 5001

CMD [ "npm", "start" ]