FROM node:4.4.7

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@3.7.5

ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/descartes/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/descartes

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]
