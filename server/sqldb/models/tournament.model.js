const tournament = (sequelize, dataTypes) => {
    const Tournament = sequelize.define('Tournament', {}, {
        timestamps: true,
        paranoid: true,
    });

    return Tournament;
};

export default tournament;