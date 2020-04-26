const { authenticate } = require("@feathersjs/authentication").hooks;

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [
      async context => {
        let now = Date.now();
        for (let index = 0; index < context.result.data.length; index++) {
          if (
            Date.parse(context.result.data[index].thoiHan) - now <=
            172800000
          ) {
            context.result.data[index].trangThai = "Gần hết hạn";
            context.result.data[index].custom = "Gần hết hạn";
            context.result.data[index].notificationQLCV = true;
          }
          if (Date.parse(context.result.data[index].thoiHan) - now <= 0) {
            context.result.data[index].trangThai = "Hết hạn";
            context.result.data[index].custom = "Hết hạn";
            context.result.data[index].notificationQLCV = false;
          }
          context.result.data[index].custom =
            context.result.data[index].trangThai;
        }

        return context;
      }
    ],
    get: [],
    create: [
      async context => {
        context.result.custom = context.result.trangThai;
        return context;
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
