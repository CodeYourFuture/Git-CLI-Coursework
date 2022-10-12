# Git CLI Quiz

Remember, you must submit this quiz using **ONLY** Git on the Command Line.

You **CANNOT** open Github Desktop.

---

1. What is a benefit of using the Git CLI rather than a GUI?

- speed, efficiency and fuller functionality (GUI cannot do, everything CLI can do), also possible automation.

2. What is the Git command to send your code to Github?

- git push (remote-repo) (remote-repo-branch)

3. What does the -m in a Git commit command mean or do?

- provides a space to write a message that will describe to others what this commit has changed/achieved
- allows you to write a shorter message inline with your command rather than going into VIM to write the fuller message

4. What is the Git command for making a commit?

- git commit (-m "message here") (or no flag for longer message with VIM)

5. What is the Git command to select the files you want to add to a commit?

- git add (filename) (or . for all)

6. What is the Git command to see changes you have waiting to be committed?

- git status

7. What is the Git command to get changes from Github onto your computer?

- git pull (remote-repo) (remote-repo-branch)

---

### Commands used for this exercise:

- gh repo fork https://github.com/CodeYourFuture/- Git-CLI-Coursework --fork-name "git-cli" --clone
- cd git-cli
- git status
- git add README.md
- git commit -m "completed"
- git push
- gh pr create --title "London 9 - Baz Murphy - Git-Cli-Coursework" --body "Completed"
