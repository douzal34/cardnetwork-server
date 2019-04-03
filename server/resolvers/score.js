export default {
    Query: {
        scores: async (parent, {}, {
            models
        }) => {
            const registration = await models.Score.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
            });
            return score;
        },
        score: async (parent, {
            id
        }, {
            models
        }) => {
            const score = await models.Score.find({
                where: {
                    id
                }
            });
            return score;
        },
    },

    Mutation: {
        createScore: async (parent, {
            total,
            hebdo,
            onmonth
        }, {
            models
        }) => {
            const score = await models.Score.create({
                total,
                hebdo,
                onmonth
            });
            return score;
        },
        updateScore: async (parent, {
            id,
            total,
            hebdo,
            onmonth
        }, {
            models
        }) => {
            const score = await models.Score.findOne({
                where: {
                    id
                }
            });
            const result = await score.updateAttributes({
                total,
                hebdo,
                onmonth
            })
            return result;
        },
    }
};