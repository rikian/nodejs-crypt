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

const date = new Date();
const encrypt_user = encrypt({
  name: "rikian faisal",
  password: "r4h4514...",
  create_date: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getMilliseconds()}`,
});

const decrpyt_user = decrpyt(encrypt_user["key"], encrypt_user["value"]);

console.log(encrypt_user);
console.log(decrpyt_user);
