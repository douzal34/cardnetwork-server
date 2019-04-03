const ranking = (sequelize, dataTypes) => {
    const Ranking = sequelize.define('Ranking', {
        position: {
            type: dataTypes.INTEGER
        },
        point: {
            type: dataTypes.INTEGER
        },
    }, {
        timestamps: true,
        paranoid: true,
    });

    return Ranking;
};

export default ranking;