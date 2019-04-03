const score = (sequelize, dataTypes) => {
  const Score = sequelize.define('Score', {
    total: {
      type: dataTypes.INTEGER
    },
    hebdo: {
      type: dataTypes.INTEGER
    },
    onmonth: {
      type: dataTypes.INTEGER
    }
  }, {
    timestamps: true,
    paranoid: true,
  });

  return Score;
};

export default score;