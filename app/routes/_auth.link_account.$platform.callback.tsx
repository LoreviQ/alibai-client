import { LoaderFunction, redirect } from "@remix-run/node";
import { api, endpoints } from "~/utils/api";
import { authCookie } from "~/utils/cookies";
import type { AuthCookie } from "~/utils/cookies";

export const loader: LoaderFunction = async ({ request }) => {
    // Get URL parameters
    const url = new URL(request.url);
    const error = url.searchParams.get("error");
    const state = url.searchParams.get("state");
    const code = url.searchParams.get("code");

    // Check for OAuth errors
    if (error) {
        throw new Response("Authentication failed", { status: 401 });
    }
    if (!state || !code) {
        throw new Response("Missing required OAuth parameters", { status: 400 });
    }

    try {
        // Send OAuth data to backend
        const response = await api.post(endpoints.oauth_callback("twitter"), {
            state,
            code,
        });
        const { userId, username } = response.data;
        let cookie: AuthCookie = {
            userId,
            username,
            authenticated: true,
        };
        return redirect("/app", {
            headers: {
                "Set-Cookie": await authCookie.serialize(cookie),
            },
        });
    } catch (error) {
        // Handle API errors
        console.error("OAuth callback error:", error);
        throw new Response("Failed to complete authentication", { status: 500 });
    }
};
