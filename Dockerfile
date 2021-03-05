FROM node:15-alpine as react-build
WORKDIR /app
COPY . ./

RUN yarn install
RUN yarn build:staging

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]