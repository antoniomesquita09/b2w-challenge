FROM node:14.4.0-alpine as base

ARG NODE_ENV
ARG PORT
ARG SKIP_PREFLIGHT_CHECK
ARG REACT_APP_API_URL

ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT
ENV SKIP_PREFLIGHT_CHECK=$SKIP_PREFLIGHT_CHECK
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN apk add --update --no-cache alpine-sdk python

WORKDIR /pokemon-store/

COPY package.json yarn.lock jsconfig.json .eslintrc.js prettier.config.js /pokemon-store/

RUN yarn --pure-lockfile

COPY src /pokemon-store/src/

COPY public /pokemon-store/public/

EXPOSE 3000

FROM base as development

CMD yarn start

FROM base as production

CMD yarn start