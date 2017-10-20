# fiap-devops

### Para a 2a NAC da disciplina [Security Devops](https://github.com/fiap2tin):

Após download/clone do projeto, acessar a pasta `fiap-devops/nac_docker` e usar o arquivo `Dockerimage` para criar a imagem:

`$ docker build -t <minha-imagem> .`

Concluída a criação, rodar a imagem mapeando a porta `3000` do container para uma porta específica do host:

`$ docker run --rm --name <meu-container> -p <porta_do_host>:3000 <minha-imagem>`

Por fim, acessar a aplicação no host a partir do endereço `http://localhost:<porta_do_host>`
