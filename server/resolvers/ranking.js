export default {
    Query: {
        rankings: async (parent, {}, {
            models
        }) => {
            const ranking = await models.Ranking.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
            });
            return ranking;
        },
        ranking: async (parent, {
            id
        }, {
            models
        }) => {
            return await models.Ranking.find({
                where: {
                    id
                }
            });
        },
    },

    Mutation: {
        createRanking: async (parent, {
            position,
            point
        }, {
            models
        }) => {
            const ranking = await models.Ranking.create({
                position,
                point,
            });
            return ranking;
        },
        updateRanking: async (parent, {
            id,
            position,
            point
        }, {
            models
        }) => {
            const ranking = await models.Ranking.findOne({
                where: {
                    id
                }
            });
            const result = await ranking.updateAttributes({
                position,
                point
            })
            return result;
        },
    }
};