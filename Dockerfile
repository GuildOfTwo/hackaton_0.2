FROM node:lts-alpine as build

ARG API_BASE_URL
ENV REACT_APP_API_BASE_URL=$API_BASE_URL
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/.nginx/ssl-options.conf /etc/letsencrypt/ssl-options.conf
COPY --from=build /app/.nginx/certs /etc/letsencrypt

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
