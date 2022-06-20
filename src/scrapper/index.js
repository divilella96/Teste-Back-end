const axios = require('axios');
const mongoose = require('mongoose');
const University = require('../models/universitiesModel');

(async () => {
    const database_url = `${process.env.DATABASE_URL}${process.env.DATABASE_DB}` || 'mongodb://localhost:27017/test';

    const listaUniversidades = [
        'argentina',
        'brasil',
        'chile',
        'colombia',
        'paraguai',
        'peru',
        'suriname',
        'uruguay'
    ];

    const APIurl = 'http://universities.hipolabs.com/search?country=';

    for(const universidade of listaUniversidades){
        console.log(`Fetching universities from: ${universidade}`);

        await axios.get(`${APIurl}${universidade}`).then(async res => {

            try {
                
                for(const data of res.data){
                    await University.replaceOne(data, data, {upsert: true})
                }

            } catch (error) {
                console.error(error)
            }

            console.log(`Universities from ${universidade} inserted to database.`)
        })
    }

    console.log('Scrapper run successfully!');
})();
