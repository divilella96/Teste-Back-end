const mongoose = require('mongoose');

const UniversitySchema = mongoose.Schema({
    domains: {
        type: Array
    },
    web_pages: {
        type: Array
    },
    'state-province': {
        type: String
    },
    name: {
        type: String
    },
    country: {
        type: String
    },
    alpha_two_code: {
        type: String
    }
});

module.exports = mongoose.model('universities', UniversitySchema);