// Initializes the `/mailer` service on path `/mailer`
const hooks = require("./mailer.hooks");
const Mailer = require("feathers-mailer");
const smtpTransport = require("nodemailer-smtp-transport");

module.exports = function(app) {
  app.use(
    "/mailer",
    Mailer(
      smtpTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "vozong95@gmail.com",
          pass: "vn0937088685"
        }
      })
    )
  );

  const service = app.service("mailer");
  service.hooks(hooks);
};
