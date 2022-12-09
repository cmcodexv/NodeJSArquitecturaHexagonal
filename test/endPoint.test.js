const request = require('supertest');
const { server } = require('../src/server');

describe('Get Endpoints', () => {

    it('should show the message if app is running', async () => {

        const res = await request(server).get('/');

        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Run!');
    });

    it('should get employees data', async () => {

        const res = await request(server).get('/api/employees');

        expect(res.statusCode).toEqual(200);
        expect(res.text).not.toBe('No data!');
    });
});