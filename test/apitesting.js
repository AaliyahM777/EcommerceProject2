const expect = require('chai').expect;
const request = require('request');

describe('TESTS', () => {
    it('returns and array of all products on products page', function (done) {
        request('http://localhost:3001/api/products', function (error, response, body) {
            let newData = JSON.parse(body)
            expect(newData).to.be.an('array');
       
        done();
    });
    });
    
    it('returns  array of all contacts from contacts page ', function (done){
        request('http://localhost:3001/api/contacts', function (error,response,body){
            let newData= JSON.parse(body)
            expect(newData).to.be.an('array');
            done();
        });
    });
})


