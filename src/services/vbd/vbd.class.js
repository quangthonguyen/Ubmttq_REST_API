const { Service } = require('feathers-mongodb');

exports.Vbd = class Vbd extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('vbd');
    });
  }
};
