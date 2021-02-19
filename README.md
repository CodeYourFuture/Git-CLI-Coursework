# Git CLI Quiz

Remember, you must submit this quiz using **ONLY** Git on the Command Line.

You **CANNOT** open Github Desktop.

---

1. What is a benefit of using the Git CLI rather than a GUI?

You can work by using Git CLI everywhere, on your local computer someone else's computer When we use GUI like Github Desktop we can access only to a relatively small interface (whatever part the GUI creator deemed important).This means we are not fully interacting with Git and are therefore not familiar with (at least) some of its capabilities.

2. What is the Git command to send your code to Github?

First I will add the URL as origin
$ git remote add origin [Github repo URL]

Then I will push my commitments to the origin(github) to the master branch.
git push origin master

3. What does the -m in a Git commit command mean or do?

-m means commitment message

4. What is the Git command for making a commit?

git commit
it is used with -m for message and -a for all changes

5. What is the Git command to select the files you want to add to a commit?

git add [filename]

we can also use git add . to add all files

6. What is the Git command to see changes you have waiting to be committed?

git status

7. What is the Git command to get changes from Github onto your computer?

git pull [remote]
