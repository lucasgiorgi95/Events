/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Event, conn } = require('../../src/db.js');

const agent = session(app);
const event = {
  name: 'event',
};

describe('event routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Event.sync({ force: true })
    .then(() => Event.create(event)));
  describe('GET /event', () => {
    it('should get 200', () =>
      agent.get('/event').expect(200)
    );
  });
});
