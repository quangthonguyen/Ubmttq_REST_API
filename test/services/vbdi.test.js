const assert = require('assert');
const app = require('../../src/app');

describe('\'vbdi\' service', () => {
  it('registered the service', () => {
    const service = app.service('vbdi');

    assert.ok(service, 'Registered the service');
  });
});
