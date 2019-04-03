/**
 * Sequelize initialization module
 */
import config from '../config/environment/index';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(config.default.sequelize.uri, config.default.sequelize.user, config.default.sequelize.password, config.default.sequelize.options);
const models = {
  Score: sequelize.import('./models/score.model'),
  Ranking: sequelize.import('./models/ranking.model'),
  Tournament: sequelize.import('./models/Tournament.model'),
  TournamentType: sequelize.import('./models/tournamentType.model'),
  Registration: sequelize.import('./models/registration.model'),
  File: sequelize.import('./models/file.model'),
  Address: sequelize.import('./models/address.model'),
  Partner: sequelize.import('./models/partner.model'),
  User: sequelize.import('./models/user.model')
}

models.User.belongsTo(models.Partner, {
  foreignKey: {
    name: 'PartnerId'
  },
  targetKey: 'id',
  as: 'partner'
});
models.Address.belongsTo(models.User, {
  foreignKey: 'UserId',
  as: 'user'
});
models.File.belongsTo(models.User, {
  foreignKey: 'UserId',
  as: 'user'
});
models.Score.belongsTo(models.User, {
  foreignKey: 'UserId',
  as: 'user'
})
models.Tournament.belongsTo(models.TournamentType, {
  foreignKey: 'TournamentTypeId',
  as: 'tournamentType'
});
models.Tournament.belongsTo(models.Partner, {
  foreignKey: 'PartnerId',
  as: 'partner'
});
models.Ranking.belongsTo(models.Tournament, {
  foreignKey: 'TournamentId',
  as: 'tournament'
});
models.Ranking.belongsTo(models.User, {
  foreignKey: 'UserId',
  as: 'user'
});
models.Registration.belongsTo(models.Tournament, {
  foreignKey: 'TournamentId',
  as: 'tournament'
});
models.Registration.belongsTo(models.User, {
  foreignKey: 'UserId',
  as: 'user'
});

models.TournamentType.hasMany(models.Tournament);
models.Partner.hasMany(models.Tournament);
models.Tournament.hasMany(models.Registration);
models.Tournament.hasMany(models.Ranking);
models.User.hasMany(models.File);
models.User.hasMany(models.Registration);
models.User.hasMany(models.Ranking);

sequelize.sync().then(() => {
  console.log("database connected !!");
});

export {
  sequelize
};

export default models;