
const debug = require('debug')('app:startup');

debug('Before');

getUser(1, getRepositories);

function getRepositories(user){
    getRepositories(user.githubUsername, getCommits);
}

function getCommits(repos){
    getCommits(repo, displayCommits);
}

function displayCommits(commits){
    debug(commits);
}

function getUser(id, callback){
    debug('Reading a user from Database');
    setTimeout(() => {
        callback({ id: 1, githubUsername: 'Bhanu Kandregula'});
    }, 2000);
}

function getRepositories(username, callback){
    setTimeout(() => {
        callback([
            { name : "repo01" },{ name : "repo02" },{ name : "repo03" }
        ]);
    }, 2000);
}


debug('After');

// There is a better way to use async, which is using PROMISES>

