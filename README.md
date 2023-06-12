# @roll-network/root

This repo is an entrypoint for all Roll monorepo packages.

## Packages

- [@roll-network/cli](./packages/cli)
- [@roll-network/eslint-config](./packages/eslint-config)
- [@roll-network/prettier-config](./packages/prettier-config)
- [@roll-network/design-system](./packages/design-system)
- [@roll-network/feature-flag](./packages/feature-flag)
- [@roll-network/contract-bindings](./packages/contract-bindings)
- [@roll-network/api](./packages/api)
- [@roll-network/api-client](./packages/api-client)
- [@roll-network/auth-sdk](./packages/auth-sdk)
- [@roll-network/session-manager](./packages/session-manager)

### Private packages

There are some packages that are not listed above (ex. [@roll-network/example-web-oauth-client](./examples/example-web-oauth-client)). These packages should always start with the `example-` prefix & be responsible for showing how a package/set of packages should be used by a consumer.

### Dependants graph

<div align="center">
<img src="./dependantsgraph.svg">
</div>


## Release

1. Update the code.
2. Run `yarn changeset` to pick the changed packages & the grade of your update (patch, minor or major).
3. Create a PR with the generated changeset file.
4. Merge the PR.
5. Wait until a `Version Packages` PR is created.
6. Check that the auto-generated PR's changes are correct (version updates, CHANGELOG updates).
   1. If it's not correct, update manually.
7. Merge the PR.
