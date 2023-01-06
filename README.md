# Git CLI Quiz

Remember, you must submit this quiz using __ONLY__ Git on the Command Line.

You __CANNOT__ open Github Desktop.

---

1. What is a benefit of using the Git CLI rather than a GUI?

<!-- Write your answer here -->
my answer is: You can use Git CLI on different computers with different OS.
It gives you a power to do everything with your projects: to loop through commits, etc. Everything that you can code.
GUI has limited commands in its inteface.
Git CLI gives you a power allows you to write better deployment scripts.

2. What is the Git command to send your code to Github?

git push

3. What does the -m in a Git commit command mean or do?

it's for adding the name of commit

4. What is the Git command for making a commit?

git add the_name_of_file.js
git commit -m "It's the name of commit"

OR

git commit -a -m "it's the name of my commit - all changed files"

5. What is the Git command to select the files you want to add to a commit?

git add file1 file2

6. What is the Git command to see changes you have waiting to be committed?
7. 
git log the_name_of_Branch

git log origin/master..HEAD
When HEAD is on the master branch, this gives a log of unpushed commits.

7. What is the Git command to get changes from Github onto your computer?

git fetch --all
