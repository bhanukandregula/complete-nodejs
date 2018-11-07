const express = require('express');

const app = express()
const router = express.Router()

// Router level middleware exactly works as a application level middleware.

router.use('/', (request, response, next) => {
 console.log("Here we go, world");
 next();
});

router.use('/greetings', (request, response, next) => {
    console.log("Welcome to colorful fall 2018...");
    next();
});

router.use('/greetings', (request, response, next) => {
    console.log("Thank you, we are enjoying it!");
    next();
});

// configure port for the server to run.
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is up and running in ${port}`);
});

//mount the router on the app.
app.use('/', router);
//app.use('/greetings', router);



