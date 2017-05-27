FROM banian/node

ENV NODE_ENV=production
WORKDIR /usr/src/app
CMD npm start

ADD . /usr/src/app
