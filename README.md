```
git clone git@github.com:rikian/nodejs-crypto.git
```
```
npm install
```
create file index.js

```
const {encrypt, decrpyt} = require("crypt.js")
const date = new Date();

const encrypt_user = encrypt({
  name: "rikian faisal",
  password: "r4h4514...",
  create_date: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getMilliseconds()}`,
});

const decrpyt_user = decrpyt(encrypt_user["key"], encrypt_user["value"]);

console.log(encrypt_user);
<!-- {
  key: 'df6802c8a9904416e661bdd294822ddc',
  value: 'c16835d818fbb666cdaa526b5732a3ec3e1b28d9c6fbbc1aec1408cadd986a201fa6e1ada8555ee31105f1afb31e9b36e0a3c3af813960dd854169b15a02fc303550d975616c8bc234bbbe72dab33d96708c04' 
} -->
console.log(decrpyt_user);
<!-- {
  name: 'rikian faisal',
  password: 'r4h4514...',
  create_date: '3-5-2022-21-30-179'
} -->
```
`node index`

By `Rikian Faisal` https://lawnsoor.com
