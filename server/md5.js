const crypto = require("crypto");
function md5(password) {
  let hash = crypto.createHash("md5");
  return hash.update(password).digest("base64");
}

module.exports = md5;
