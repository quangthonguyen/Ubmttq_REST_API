// Initializes the `vbdi` service on path `/vbdi`
const { Vbdi } = require('./vbdi.class');
const hooks = require('./vbdi.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vbdi', new Vbdi(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vbdi');

  service.hooks(hooks);
};
