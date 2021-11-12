# Boas vindas ao repositório do projeto Lista de Tarefas Docker!

Essa é um projeto que teve como objetivo entender como o docker funciona e como fazer o Deploy de uma aplicação utilizando o mesmo, além disso treinei o uso do context API do react fazendo uma aplicação de lista de tarefas.

Aqui tem um exemplo em imagem da aplicação:



# Aprendizados
Neste projeto fui capaz de:

  * Criar um arquivo responsável por subir um container com o nome docker-compose

  * Utilizar um arquivo Dockerfile para fazer o build da aplicação

  * Entender o conceito dos container e imagens em docker

  * Utilizar o NGINX para permitir o acesso através da porta 80 direcionando para a porta do container;

  * Criar uma lista de tarefas que pode ser reordenada arrastando e soltando com a biblioteca beautiful dnd

  * Criar um contexto em React através do Context API



### STATUS DO PROJETO: Finalizado



# Instruções para abrir o projeto no seu computador e rodar o arquivo docker-compose

1. Clone o repositório
  * `git clone git@github.com:cifernando/lista-de-tarefas-docker.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd lista-de-tarefas-docker`
# Para essas instruções é necessário ter o docker e o docker-compose instalado e configurado no seu computador.

2. Rodar o arquivo docker-compose
  * `docker-compose up`
  * O docker-compose irá rodar o container do nome lista-de-tarefas-docker e o nome do container será lista-de-tarefas-docker.
  * Acessar a aplicação:
    * `http://localhost:8080`

# Caso queira rodar o projeto com o React

1. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador)



# Tecnologias utilizadas no projeto

1. Docker
2. Docker-compose
3. React
4. beautiful-dnd
5. Context API
6. NGINX
