const fs = require(`fs`);
const dotenv = require("dotenv");
dotenv.config();

const credentials = {
  pfx:fs.readFileSync(process.env.PFX_FILE),
  passphrase: process.env.PFX_PASSPHRASE,
  ca:fs.readFileSync(process.env.INTERCERT_FILE),
};
module.exports = {
  secret: process.env.SECRET_KEY,
  credentials,
};
