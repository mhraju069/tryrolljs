# @tryrolljs/root

This repo is an entrypoint for all Roll monorepo packages.


## Release

1. Update the code.
2. Run `yarn changeset` to pick the changed packages & the grade of your update (patch, minor or major).
3. Create a PR with the generated changeset file.
4. Merge the PR.
5. Wait until a `Version Packages` PR is created.
6. Check that the auto-generated PR's changes are correct (version updates, CHANGELOG updates).
   1. If it's not correct, update manually.
7. Merge the PR.