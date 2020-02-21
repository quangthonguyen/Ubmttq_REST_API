const assert = require('assert');
const app = require('../../src/app');

describe('\'vbd\' service', () => {
  it('registered the service', () => {
    const service = app.service('vbd');

    assert.ok(service, 'Registered the service');
  });
});
