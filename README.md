# Git CLI Quiz

Remember, you must submit this quiz using __ONLY__ Git on the Command Line.

You __CANNOT__ open Github Desktop.

---

1. What is a benefit of using the Git CLI rather than a GUI?
<!-- Write your answer here -->
As the name suggests, one has to write commands to perform a certain CLI system task. On the other hand, GUI offers graphics that consist of icons and images that enable users to do a task directly. CLI requires expertise in commands for performing a certain task, while a beginner can operate GUI.

2. What is the Git command to send your code to Github?

<!-- Write your answer here -->
The git push command is used to transfer or push the commit, which is made on a local branch in your computer to a remote repository like GitHub.

3. What does the -m in a Git commit command mean or do?

<!-- Write your answer here -->
To add a Git commit message to your commit, you will use the git commit command followed by the -m flag and then your message in quotes. Adding a Git commit message should look something like this: git commit -m “Add an anchor for the trial end section.”

4. What is the Git command for making a commit?

<!-- Write your answer here -->

git commit
The "commit" command is used to save your changes to the local repository. Note that you have to explicitly tell Git which changes you want to include in a commit before running the "git commit" command. This means that a file won't be automatically included in the next commit just because it was changed.

5. What is the Git command to select the files you want to add to a commit?

<!-- Write your answer here -->
To add and commit files to a Git repository
Enter git add --all at the command line prompt in your local project directory to add the files or changes to the repository. Enter git status to see the changes to be committed.

6. What is the Git command to see changes you have waiting to be committed?

<!-- Write your answer here -->
You can run the git diff HEAD command to compare the both staged and unstaged changes with your last commit

7. What is the Git command to get changes from Github onto your computer?

<!-- Write your answer here -->
If you haven't made any changes locally, you can use git pull to bring down any new commits and add them to your master . git pull origin master.