import tools from '../../components/tools'

const user = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    mobile: {
      type: DataTypes.STRING
    },
  }, {
    timestamps: true,
    paranoid: true,
  });

  User.beforeCreate(async user => {
    user.password = await tools.generatePasswordHash();
  });

  return User;
}

export default user;