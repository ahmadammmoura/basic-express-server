'use strict';
const supertest = require('supertest');
const { app } = require('../src/server');
const mockRequest = supertest(app);

describe('Validator', () => {
  it('No Name', async () => {
    const response = await mockRequest.get('/person');
    expect(response.status).toEqual(500);
  });

  it('right method', async () => {
    const response = await mockRequest.get('/person?name=sandy');
    expect(response.status).toEqual(200);
  });

  it('correct name', async () => {
    const query = 'ahmadAmmoura';
    const response = await mockRequest.get(`/person?name=${query}`);
    expect(response.body.name).toEqual(query);
  });
});
