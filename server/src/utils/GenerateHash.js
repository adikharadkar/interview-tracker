const bcrypt = require("bcryptjs");

async function GenerateHash(password, salt = null) {
  if (salt) {
    const hashedPassword = await bcrypt.hash(password, salt);
    return { salt, hashedPassword };
  }
  const newSalt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, newSalt);
  return { newSalt, hashedPassword };
}

module.exports = GenerateHash;
