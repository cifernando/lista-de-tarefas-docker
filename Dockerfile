FROM node:14.17-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build ./app/build /usr/share/nginx/html
EXPOSE 80

