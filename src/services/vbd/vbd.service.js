// Initializes the `vbd` service on path `/vbd`
const { Vbd } = require('./vbd.class');
const hooks = require('./vbd.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vbd', new Vbd(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vbd');

  service.hooks(hooks);
};
