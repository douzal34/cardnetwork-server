/**
 * Sequelize initialization module
 */
import config from '../config/environment/index';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(config.default.sequelize.uri, config.default.sequelize.user, config.default.sequelize.password, config.default.sequelize.options);
const Score = sequelize.import('./models/score.model');
const Ranking = sequelize.import('./models/ranking.model');
const Tournament = sequelize.import('./models/Tournament.model');
const TournamentType = sequelize.import('./models/tournamentType.model');
const Registration = sequelize.import('./models/registration.model');
const File = sequelize.import('./models/file.model');
const Address = sequelize.import('./models/address.model');
const Partner = sequelize.import('./models/partner.model');
const User = sequelize.import('./models/user.model');

// Has One
User.belongsTo(Partner, {
  foreignKey: {
    name: 'PartnerId'
  },
  targetKey: 'id',
  as: 'partner'
});
Address.belongsTo(User, {
  foreignKey: 'UserId',
  as: 'user'
});
File.belongsTo(User, {
  foreignKey: 'UserId',
  as: 'user'
});

Tournament.belongsTo(TournamentType, {
  foreignKey: 'TournamentTypeId',
  as: 'tournamentType'
});
Tournament.belongsTo(Partner, {
  foreignKey: 'PartnerId',
  as: 'partner'
});
Ranking.belongsTo(Tournament, {
  foreignKey: 'TournamentId',
  as: 'tournament'
});
Ranking.belongsTo(User, {
  foreignKey: 'UserId',
  as: 'user'
});
Registration.belongsTo(Tournament, {
  foreignKey: 'TournamentId',
  as: 'tournament'
});
Registration.belongsTo(User, {
  foreignKey: 'UserId',
  as: 'user'
});

// Has Many
TournamentType.hasMany(Tournament);
Partner.hasMany(Tournament);
Tournament.hasMany(Registration);
Tournament.hasMany(Ranking);
User.hasMany(File);
User.hasMany(Registration);
User.hasMany(Ranking);

sequelize.sync().then(() => {
  console.log("database connected !!");
});

export default sequelize;