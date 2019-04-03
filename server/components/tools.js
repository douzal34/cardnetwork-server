import base62 from 'base62/lib/ascii';
import bcrypt from 'bcrypt';

const encodeInBase62 = (id) => {
    let result = base62.encode(id);
    return result;
}

const generatePasswordHash = async () => {
    const saltRounds = 10;
    return await bcrypt.hash(this.password, saltRounds);
};

const validatePassword = async (password) => {
    return await bcrypt.compare(password, this.password);
};


export default {
    encodeInBase62,
    validatePassword,
    generatePasswordHash
};