const file = (sequelize, dataTypes) => {
    const File = sequelize.define('File', {
        path: {
            type: dataTypes.STRING
        },
        type: {
            type: dataTypes.INTEGER
        }
    }, {
        timestamps: true,
        paranoid: true,
    });

    return File;
};

export default file;