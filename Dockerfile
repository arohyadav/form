FROM node:18.16.0-alpine AS server
WORKDIR /app/server
COPY server/package.json server/package-lock.json ./
RUN npm install
COPY server .
ENV PGUSER=postgres
ENV PGHOST=database-1.cuhephxwwjxs.us-east-1.rds.amazonaws.com
ENV PGDATABASE=mydb
ENV PGPASSWORD=password
ENV PGPORT=5432
EXPOSE 5000
CMD [ "npm", "start" ]


FROM node:18.16.0-alpine AS client
WORKDIR /app/client
COPY client/package.json client/package-lock.json ./
RUN npm install
COPY client .
RUN npm run build


FROM nginx
COPY --from=client /app/client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
