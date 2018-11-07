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

getUser(1)
    .then(user => getRepositories(user.gitHubUsername) )
    .then(repos => getCommits(repos))
    .then(commits => debug('Commits:', commits))
    .catch(error => debug('Error', error.message));

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
            resolve(['repo1', 'repo2', 'repo3']);
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