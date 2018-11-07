const bcrypt = require('bcrypt');
const debug = require('debug')('app:startup');

// to hash a password, we need asalt.
// 1234 -> abcd
async function run(){
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash('1234', salt);
    debug(salt);

    // salf is included in the hashed - string on console.
    // this helps us to authenticate username and password.
    debug(hashed);
}

run();


