#INSTALAÇÃO NODEJS
apt install curl
curl -sL https://deb.nodesource.com/setup_16.x | bash -
apt install nodejs

#INSTALAÇÃO DAS DEPENDENCIAS(dentro da pasta do projeto)
npm install

#SUBINDO O POSTGRES
docker pull postgres
docker run --name postgreapi -p5432:5432 -e POSTGRES_PASSWORD=pass1234 postgres
docker exec postgreapi psql -c "CREATE DATABASE vehiclerent" -U postgres

#RODANTO O PROJETO EM DESENVOLVIMENTO
npm run dev

#ACESSAR SWAGGER
#SENHA admin


#Acesso maquina local
http://127.0.0.1:3100/api-docs 

#Acesso maquina produção
http://vps39115.publiccloud.com.br::3100/api-docs 
