
# Example Node API Client

Follow the instructions below to set up and use the example client.


## Installation

1. Clone the repository to your local machine:

```bash
 git clone https://github.com/roll-network/tryrolljs.git
 ```

2. Navigate to the root directory of the repository:
```bash
cd tryrolljs
```
3. Install the dependencies by running the following command:
```bash
yarn install
```
4. Build the project:
```bash
yarn build
```
5. Navigate to to Node Api Client:
```bash
cd examples/example-node-api-client
```

## Setting up Environment Variables

1. Create a `.env` file in examples/example-node-api-client.

2. Copy the environment variables from `env.example` into the `.env` file.

Replace the placeholder values in the `.env` file with your actual credentials and configuration.

## Importing Environment Variables (Mac and Linux users)

If you are a Mac or Linux user, you need to import the `.env` file into your terminal session. Follow these steps:

1. Navigate to the example-node-api-client directory:
```bash
cd examples/example-node-api-client
```
2. Run the following command to import the environment variables:
```bash
source .env
```
## Verifying Environment Variables

Make sure your environment variables are set correctly by running the following command:

```bash
echo $CLIENT_SECRET
```
If the command outputs your CLIENT_SECRET value, it means the environment variables are set correctly.

## Starting the Command Line Prompt
To start the command line prompt, run the following command:
```bash
yarn start
```
The command line prompt will display a list of operations you can perform with the API.

## Available Operations
* **Get Token List:** Retrieves a list of tokens from the API.
* **Get Token Creator:** Retrieves the creator of a specific token.
* **Get User:** Retrieves information about a specific user.
* **Get User**Balances: Retrieves the balances of a specific user.
* **Get User**Token Balance: Retrieves the balance of a specific user for a specific token.
* **Check If User Has Token Balance:** Checks if a specific user has a balance for a specific token.
* **Create Platform User:** Creates a new user on the platform.
* **Login Platform User:** Logs in an existing user on the platform.
* **Get Client:** Retrieves information about a specific client.
* **Send From Platform User:** Sends tokens from a platform user to another address.
* **Send Batch From Platform User:** Sends multiple token transfers from a platform user to different addresses.
* **Get Platform User Deposit Address:**Retrieves the deposit address for a platform user.
* **Get Platform User Balances:** Retrieves the balances of a platform user.
* **Get Platform User Balance:**orm User Balance: Retrieves the balance of a platform user for a specific token.
* **Get Clients:** Retrieves a list of clients.
* **Generate Client Secret:** Generates a new client secret.

If you encounter an "Unauthorized 403" error while performing an operation, follow the steps below.

## Troubleshooting Unauthorized Error (403)
1. Choose the option "Generate Client Secret" from the command prompt.

2. You will be redirected to your browser to sign into your account.

3. After signing in, the new `CLIENT_SECRET` will be displayed in your terminal.

4. Replace the `CLIENT_SECRET`
