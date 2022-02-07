

const bcrypt = require("bcrypt");
const password = "123456segura!"

bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash)
    bcrypt.compare(password, hash, (err, result) => {
        console.info(result)
    });
});

