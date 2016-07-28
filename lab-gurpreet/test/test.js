'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
const server = require('../lib/server.js');

describe('POST testing', () => {
  it('Test POST 200', (done) => {
    request(server)
    .post('/api/user')
    .send({
      name: 'gurpreet',
      skill: 'musician',
      gender: 'male'
    })
    .end(function(err, res){
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.body).to.include.keys('id', 'name', 'skill', 'gender');
      expect(res.body.name).to.eql('gurpreet');
      expect(res.body.skill).to.eql('musician');
      expect(res.body.gender).to.eql('male');
      done();
    });
  });
  it('test POST 400', (done) => {
    request(server)
    .post('/api/user')
    .send({
      anything: 'anything'
    })
    .end(function(err, res){
      expect(res).to.have.status(400);
      expect(res.body).to.eql('400 bad request');
      done();
    });
  });
});
describe('GET testing', () => {
  let users = {};
  before((done) => {
    request(server)
    .post('/api/user')
    .send({
      name:'gurpreet',
      skill: 'musician',
      gender: 'male'
    })
    .end(function(err, res){
      users.id = res.body.id;
      done();
    });
  });
  it('test GET 400', (done) => {
    request(server)
    .get('/api/user/123')
    .end(function(err, res){
      expect(res).to.have.status(400);
      expect(res.body).to.eql('400 bad request');
      done();
    });
  });
  it('te GET 200', (done) => {
    request(server)
    .get('/api/user/' + users.id)
    .end(function(err, res){
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.body.name).to.eql('gurpreet');
      expect(res.body.skill).to.eql('musician');
      expect(res.body.gender).to.eql('male');
      done();
    });
  });
});

describe('PUT testing', () => {
  let users = {};
  before((done) => {
    request(server)
    .post('/api/user')
    .send({
      name:'gurpreet',
      skill: 'musician',
      gender: 'male'
    })
    .end(function(err, res){
      users.id = res.body.id;
      done();
    });
  });
  it('test PUT 200', (done) => {
    request(server)
    .put('/api/user/' + users)
    .send({
      name: 'ben',
      skill: 'coding',
      gender: 'male'
    })
    .end(function(err, res){
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.body.name).to.eql('ben');
      expect(res.body.skill).to.eql('coding');
      expect(res.body.gender).to.eql('male');
      done();
    });
  });
  it('test PUT 400', (done) => {
    request(server)
    .put('/api/user/1234')
    .end(function(err, res){
      expect(res).to.have.status(400);
      expect(res.body).to.eql('400 bad request');
      done();
    });
  });
});
