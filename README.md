# SECURITY DEVOPS
# INSTRUÇÕES PARA REALIZAÇÃO DO TESTE - SECURITY DEVOPS
# (https://github.com/fiap2tin):

1º Download do projeto/git clone, acessar a pasta onde se encontra o dockerfile e usar o arquivo `Dockerimage` para criar a imagem:

`$ docker build -t <minha-imagem> .`

Após a criação, rodar a imagem mapeando a porta `3000` do container para uma porta específica do host:

`$ docker run --rm --name <meu-container> -p <porta_do_host>:3000 <minha-imagem>`

Por fim, acessar a aplicação no host a partir do endereço `http://localhost:<porta_do_host>`
