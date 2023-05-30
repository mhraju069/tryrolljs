import { Storage, ClientConfig } from './types';
export declare const TOKEN_STORAGE_KEY = "ROLL_AUTHSDK_CLIENT_TOKEN";
declare class ClientSDK {
    private readonly config;
    private readonly storage;
    private token?;
    constructor(config: ClientConfig, storage: Storage);
    issuerUrl: () => string;
    getClientUserToken: (code: string, codeVerifier: string, redirectUri: string) => Promise<import("axios").AxiosResponse<import("./types").RequestTokenResponseData, any>>;
    generateToken: () => Promise<void>;
    private saveTokenFromResponse;
    restoreTokenFromCache: () => Promise<void>;
    private getCache;
    clear: () => Promise<void>;
    getAccessToken: () => string | undefined;
    getExpiresIn: () => number | undefined;
    getError: () => string | undefined;
    private setToken;
}
export default ClientSDK;
