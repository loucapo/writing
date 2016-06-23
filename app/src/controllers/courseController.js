module.exports = function () {
    return {
        course: function *() { // eslint-disable-line object-shorthand
            this.body = {
                id: 1,
                courseTitle: 'string',
                sections: [
                    {
                        id: 1,
                        title: 'string',
                        order: 0,
                        summary: 'string',
                        assignments: [
                            {
                                id: 1,
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
