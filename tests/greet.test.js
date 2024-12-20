const request = require('supertest');
const app = require('../app'); // Import the app (server runs from testSetup)

describe('GET /greet', () => {
    test('should return a greeting if name is provided', async () => {
        const response = await request(app).get('/greet?name=Akram');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, Akram!');
    });
});