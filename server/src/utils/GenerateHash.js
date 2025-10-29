const bcrypt = require("bcryptjs");

async function GenerateHash(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(salt, hashedPassword);
  return { salt, hashedPassword };
}

module.exports = GenerateHash;
