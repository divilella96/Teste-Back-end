const University = require('../models/universitiesModel');

/*
Método para listagem de Universidades:
○ GET /universities
    ■ Lista todas as universidades do banco de dados.
    ■ Retornar os campos _id, nome, país e estado.
    => Permitir filtro por país. Exemplo GET /universities?country=brazil
    => O método de listagem deverá retornar no máximo 20 registros por página.
    => Deverá ser possível informar a página na requisição para ter acesso a todos
       os registros.
*/

const getAll = (req, res) => {
    const page = req.query.page || 0;
    const country = req.query.country || {$ne: null};

    University.aggregate([
        {$match: {country}},
        {$project: { _id: 1, nome: '$name', 'país': '$country', 'estado': '$state-province' }}
    ])
        .sort({ _id: 1})
        .skip(page > 0 ? ((page -1)*20) : 0)
        .limit(20)
        .then(data => res.json(data))
        .catch(error => res.json(error));
};

/*
● Método para buscar a universidade por _id.
    => GET /universities/:id (busca dados da universidade indicada pelo _id)
    ■ Retorna todos os dados armazenados da universidade em questão.
 */

const getById = (req, res) => {
    University.findById(req.params.id)
        .then(data => res.json(data))
        .catch(error => res.json(error));
};

/**
 Método para cadastro de Universidades:
○ POST /universities. Campos:
    ■ alpha_two_code
        ● Sigla do país com 2 caracteres
    ■  web_pages
        ● Lista com as URL’s da universidade
    ■ name
        ● Nome da universidade por extenso
    ■ country
        ● Nome do país por extenso
    ■ domains
        ● Lista de domínios da universidade
    ■ state-province
        ● Sigla do estado onde fica a universidade se houver
    => Utilizar como referência os campos recebidos da API da parte 1 e já
        armazenados no banco de dados.
    => Para evitar duplicidade no banco de dados, deverá impedir que seja
        cadastrada uma nova universidade caso já possua alguma com o mesmo
        País, Estado e Nome.

 */
const insert = (req, res) => {
    const data = {
        domains: req.body.domains,
        web_pages: req.body.web_pages,
        'state-province': req.body['state_province'],
        name: req.body.name,
        country: req.body.country,
        alpha_two_code: req.body.alpha_two_code
    };

    University.updateOne(
        {name: data.name, country: data.country, 'state-province': data['state-province']},
        {$setOnInsert: data}, 
        {upsert: true}
        )
        .then(qRes => res.json(qRes))
        .catch(error => res.json(error));
}

/**
 Método para atualização de Universidades:
=>   PUT /universities/:id. Campos:
        ■ web_pages
            ● Lista com as URL’s da universidade
        ■ name
            ● Nome da universidade por extenso
        ■ domains
            ● Lista de domínios da universidade
            ● Método para remoção de Universidades:
        => DELETE /universities/:id
 */
const updateById = (req, res) => {
    const data = {
        web_pages: req.body.web_pages,
        name: req.body.name,
        domains: req.body.domains
    };

    University.updateOne({_id: req.params.id}, data)
        .then(qRes => res.json(qRes))
        .catch(error => res.json(error));
};


const deleteById = (req, res) => {
    University.deleteOne({_id: req.params.id})
        .then(data => res.json(data))
        .catch(error => res.json(error));
}

module.exports = {
    getAll,
    getById,
    insert,
    updateById,
    deleteById
}