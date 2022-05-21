const crypto = require("crypto");
const algorithm = "aes-256-ctr";
const secretKey = "LMFgd664399g6H44MKH88io99DFgSH5b"; //your salt or secrect key (32 string)
const iv = crypto.randomBytes(16);

/**
 * encrypt
 * @param {object} user
 * @returns false if failed, object with key and pair if true
 */
function encrypt(data) {
  try {
    const user = JSON.stringify(data);
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(user), cipher.final()]);
    return {
      key: iv.toString("hex"),
      pair: encrypted.toString("hex"),
    };
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

/**
 * decrypt
 * @param {string} key
 * @param {string} pair
 * @returns
 */
function decrpyt(key, pair) {
  try {
    const decipher = crypto.createDecipheriv(
      algorithm,
      secretKey,
      Buffer.from(key, "hex")
    );
    const decrpyted = Buffer.concat([
      decipher.update(Buffer.from(pair, "hex")),
      decipher.final(),
    ]);

    return JSON.parse(decrpyted.toString());
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

const encrypt_user = encrypt({ name: "rikian faisal", password: "r4h4514..." });
const decrpyt_user = decrpyt(encrypt_user["key"], encrypt_user["pair"]);

console.log(encrypt_user);
console.log(decrpyt_user);
