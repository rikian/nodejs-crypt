const crypto = require("crypto");
const algorithm = "aes-256-ctr";
const secretKey = "LMFgd664399g6H44MKH88io99DFgSH5b"; //your salt or secrect key (32 char)
const iv = crypto.randomBytes(16);

/**
 * encrypt
 * @param {object} user
 * @returns false if failed, object with key and value if true
 */
function encrypt(data) {
  try {
    const user = JSON.stringify(data);
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(user), cipher.final()]);
    return {
      key: iv.toString("hex"),
      value: encrypted.toString("hex"),
    };
  } catch (error) {
    return false;
  }
}

/**
 * decrypt
 * @param {string} key
 * @param {string} value
 * @returns
 */
function decrpyt(key, value) {
  try {
    const decipher = crypto.createDecipheriv(
      algorithm,
      secretKey,
      Buffer.from(key, "hex")
    );
    const decrpyted = Buffer.concat([
      decipher.update(Buffer.from(value, "hex")),
      decipher.final(),
    ]);
    const user = JSON.parse(decrpyted.toString());
    return user;
  } catch (error) {
    return false;
  }
}

module.exports = {encrypt, decrpyt}
