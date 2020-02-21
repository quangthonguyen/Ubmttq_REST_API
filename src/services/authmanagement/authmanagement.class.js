const { Service } = require('feathers-mongodb');

exports.Authmanagement = class Authmanagement extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('authmanagement');
    });
  }
};
