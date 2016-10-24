module.exports = function (readStoreRepository, fs, uuid) {
  return {
    async activity(ctx) {
      var activity = await readStoreRepository.row(`select * from "activity" where "id" = '${ctx.params.id}'`);
      var removeLastComma = x=> x.substring(0, x.lastIndexOf(','));
      var ids = removeLastComma(activity.document.drafts.reduce((x,y)=> x + `'${y}',`, ``));

      var drafts = await readStoreRepository.rows(`select * from "draft" where "id" IN (${ids})`);

      ctx.status = 200;
      ctx.body = {
        status: ctx.status,
        success: true,
        data: {activity: activity.document, drafts: drafts.map(x=>x.document)}
      };
    }
  };
};