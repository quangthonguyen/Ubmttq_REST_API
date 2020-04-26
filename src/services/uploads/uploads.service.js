// Initializes the `uploads` service on path `/uploads`
const blobService = require("feathers-blob");
const hooks = require("./uploads.hooks");
const multer = require("multer");
// const blobStorage = require("google-drive-blobs")({
//   refresh_token:
//     "1//04gfW_BNzlJkTCgYIARAAGAQSNwF-L9IrziHt9B9gPa6e5fGNF7cdqtPPRA_FaiqBFt-J525pzA7vFZPgDBa7dD_h0omrA2cNt_w",
//   client_id:
//     "334987854503-vsksca4duup8hgftumu668v2m9kihb1a.apps.googleusercontent.com",
//   client_secret: "191ZWBnJ3mmtGoZs89FQrLpf",
// });
const fs = require("fs-blob-store");
const blobStorage = fs("./uploads");
const multipartMiddleware = multer();

module.exports = function (app) {
  // Initialize our service with any options it requires
  app.use(
    "/uploads",
    multipartMiddleware.single("uri"),
    function (req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    blobService({ Model: blobStorage })
  );

  // Get our initialized service so that we can register hooks
  const service = app.service("uploads");

  service.hooks(hooks);
};
