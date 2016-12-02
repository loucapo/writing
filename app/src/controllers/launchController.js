module.exports = function () {
  return {
    launch: async function (ctx) {
      ctx.redirect('/');
    }
  };
};
