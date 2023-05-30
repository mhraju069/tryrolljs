export declare const isLastUpdateTimestampExpired: (lastUpdateTimestamp: number | undefined, expirationInSeconds?: number) => boolean;
export declare const getRandomString: (minLength?: number) => any;
export declare const pkceChallengeFromVerifier: (value: string) => Promise<string>;
export declare const safeJsonParse: (value: string) => any;
