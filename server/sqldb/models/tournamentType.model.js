const tournamentType = (sequelize, dataTypes) => {
    const TournamentType = sequelize.define('TournamentType', {
        name: {
            type: dataTypes.STRING
        },
    }, {
        timestamps: true,
        paranoid: true,
    });

    return TournamentType;
};

export default tournamentType;