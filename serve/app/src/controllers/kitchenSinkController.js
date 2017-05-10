
module.exports = function (applicationStrategies, config) {
    return {
        ksOverview: async function (ctx) {

            // Ordinarily, we'd unpack this from platform launch JWT launch service sends.
            // In the meantime, we'll simply make our own data.
            // See the tool provider citizenship guide for info on the structure.
            var dummyData = {
                user_data : {
                    id : '123',
                    as_id : '123',
                    first_name : 'Judy',
                    last_name : 'Smith',
                    role : 'instructor'
                },
                launch_data : {
                    resource_link_id : 'd3e3c2d5-cf43-4f63-924f-3ec7a125a334',
                    course_id : '4454554',
                    course_name : 'Eng 1002'
                }
            };

            var strategy = applicationStrategies.writerKey;
            const jwt = strategy.execute(dummyData);

            ctx.cookies.set("wt_jwt", jwt, {httpOnly : false});

            ctx.body = await ctx.render("index", {
                SPA_URL: config.app.spa_url,
                token: jwt
            });
        }
    };
};