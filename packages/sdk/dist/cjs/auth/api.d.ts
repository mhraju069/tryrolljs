import { RequestTokenArgs, RequestTokenResponseData, RequestClientTokenArgs, RequestClientTokenResponseData, GetLogInUrlArgs, GetLogOutUrlArgs } from './types';
export declare const requestClientToken: ({ clientId, clientSecret, issuerUrl, scopes, }: RequestClientTokenArgs) => Promise<import("axios").AxiosResponse<RequestClientTokenResponseData, any>>;
export declare const requestClientUserToken: ({ issuerUrl, refreshToken, code, grantType, redirectUri, clientId, codeVerifier, clientSecret, }: RequestTokenArgs & {
    clientSecret: string;
}) => Promise<import("axios").AxiosResponse<RequestTokenResponseData, any>>;
export declare const requestToken: ({ issuerUrl, refreshToken, code, grantType, redirectUri, clientId, codeVerifier, }: RequestTokenArgs) => Promise<import("axios").AxiosResponse<RequestTokenResponseData, any>>;
export declare const getLogInUrl: ({ clientId, redirectUrl, scopes, issuerUrl, codeChallenge, }: GetLogInUrlArgs) => string;
export declare const getLogOutUrl: ({ issuerUrl, redirectUrl, idToken, }: GetLogOutUrlArgs) => string;
