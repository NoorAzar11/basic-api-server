'use strict';


const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

const obj={id:1 ,foodDatatype:"hello from the otherside"}

describe('creating testing Unites', () => {

    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation();
    })

    it('handles not found requset 404 try again',async()=>{
        const response=await request.get('/tryagain');
        expect(response.status).toEqual(404);
    });

    
it('handles not found requset try again 2',async()=>{
    const response=await request.post('/tryagain');
    expect(response.status).toEqual(404);
});

it('handles not found requset try again 2',async()=>{
    const response=await request.post('/food').send(obj);
    expect(response.status).toEqual(200);
});

    it('testing Data we get from API ', async () => {
const res= await request.get('/food');
expect(res.status).toEqual(200);
    });

    it('testing read we get from API ', async () => {
        const res= await request.get('/food/1');
        expect(res.status).toEqual(200);
            });
        

    it('testing updated Data we get from API ', async () => {
        const res= await request.put('/food/1').send(obj);
        expect(res.status).toEqual(200);
            });

    it('testing deleted data from api', async () => {
        const res = await request.delete('/food/1');
        expect(res.status).toEqual(204);
    });
  
});  

