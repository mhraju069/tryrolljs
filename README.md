# @roll-network/root

This is the main entrypoint for all packages in the Roll monorepo.

## Packages

These are the public packages that make up the Roll network:

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

## Examples

To demonstrate how our packages should be used by consumers, we provide several example projects:

- [@roll-network/example-web-oauth-client](./examples/example-web-oauth-client)
- [@roll-network/example-native-oauth-client](./examples/example-native-oauth-client)
- [@roll-network/example-node-api-client](./examples/example-node-api-client)

These examples always start with the `example-` prefix.

## Dependents Graph

<div align="center">
<img src="./dependantsgraph.svg">
</div>

## Getting Started

Before you can use these packages, you need to install dependencies and build all the packages. This is done via Rollup.

1. Install all dependencies by running `yarn install` in the root directory.
2. Run `yarn build` to build all packages. 

Please note that our packages are built/bundled via Rollup. 

## Release

Releasing new versions of the packages follows these steps:

1. Update the code.
2. Run `yarn changeset` to select the changed packages & choose the grade of your update (patch, minor, or major).
3. Create a PR with the generated changeset file.
4. Merge the PR.
5. Wait for the auto-generated `Version Packages` PR to be created.
6. Review the changes in the `Version Packages` PR (version updates, CHANGELOG updates).
   1. If the changes are incorrect, update them manually.
7. Merge the PR.