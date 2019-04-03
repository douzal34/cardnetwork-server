export default {
  Query: {
    partners: async (parent, {}, {
      models
    }) => {
      const partners = await models.Partner.findAll({
        order: [
          ['createdAt', 'DESC']
        ],
      });

      return partners;
    },
    partner: async (parent, {
      id
    }, {
      models
    }) => {
      return await models.Partner.findOne({
        where: {
          id
        }
      });
    },
  },

  Mutation: {
    createPartner: async (parent, {
      name,
      description
    }, {
      models
    }) => {
      const partner = await models.Partner.create({
        name,
        description,
      });
      return partner;
    },
    updatePartner: async (parent, {
      id,
      name,
      description
    }, {
      models
    }) => {
      const partner = await models.Partner.findOne({
        where: {
          id
        }
      });
      const result = await partner.updateAttributes({
        name,
        description
      })
      return result;
    },
  }
};