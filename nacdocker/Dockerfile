# pull da imagem de referência da aplicação (node) no docker registry
FROM node

# cria a pasta "app" na raiz da imagem
RUN mkdir /app

# copia o conteúdo da pasta "app" do host para a pasta "/app" da imagem
COPY ./app ./app

# seta a pasta "/app" da imagem como diretório raiz da aplicação
WORKDIR /app

# executa o comando "npm install" para instalar as dependências da aplicação
RUN npm install

# expõe a porta 3000 quando executada a imagem
EXPOSE 3000

# executa do comando "node app" para a inicialização da aplicação quando executada a imagem
CMD [ "node", "app" ]