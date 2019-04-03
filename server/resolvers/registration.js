export default {
    Query: {
        registrations: async (parent, {}, {
            models
        }) => {
            const registration = await models.Registration.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
            });
            return registration;
        },
        registration: async (parent, {
            id
        }, {
            models
        }) => {
            const registration = await models.Registration.findOne({
                where: {
                    id
                }
            });
            return registration;
        },
    },

    Mutation: {
        createRegistration: async (parent, {
            tournamentId,
            UserId
        }, {
            models
        }) => {
            const registration = await models.Registration.create({
                TournamentId,
                UserId,
            });
            return registration;
        }
    }
};