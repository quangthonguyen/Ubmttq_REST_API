const { Service } = require('feathers-mongodb');

exports.Mailer = class Mailer extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('mailer');
    });
  }
};
