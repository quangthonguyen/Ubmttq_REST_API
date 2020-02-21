const { Service } = require('feathers-mongodb');

exports.Vbdi = class Vbdi extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('vbdi');
    });
  }
};
