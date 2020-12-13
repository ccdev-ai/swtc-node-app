FROM node:lts-alpine3.12
RUN mkdir -p /usr/src/app
COPY app.js /usr/src/app
EXPOSE 8080
CMD [ "node", "/usr/src/app/app.js" ]