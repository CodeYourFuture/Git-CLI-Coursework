# Git CLI Quiz

Remember, you must submit this quiz using __ONLY__ Git on the Command Line. 

You __CANNOT__ open Github Desktop.

---

1. What is a benefit of using the Git CLI rather than a GUI?

<!-- Write your answer here -->
    The Git CLI, is faster than the GUI, takes up less memory and executes commands with high precision.


2. What is the Git command to send your code to Github?

<!-- Write your answer here -->
    To send my code to Github, I first:
        i. add a remote url of the repository where I wish to send my code to using:
            $ git remote add origins <URL>
        ii. then I push my code to the URL using the command:
            $ git push origin main
        Note: the main is the branch I am pushing to.


3. What does the -m in a Git commit command mean or do?

<!-- Write your answer here -->
    The -m in a git commit means message. It allows a descriptive message about the changes or updates in the commit for future references.

4. What is the Git command for making a commit?

<!-- Write your answer here -->
    The git command for making a commit is:
        $ git commit -m "A short description of your commit goes here"

5. What is the Git command to select the files you want to add to a commit?

<!-- Write your answer here -->
    To select the files I want to add to a commit is use
        i. for individual files:
            $ git add filename.fileExtension
        ii. for all te files:
            $ git add .

6. What is the Git command to see changes you have waiting to be committed?

<!-- Write your answer here -->
    The command to see changes waiting to be committed is:
        $ git status

7. What is the Git command to get changes from Github onto your computer?

<!-- Write your answer here -->
    To get changes from github to my computer I use:
        $ git remote add upstream <URL>
        $ git pull upstream main
