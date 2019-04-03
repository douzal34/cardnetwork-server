const registration = (sequelize, dataTypes) => {
    const Registration = sequelize.define('Registration', {}, {
        timestamps: true,
        paranoid: true,
    });

    return Registration;
};

export default registration;