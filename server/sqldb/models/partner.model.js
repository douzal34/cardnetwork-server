const partner = (sequelize, dataTypes) => {
  const Partner = sequelize.define('Partner', {
    name: {
      type: dataTypes.STRING
    },
    description: {
      type: dataTypes.STRING
    }
  }, {
    timestamps: true,
    paranoid: true,
  });

  return Partner;
};

export default partner;