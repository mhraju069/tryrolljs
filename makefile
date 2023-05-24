get-client-secret:
	cd examples/example-node-client && node get-client-secret.js

gen-client-token:
	cd examples/example-node-client && node generate-token.js


start-example-cli:
	cd examples/example-node-api-client && yarn start