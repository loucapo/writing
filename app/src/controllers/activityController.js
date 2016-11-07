module.exports = function (readStoreRepository, logger, fs, uuid) {
  return {
    async activity(ctx) {
      logger.info('Selecting activity ' + ctx.params.id + ' from readStoreRepository');
      var activity = await readStoreRepository.row(`select * from "activity" where "id" = '${ctx.params.id}'`);
      var removeLastComma = x=> x.substring(0, x.lastIndexOf(','));
      var ids = removeLastComma(activity.document.drafts.reduce((x,y)=> x + `'${y}',`, ``));

      logger.info('Selecting drafts ' + ids + ' from readStoreRepository');
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