- git clone `git@github.com:rikian/nodejs-crypto.git`
- `npm install`
- `create file index.js`

```
const {encrypt, decrpyt} = require("cript.js")
const date = new Date();

const encrypt_user = encrypt({
  name: "rikian faisal",
  password: "r4h4514...",
  create_date: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getMilliseconds()}`,
});

const decrpyt_user = decrpyt(encrypt_user["key"], encrypt_user["value"]);

console.log(encrypt_user);
console.log(decrpyt_user);
```
`node index`

By `Rikian Faisal` https://lawnsoor.com
