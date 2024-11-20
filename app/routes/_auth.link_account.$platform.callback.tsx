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
        // Log the request details
        console.log("Attempting OAuth callback with:", {
            state,
            code,
            endpoint: endpoints.oauth_callback("x"),
        });

        // Send OAuth data to backend
        const response = await api.post(endpoints.oauth_callback("x"), {
            code,
            state,
        });

        // Log the response
        console.log("API Response:", response.data);

        const { userid, username } = response.data;
        let cookie: AuthCookie = {
            userid,
            username,
            authenticated: true,
        };
        return redirect("/app", {
            headers: {
                "Set-Cookie": await authCookie.serialize(cookie),
            },
        });
    } catch (error: any) {
        // More detailed error logging
        console.error("OAuth callback error details:", {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status,
            endpoint: endpoints.oauth_callback("x"),
        });
        throw new Response("Failed to complete authentication", { status: 500 });
    }
};
