# Usa a imagem oficial do Node.js como base
FROM node:latest

# Define o diretório de trabalho dentro do contêiner como a raiz
WORKDIR /

# Copia o arquivo package.json e package-lock.json (se existir) para a raiz
COPY package*.json ./

# Instala as dependências do projeto na raiz
RUN npm install

# Copia todos os arquivos do diretório local para a raiz no contêiner
COPY . .

# Expõe a porta onde a aplicação Next.js será executada
EXPOSE 3000

# Define o comando para iniciar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "dev"]
