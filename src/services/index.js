const users = require("./users/users.service.js");
const uploads = require("./uploads/uploads.service.js");
const vbd = require("./vbd/vbd.service.js");
const vbdi = require("./vbdi/vbdi.service.js");
const mailer = require("./mailer/mailer.service.js");

const authmanagement = require("./authmanagement/authmanagement.service.js");
// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  app.configure(users);
  app.configure(uploads);
  app.configure(vbd);
  app.configure(vbdi);
  app.configure(mailer);

  app.configure(authmanagement);
};
