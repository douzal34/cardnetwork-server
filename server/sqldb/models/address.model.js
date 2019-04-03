const address = (sequelize, dataTypes) => {
    const Address = sequelize.define('Address', {
        streetnumber: {
            type: dataTypes.STRING
        },
        street: {
            type: dataTypes.STRING
        },
        postalcode: {
            type: dataTypes.STRING
        },
        city: {
            type: dataTypes.STRING
        },
        country: {
            type: dataTypes.STRING
        },
        information: {
            type: dataTypes.STRING
        }
    }, {
        timestamps: true,
        paranoid: true,
    });

    return Address;
};

export default address;