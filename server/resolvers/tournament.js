export default {
    Query: {
        tournaments: async (parent, {}, {
            models
        }) => {
            const tournaments = await models.Tournament.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
            });
            return tournaments;
        },
        tournament: async (parent, {
            id
        }, {
            models
        }) => {
            const tournament = await models.Tournament.findOne({
                where: {
                    id
                }
            });
            return tournament;
        },
    },

    Mutation: {
        createTournament: async (parent, {
            PartnerId,
            TournamentTypeId,
        }, {
            models
        }) => {
            const tournament = await models.Tournament.create({
                PartnerId,
                TournamentTypeId,
            });
            return tournament;
        }
    }
};