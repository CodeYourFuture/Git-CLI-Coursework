# Git CLI Quiz

Remember, you must submit this quiz using __ONLY__ Git on the Command Line. 

You __CANNOT__ open Github Desktop.

---

1. What is a benefit of using the Git CLI rather than a GUI?

<!-- Write your answer here -->
Advantages of using CLI:
a. Faster
Compared to the GUI the CLI requires less memory to operate therefore
you can complete certain operation in a faster manner than a GUI, e.g pushing changes to a repository. 

b. Efficient 
The CLI allows uses to complete repetative tasks in a faster manner.

c.Workflow
Most companies will use some form of CLI which a universal method
of working. Where as GUI's differ considerably from each other, which means that it will 
cause problems amongst teams in terms of communication and time efficiency.

D. Accuracy
The CLI gives user instant feedback with detailed log messages that guide the user
when a action is made. In contrast a GUI is a user friendly computer system which simplifies operations however when if an error occurs it is more challenging to identify at what point an error has occurred.
 
2. What is the Git command to send your code to Github?

<!-- Write your answer here -->
In order to send code to GitHub from the CLI you must use 
#$ git push

However before completing these steps you must do the following 
before pushing your file to the GitHub repo:

1 Create a new GitHub Repo
2 Initialise Git in the project folder
- intialise the Git Repo
- Add the files to Git index
- Commit Added Files
- Add new remote origin (in this case, GitHub)
-Push to GitHub

Reference: "https://www.digitalocean.com/community/tutorials/how-to-push-an-existing-project-to-github"

3. What does the -m in a Git commit command mean or do?

<!-- Write your answer here -->
The '-m' operation means to write a message when committing a change to the repo.
Example: "$ git commit -m "completed a function"

4. What is the Git command for making a commit?

<!-- Write your answer here -->
$ git commit -m ""

5. What is the Git command to select the files you want to add to a commit?

<!-- Write your answer here -->
"git add A Folder or Specific File
The safest and clearest way to use git add is by designating the specific file or directory to be staged. The syntax for this could look like:

git add directory/: Stage all changes to all files within a directory titled directory
git add README.md: Stage all changes within the README.md file"
Reference: "https://github.com/git-guides/git-add"

6. What is the Git command to see changes you have waiting to be committed?

<!-- Write your answer here -->
The command that you need to see changes is "$ git status"

"Common usages and options for git status
git status: Most often used in its default form, this shows a good base of information
git status -s: Give output in short format
git status -v: Shows more "verbose" detail including the textual changes of any uncommitted files"
Reference: 
"https://git-scm.com/docs/git-status"
"https://github.com/git-guides/git-status"


7. What is the Git command to get changes from Github onto your computer?

<!-- Write your answer here -->
The command needed to get changes from GitHub onto your computer is "$ git pull".

"git pull updates your current local working branch, and all of the remote tracking branches. It's a good idea to run git pull regularly on the branches you are working on locally.

Without git pull, (or the effect of it,) your local branch wouldn't have any of the updates that are present on the remote."

Reference: "https://github.com/git-guides/git-pull"