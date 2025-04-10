const request = require('supertest');
const chai = require('chai');
const app = require('../index');

const expect = chai.expect;

describe('API Tests', () => {
  it('GET / should return welcome message', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.equal('Heloo from Workflows Gitactions');
        done(err);
      });
  });

  it('GET /user should return user message', (done) => {
    request(app)
      .get('/user')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.equal('Voici une liste des utilisateurs');
        done(err);
      });
  });
});

