import base62 from 'base62/lib/ascii';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const encodeInBase62 = (id) => {
    let result = base62.encode(id);
    return result;
}

const generatePasswordHash = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

const validatePassword = async (password, truePassword) => {
    return await bcrypt.compare(password, truePassword);
};

const createToken = async (user, secret, expiresIn) => {
  const {
    id,
    email,
    username,
  } = user;
  return await jwt.sign({
    id,
    email,
    username,
  }, secret, {
    expiresIn,
  });
};


export default {
    encodeInBase62,
    validatePassword,
    generatePasswordHash,
    createToken
};