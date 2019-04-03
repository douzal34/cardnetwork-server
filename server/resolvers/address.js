export default {
    Query: {
        addresses: async (parent, {}, {
            models
        }) => {
            const addresses = await models.Address.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
            });
            return addresses;
        },
        address: async (parent, {
            id
        }, {
            models
        }) => {
            const address = await models.Address.findOne({
                where: {
                    id
                }
            });
            return address;
        },
    },

    Mutation: {
        createAddress: async (parent, {
            streetnumber,
            street,
            codepostal,
            country,
            city,
            information
        }, {
            models,
            me
        }) => {
            const address = await models.Address.create({
                streetnumber,
                street,
                codepostal,
                country,
                city,
                information,
                UserId: me.id
            });
            return address;
        }
    }
};