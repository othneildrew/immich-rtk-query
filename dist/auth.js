/**
 * Login to a custom Immich server (bypasses configured baseUrl)
 * Use this for initial login when server URL is provided by the user
 */
export async function loginToServer(serverUrl, credentials) {
    const response = await fetch(`${serverUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Login failed' }));
        throw new Error(error.message || 'Login failed');
    }
    return response.json();
}
