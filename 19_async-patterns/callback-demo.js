
const debug = require('debug')('app:startup');

debug('******** Async ********');

debug('Before');

// user value will be the result of call back function - id,name.
getUser(1, function(user){
    //debug('User', user);
    // get the repositories.
    getRepositories(user.gitHubUsername, (repos) => {
        debug('Repos', repos);
    });
    
    // Call back HELL :)
    // Christmas Tree problem :)
    // Solution in Named functions.
});

debug('After');

// Lets add a callfunction here.
//where we are going to call when result of Async operation is ready.
function getUser(id, callback){
    setTimeout(() => {
        debug('Reading user from the database.');
        callback({ id: id, gitHubUsername: 'Bhanu Kandregula'});
    }, 2000);
}

function getRepositories(username, callback){
    setTimeout(() => {
        debug('Reading list of repos from github.');
        callback(
            [
                { name : "repo01" },{ name : "repo02" },{ name : "repo03" }
            ]);
    },2000);
}



