# How to Git  by Areeba :) 

## Clone a repository
```shell
git clone <HTTPS URL>
cd <repository name>
git status # check if you're in the repository
```

## Create a new branch based off of master
```shell
git status # make sure you're in the master branch
git checkout -b your_branch_name
git push origin your_branch_name
git branch --set-upstream-to=origin/your_branch_name
```

## Commit local changes and push to remote branch
```shell
git status # check what files you've changed, as compared to remote branch
git add -A
git commit -m "add a message describing your changes"
git push
```

## Merge your branch into master
```shell
git checkout master
git merge your_branch_name
git push
```

## Someone added things to master! How do I pull these changes to my branch?
```shell
git checkout master
git pull
git checkout your_branch_name
git rebase master 
```

## Delete a branch (locally and remotely)
```shell
git branch -d your_branch_name # delete locally
git push origin :your_branch_name # delete remotely !CAREFUL! Can't undo
```

## Rename a branch (locally and remotely)
```shell
# make sure you're on your branch (whose name you want to change)
git checkout old_name

# create an identical copy of your branch:
git checkout -b new_name 
git push origin new_name
git branch --set-upstream-to=origin/new_name

# delete original branch
git branch -d old_name
git push origin :old_name
```

## Other useful git commands
```shell
git diff master # check the difference between the branch you're on and master
git branch # check what branches you have on your local repository
git fetch # just check what new changes are on your remote repository without 
			# actually pulling these changes locally 
```
