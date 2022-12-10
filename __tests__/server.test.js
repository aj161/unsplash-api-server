'use strict';

const server = require('../server');

// supertest - "fakes" running my server
const supertest = require('supertest');

const mockRequest = supertest(server.app);

describe("Testing my API server", () => {
    //it >>> to add test cases

    // test 1
  it("/route works", async () => {
    const response = await mockRequest.get("/");
    expect(response.status).toEqual(200);
      });

       // test 2
  it("handles not found request", async () => {
    const response = await mockRequest.get('/bad');
    expect(response.status).toEqual(404);
  })

  // //test 3
  it("respond with 404 for an invalid method e.g. post instead of get", async () => {
    const response = await mockRequest.post('/randomimage');
    expect(response.status).toEqual(404);
  })

  // //test 4
    it("respond with 200 for a request to /randomimage AND check that response is an object", async () => {
    const response = await mockRequest.get("/randomimage");
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual("object");
    }) 

     //test 5
  it("respond with 500 error for a request /searchimage without title parameter", async () => {
    const data = {};
    const response = await mockRequest.get('/searchimage').query(data);
    expect(response.status).toEqual(500);
  })

       //test 6
  it("respond with 200 error for a request /searchimage with title parameter", async () => {
    const data = {title: 'randomTitle'};
    const response = await mockRequest.get('/searchimage').query(data);
  expect(response.status).toEqual(200);
  })

})
