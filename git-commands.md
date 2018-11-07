Name: Bhanu Prakash Kandregula
Email: bkandreg@bhanukandregula.com
Subject: Github commands 

// Configure your git user name
>>> git config --global user.name

// Configure your git email id
>>> git config --global user.email

// This is for line endings.
>>> git config --global core.autocrlf true 
>>> git config --global core.autocrlf input

// This is for color.
>>> git config --global color.ui auto

// Git branch listing.
>>> git branch -a

// Log history.
>>> git log 

// Add the specific file to staging area
>>> git add /filename/

// Add all files in current directory to staging area
>>> git add .

// Commit the repo on to github.
// Commit doesn't work without description.
>>> git commit -m "nice description here for the repo"

// Check out the differences in files before they staged.
>>> git diff

// Check out the differences in files after the files are staged.
>>> git diff --staged

// This will get you the most recent commit in the history
>>> git diff HEAD

// This will get the differences in color. 
>>> git diff --color-words

// East to read report of small changes to long lines.
>>> git diff --word-diff

// This will just give you the file names that are changed.
>>> git diff --stat

// find out all the commits history with logs.
>>> git log

// Here is the quick summary of commits in single lines.
>>> git log --oneline

// To check what files were involved in each commit
>>> git log --stat

// To check what content actually changed between each commit.
>>> git log --patch

// To get the summary of the commit messages and also the difference output.
>>> git log --patch --oneline

// Get the graph of commits structure.
>>> git log --graph
>>> git log --graph --all --decorate --oneline

// To delete a single file, also stages the fact that file is deleted. Checkout the status of the repo as well.
>>> git rm /file-name/
>>> git status

// To list out the deleted files that are in staged now.
>>> git add -u .

// leave the file in the file system, but don't let git track the file anymore. Keep it igroned.
>>> git rm --cached /filename/
>>> git status

// Move the files, make sure all files involved should be in the version control - staged.
>>> git mv source destination
ex: git mv test.txt levelone/test.txt

// Check out the deleted and moved files.
>>> git add -A .
>>> git log -stat --filename

// Get the list of ignored files.
>>> git ls-files --others --ignored --exclude-standard

// Creating a new branch.
>>> git branch new-branch-name

// Change to newly created branch to commit.
>>> git checkout branch-name

// Dleteting a branch.
// We can't delete the branch we are on. You will fall :P
>>> git branch -D branch-name

// List out the available branches.
>>> git branch

// Rewritten the working tree from specific commit - Detatched HEAD state.
>>> git checkout /commit-id/
>>> git branch
// Come back to current branch from Detatched HEAD. we can't do any commits in HEAD state.
>>> git checkout new-brach

// Create a brnach and checkout to it in a single step.
>>> git checkout -b new-branch-name

// Merge the branches
>>> git checkout master
>>> git branch
>>> git merge /branch-name/
>>> git log

// Clean up your directory from last commit of your current branch.
//This will cleanup the staging area as well.
>>> git merge --abort

// get all the commits of a specific branch.
>>> git merge --squash /target-branch-name/

// List out commits that happened.
>>> git log --online --graph --decorate --all -10

// Delete the specific branch.
>>> git branch -d /branch-name/

// Adding a git remote.
>>> git remote add origin https://github.com/user-name/repo-name/.git

// Edit the assigned remote uri.
>>> git remote set-url origin https://github.com/user-name/repo-name.git

// Delete the remote.
>>> git remote rm origin

// Get the list of remotes.
>>> git remote -v

// Get the list of branches with their respective remotes.
>>> git branch -r 

// Fetch the remote.
>>> git fetch remote

// Pull the remote.
>>> git pull origin

// Push the local repo to github.
>>> git push origin

// Reflog keeping track of commits that are made and also that are discarded.
>>> git reflog
>>> git config gc.reflogexpireunreachable 30

//GitRebase is the ability to take existing commits, and place them on the branch that starts new.
>>> git checkout new-branch
>>> git rebase master

// Clone specific  branch from git repo.
>>> git clone -b /branch-name/ /master-repo-name/

// Push he repo to specific repo
>>> git push origin /branch-name/

// To get the irgin URL
>>> git remote get-url origin







