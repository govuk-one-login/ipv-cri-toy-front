FROM node:22.2.0-alpine3.19@sha256:9e8f45fc08c709b1fd87baeeed487977f57585f85f3838c01747602cd85a64bb

ENV PORT 5050

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build

CMD npm run dev

EXPOSE $PORT
