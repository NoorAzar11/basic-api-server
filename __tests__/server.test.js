'use strict';


const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);


describe('creating testing Unites', () => {

    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation();
    })

    it('handles not found requset 404 try again',async()=>{
        const response=await request.get('/tryagain');
        expect(response.status).toEqual(404);
    });

    
it('handles not found requset try again 2',async()=>{
    const response=await request.get('/food');
    expect(response.status).toEqual(404);
});

    it('testing Data we get from API ', async () => {
        const res = await request.get('/food1');
        expect(res.status).toEqual(200);
        expect(typeof res.body).toEqual('object'); 

    it('testing by creating new data', async () => {
        const res = await request.post('/food2'); 
        expect(res.status).toEqual(200);
    });
  
});  

});