# Git CLI Quiz

Remember, you must submit this quiz using **ONLY** Git on the Command Line.

You **CANNOT** open Github Desktop.

---

1. What is a benefit of using the Git CLI rather than a GUI?

It's simple to copy and paste the commands for more than one computer with CLI. However on a GUI you are supposed to configure each computer by clicking. Thus, mistakes are more likely on a GUI. Also CLI retains a record of what you've done and faster than GUI because of lower internet bandwidth.

2. What is the Git command to send your code to Github?

git push <REMOTENAME> <BRANCHNAME>

eg.

git push origin master

3. What does the -m in a Git commit command mean or do?

It is used with "git commit" and "message". It means that short (m) message describing the updates

eg.

git commit -m "initial Commit"

4. What is the Git command for making a commit?

git commit -m "some message"

5. What is the Git command to select the files you want to add to a commit?

git add <FILENAME>
Also git add . //It sends all files with one command.

eg.
git add readme.txt

6. What is the Git command to see changes you have waiting to be committed?

git status

7. What is the Git command to get changes from Github onto your computer?

git pull <REMOTENAME> <BRANCHNAME>

eg.
git pull origin master
