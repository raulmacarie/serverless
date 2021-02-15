---
tags: data_privacy
---

# Git conventions

### Git branch naming:

- `production` — this branch contains production code ready. All development code is merged into `production` in sometime.
- `staging` - this branch contains the pre-production code that is ready for final testing before release
- `develop` - this branch contains pre-production code, that is currently WIP. When the features are finished then they are merged into `develop`.
- `feat/_jira_ticket_` - feature branches are used to develop new features for the upcoming releases. May branch off from develop and must merge into `develop`. (e.g. `feat/CCPA-100`)
- `hotfix/_jira_ticket_` — hotfix branches are necessary to act immediately upon an undesired status on production or staging code. May branch off from `production` or `stage` branch and must merge into `production`, `staging` and `develop`. (e.g. `hotfix/CCPA-100`)


### Commit messages guidelines:
- Commit messages must be formatted based on the following guideline: [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- Messages must structure based on [Conventional Commits](https://www.conventionalcommits.org), so that the versioning process should be automatic
- All commits that are part of a ticket must contain at the end of the title the ticket number and in the body the URL to the Jira ticket so it can be easily accessible


>#### Acceptable commit message:
```
feat: change event params [CCPA-100]

I've updated the event params to include the new name argument.

https://jira.com/..../CCPA-100

```

### All committed code must be syntactically correct
Every commit - be it part of a pull request or not must be syntactically correct. This means, that no code changes shall be committed that will produce parser or compile errors.

### Commit only what you believe will pass CI
Every commit should pass CI - this means that nothing should be committed knowingly that will break the build or will make tests fail.
If a commit is in violation of that rule (does happen sometimes) the next commit should be addressing the failed build and fix it.

### Commits should be atomic and small
Just like code, git commits should follow the single responsibility rule. If different things are modified that are not connected by the same task, they should be split out into two commits.
For the size - a rule of thumb would be that a git commit should not contain much more than a day worth of work. At the same time, there is no rule for how small a commit is allowed to be. A commit that just changes a single line is totally fine.

### Rebase from develop & staging branch, Merge into develop & staging branch
Whenever you work on a task always keep your `feat/...` or `hotfix/...` branch up to date with the branch they have been cut from, and always use rebase.
After your changes are done create a pull request to merge your code.

### Rebase from production, Merge into production
When working on a branch and you want to get the latest changes from `prod` into your branch, always use rebase.
Whenever a merge is done into `production`, it should always be with the fast forward argument.

### Use Git Squash only in exceptional cases
Using git squash to merge an entire pull request into a single commit is not to be used as this would be in violation with all the above stated rules.
Techniques such as git commit --amend or git squash should only be used to correct a mistake in a previous commit. (e.g. something was forgotten in that commit)
