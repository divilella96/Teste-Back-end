![Thumbnails](https://github.com/divilella96/Teste-Back-end/blob/main/Thumbnails_bis2BisTeste.png)


# Resumo do projeto teste vaga back-end
1 - O objetivo do teste é varrer uma API que retorna todas as universidades contidas em cada país da lista fornecida e salvar estas informações no banco de dados.  
2 - O objetivo do teste é criar uma API que viabilize um CRUD (create, retrieve, update, delete)
das universidades anteriormente cadastradas no MongoDB.

## 🔨 Configurações iniciais

- `1º Passo` `Baixe o repositório`: Basta você ir até o https://github.com/divilella96/Teste-Back-end e clonar o mesmo.
- `2º` `Instalando os modulos e dependencias`: Para efetuar este passo será necessário utilizar o terminal como seguinte comando:
```cmd
         npm install
```
- `3º Passo` `Informações do banco de dados e porta para API`: no arquivo .env deve se informar os dados relacionados ao bancos e porta. Exemplo:

```cmd
         // Porta que será executado o servidor
            PORT=3030
         // Url do banco de dados (com '/' no final) 
            DATABASE_URL=mongodb://localhost:27017/
         // Nome do banco de dados
            DATABASE_DB=universidades
```

- `4º Passo` `Iniciando Servidor`: Para iniciar o servidor será necessário utilizar o seguinte comando:
```cmd
         npm start
```

- `5º` `Executando o servidor e o scrapper`:Para executar o sevidor e so scrapper simultâneo é necessário utilizar o seguinte comando:
```cmd
         npm run start-scrapper
```
## ✔️ Testes
-`Realizando testes`: Para realização dos testes será necessário utilizar o seguinte comando:
```cmd
         npm run test
```

## ✔️ Técnicas e tecnologias utilizadas

- ``Node.js``
- ``MongoDB``

## 📁 Acesso ao projeto
Você pode acessar os arquivos do projeto clicando [aqui](https://github.com/divilella/Teste-Back-end).
