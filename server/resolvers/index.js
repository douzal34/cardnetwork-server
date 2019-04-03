import userResolvers from './user';
import partnerResolvers from './partner';
import tournamentResolvers from './tournament';
import addressResolvers from './address';
import scoreResolvers from './score';
import tournamentTypeResolvers from './tournamentType';
import rankingResolvers from './ranking';
import registrationResolvers from './registration';
import filesResolvers from './file';

export default [
  userResolvers,
  partnerResolvers,
  addressResolvers,
  tournamentResolvers,
  tournamentTypeResolvers,
  scoreResolvers,
  rankingResolvers,
  registrationResolvers,
  filesResolvers,
];