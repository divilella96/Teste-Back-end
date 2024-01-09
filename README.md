![Thumbnails](https://github.com/divilella96/Teste-Back-end/blob/main/Thumbnails_bis2BisTeste.png)


# Resumo do projeto teste vaga back-end
1 - O objetivo do teste é varrer uma API que retorna todas as universidades contidas em cada país da lista fornecida e salvar estas informações no banco de dados.  
2 - O objetivo do teste é criar uma API que viabilize um CRUD (create, retrieve, update, delete)
das universidades anteriormente cadastradas no MongoDB.

## 🔨 Configurações iniciais

- `1º Passo` `Baixe o repositório`: Basta você ir até o https://github.com/divilella96/Teste-Back-end e clonar o mesmo.
- `2º` `Instalando os módulos e dependências`: Para efetuar este passo será necessário utilizar o terminal como seguinte comando:
```cmd
         npm install
```
- `3º Passo` `Informações do banco de dados e porta para API`: no arquivo .env deverá se informar os dados relacionados ao bancos e porta. Exemplo:

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

- `5º Passo` `Executando o servidor e o scrapper`: Para executar sevidor e o scrapper simultâneo é necessário utilizar o seguinte comando:
```cmd
         npm run start-scrapper
```
## ✔️ Testes
-`Realizando testes`: Para realização dos testes será necessário utilizar o seguinte comando:
```cmd
         npm run test
```


## ✔️ Utilizando os métodos

- `GET` : 
- `Método para listar as universidades.`: Retorna os campos: _id, nome, país e estado;
- `Filtro por query country e page, exemplo:`
```cmd
         /universities?country=brazil&page=2
```
- `Pesquisar por uma id passada na url`
```cmd
         `/universities/:id`
```
- `POST` : 
- `Método para inserir uma nova universidade`:
- Não serão cadastradas as requisições onde haja duplicidade das propriedades país, estado e nome.
- Deverá conter um body com as informações:

- `Sigla do país com 2 caracteres (String)` : 
```
         alpha_two_code
```

- `Lista com as URL’s da universidade (Array)` : 
```
         web_pages
```

- `Nome da universidade por extenso (String)` : 
```
         name
```

- `Nome do país por extenso (String)` : 
```
         country
```

- `Lista de domínios da universidade (Array)` : 
```
         domains
```

- `Sigla do estado onde fica a universidade se houver (String)` : 
```
         state-province
```


- `PUT` : 
- `Método que atualiza uma universidade pelo ID inserido na url.`  :
```
         `/universities/:id`
```
- Atualiza apenas as informações de: 
```
         - web_pages
         - name 
         - domains.
```

- `DELETE` : 
- `Método que deleta uma universidade pelo ID inserido na url.`  :
```
         `/universities/:id`
```

## ✔️ Técnicas e tecnologias utilizadas

- ``Node.js``
- ``MongoDB``

## 📁 Acesso ao projeto
Você pode acessar os arquivos do projeto clicando [aqui](https://github.com/divilella96/Teste-Back-end).
