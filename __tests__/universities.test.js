const request = require('supertest');
const app = require('../../src/index');

describe('Get a list of universities', () => {
    it('should get a 200 status', async () => {
        const response = await request(app).get('/universities/');
        expect(response.statusCode).toEqual(200);
    })

    it('should get an array of objects', async () => {
        const response = await request(app).get('/universities/');
        expect(response.body).toEqual(expect.any(Array));
    })

    it('should get an array of objects based on query country', async () => {
        const response = await request(app).get('/universities?country=Brazil');
        expect(response.body).toEqual(expect.any(Array));
    })

    it('should get an array of objects based on query page', async () => {
        const response = await request(app).get('/universities?page=2');
        expect(response.body).toEqual(expect.any(Array));
    })

    it('should get an object by the given id', async () => {
        const responseId = await request(app).get('/universities/');

        // Get the first _id from the list
        const _id = responseId.body[0]._id;

        const response = await request(app).get(`/universities/${_id}`);
        expect(response.body).toEqual(expect.any(Object));
    })
})

describe('Post a new university', () => {
    it('should get a 200 status', async () => {
        const response = await request(app)
            .post('/universities/')
            .send({
                domains: ['test.com'],
                web_pages: ['www.test.com'],
                'state-province': 'TS',
                name: 'Universidade de teste',
                country: 'Test',
                alpha_two_code: 'TS'
            });
        expect(response.body.upsertedCount).toEqual(1);
    })
})

describe('Update an university', () => {
    it('should get a 200 status', async () => {
        const responseId = await request(app).get('/universities?country=Test');

        // Get the first _id from the list
        const _id = responseId.body[0]._id;

        const response = await request(app)
            .put(`/universities/${_id}`)
            .send({
                domains: ['test2.com'],
                web_pages: ['www.test2.com'],
                name: 'Universidade de teste'
            });
        expect(response.statusCode).toEqual(200);
    })
})

describe('Delete an university', () => {
    it('should get a 200 status', async () => {
        const responseId = await request(app).get('/universities?country=Test');

        // Get the first _id from the list
        const _id = responseId.body[0]._id;

        const response = await request(app)
            .delete(`/universities/${_id}`);
        expect(response.statusCode).toEqual(200);
    })
})