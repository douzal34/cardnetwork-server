export default {
    Query: {
        tournamentTypes: async (parent, {}, {
            models
        }) => {
            const tournamentTypes = await models.TournamentType.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
            });
            return tournamentTypes;
        },
        tournamentType: async (parent, {
            id
        }, {
            models
        }) => {
            const tournamentType = await models.TournamentType.find({
                where: {
                    id
                }
            });
            return tournamentType;
        },
    },

    Mutation: {
        createTournamentType: async (parent, {
            name,
        }, {
            models
        }) => {
            const tournamentType = await models.TournamentType.create({
                name
            });
            return tournamentType;
        }
    }
};