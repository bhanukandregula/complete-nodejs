const debug = require('debug')('app:startup');

debug('Before');

/*
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      debug(commits);
    })
  })
});
*/

/*
getUser(1)
    .then(user => { debug('User', user); });
*/

/*

// This is a Promises based approach.
getUser(1)
    .then(user => getRepositories(user.gitHubUsername) )
    .then(repos => getCommits(repos[0]))
    .then(commits => debug('Commits:', commits))
    .catch(error => debug('Error', error.message));
*/

// Async and Await approach - This helps us to write Async code like a Sync code.
// Whenever we use await in the function, we have to decorate it with the Async modifier.
// When we are using Async and Await - we have to try catch block for better error handling.
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        debug(commits);
    }catch(error){
        debug('Error: ', error.message);
    }
  
}

// Async and await are built on top of Promises.
displayCommits();


debug('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            debug('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            debug('Calling GitHub API for Repos...');
            //resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error('Could not get repos.'));
        }, 2000);
    });
}

function getCommits(repo, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            debug('Calling GitHub API for Commits...');
            resolve(['commit']);
        }, 2000);
    });
}