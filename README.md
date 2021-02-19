# Git CLI Quiz

Remember, you must submit this quiz using **ONLY** Git on the Command Line.

You **CANNOT** open Github Desktop.

---

1. What is a benefit of using the Git CLI rather than a GUI?

<!-- Answer -->

GUI appears to be easier and faster to learn than CLI, although CLI provides more flexibility of use and greater velocity when carrying out tasks.
GUI can operate various tasks as the same time better than CLI, but cannot generate the shortcuts that CLI can.

2. What is the Git command to send your code to Github?

<!-- Answer -->

First, you could check the available places you could send the code to by using "git remote -v".

On occasions, it might ask you to enter your username and password (but it shouldn't happen often).

Secondly, to place all changes / files to the staging area, you do "git add" and then, you do "git commit -m + your message within speech marks".

Finally, you would enter "git push" (or "git push origin master" -assuming that is the correct place).

3. What does the -m in a Git commit command mean or do?

<!-- Answer -->

When you are committing a change, you do "git commit -m plus your message in speech marks.
By using -m, you are telling the system that the next part is a message, a comment that goes with your commit.

4. What is the Git command for making a commit?

<!-- Answer -->

When you are ready to commit, you enter "git commit" (usually with -m to add a comment).

5. What is the Git command to select the files you want to add to a commit?

<!-- Answer -->

There are two different ways: "git add + file-name" (to add one or a few by name) or "git add ." (to add all the avaiable files).

6. What is the Git command to see changes you have waiting to be committed?

<!-- Answer -->

You can do "git status" to see if anything has been changed, moved, etc.

7. What is the Git command to get changes from Github onto your computer?

<!-- Answer -->

Usually you would do “git pull origin master” (depending on the branch you are working on), some developers just do "git pull".
