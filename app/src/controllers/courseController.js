module.exports = function () {
    return {
        course: function *() { // eslint-disable-line object-shorthand
            this.body = {
                title: 'string',
                sections: [
                    {
                        id: 'string',
                        title: 'string',
                        order: 0,
                        summary: 'string',
                        activities: [
                            {
                                id: 'string',
                                name: 'string',
                                link: 'string',
                                type: 'string',
                                openDate: '2016-06-17',
                                closeDate: '2016-06-17',
                                pointsAvailable: 0,
                                pointsEarned: 0
                            }
                        ]
                    }
                ]
            };
        }
    };
};
