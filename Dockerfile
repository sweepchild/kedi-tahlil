FROM docker.io/node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN apk add git --no-cache



COPY . .
RUN npm run build

FROM docker.io/nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
