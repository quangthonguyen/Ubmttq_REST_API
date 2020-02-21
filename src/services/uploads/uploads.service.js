// Initializes the `uploads` service on path `/uploads`
const blobService = require("feathers-blob");
const hooks = require("./uploads.hooks");
const multer = require("multer");

const fs = require("fs-blob-store");
const blobStorage = fs("./uploads");
const multipartMiddleware = multer();

module.exports = function(app) {
  // Initialize our service with any options it requires
  app.use(
    "/uploads",
    multipartMiddleware.single("uri"),
    function(req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    blobService({ Model: blobStorage })
  );

  // Get our initialized service so that we can register hooks
  const service = app.service("uploads");

  service.hooks(hooks);
};
