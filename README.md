# movie-frontend

# Development set-up

Clone this repo `git clone https://github.com/gmluqa/movie-frontend.git` and run `npm i` to begin developing!

# Git methodoloty

![alt text](https://files.programster.org/tutorials/git/flows/github-flow.png)

Github flow, for creating simple branches to work on specific trello tasks and then merging them to main once they are tested and work.

Workflow Example:

When starting to work on a feature/bug: `git checkout -b newBranchName` (Work on new branch until completion...)

Once work on the feature/bug is finished, we show our work on discord to the team, have a second pair of eyes to look over the implementation, and if the change is approved, checkout the main branch and merge the feature into main: `git checkout main && git merge newBranchName`
