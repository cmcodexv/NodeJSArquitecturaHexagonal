const request = require('supertest');
const { App } = require('../src/App');

describe('Get Endpoints', () => {
    let server;

    beforeAll((done) => {
        server = App.listen(0, () => done());
    });

    afterAll((done) => {
        server.close(() => done());
    });

    it('should show the message if app is running', async () => {
        const res = await request(server).get('/api/check');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Run!');
    });

    it('should get employees data', async () => {

        const res = await request(server).get('/api/employee/list');

        expect(res.statusCode).toEqual(200);
        expect(res.text).not.toBe('No data!');
    });
});
