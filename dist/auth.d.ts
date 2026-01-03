/**
 * Login to a custom Immich server (bypasses configured baseUrl)
 * Use this for initial login when server URL is provided by the user
 */
export declare function loginToServer(serverUrl: string, credentials: {
    email: string;
    password: string;
}): Promise<unknown>;
//# sourceMappingURL=auth.d.ts.map