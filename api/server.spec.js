
const request = require('supertest'); 

const server = require('./server.js'); 

describe('server.js', () => {
  describe('index route', () => {
    it('should return an OK status code from the index route', async () => {
      const expectedStatusCode = 200;

      // do a get request to our api (server.js) and inspect the response
      const response = await request(server).get('/');

      expect(response.status).toEqual(expectedStatusCode);
      
    });

  });
});