export default {
    Query: {
        files: async (parent, {}, {
            models
        }) => {
            const files = await models.File.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
            });
            return files;
        },
        file: async (parent, {
            id
        }, {
            models
        }) => {
            const file = await models.File.findOne({
                where: {
                    id
                }
            });
            return file;
        },
    },

    Mutation: {
        createFile: async (parent, {
            path,
            type,
        }, {
            models,
            me
        }) => {
            const file = await models.File.create({
                path,
                type,
                UserId: me.id
            });
            return file;
        }
    }
};