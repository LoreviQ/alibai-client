import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, redirect } from "@remix-run/react";

import { api, endpoints } from "./../utils/api";

export const meta: MetaFunction = () => {
    return [{ title: "Login - AlibAI" }, { name: "description", content: "Login to AlibAI" }];
};

export async function action({}: ActionFunctionArgs) {
    const response = await api.post(endpoints.oauth_redirect("x"));
    if (response.status != 200) {
        return json({ error: "Login failed" }, { status: response.status });
    }
    return redirect(response.data.authorization_url);
}

export default function Login() {
    return (
        <div className="min-h-screen bg-theme-dark flex flex-col items-center justify-center p-4">
            <Link
                to="/"
                className="absolute top-8 left-8 text-theme-primary hover:text-theme-secondary transition-colors"
            >
                <h1 className="text-3xl font-bold">AlibAI</h1>
            </Link>
            <div className="bg-theme-light p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold text-theme-dark text-center mb-8">Welcome Back</h2>
                <div className="space-y-4">
                    <Form action="/login" method="POST">
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors"
                        >
                            <XIcon />
                            Continue with X
                        </button>
                    </Form>
                    <button
                        onClick={() => alert("Not yet implemented - LinkedIn login coming soon!")}
                        className="w-full bg-[#0A66C2] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-3 hover:bg-[#004182] transition-colors"
                    >
                        <LinkedInIcon />
                        Continue with LinkedIn
                    </button>
                    <button
                        onClick={() => alert("Not yet implemented - Instagram login coming soon!")}
                        className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors"
                    >
                        <InstagramIcon />
                        Continue with Instagram
                    </button>
                </div>
                <p className="text-sm text-gray-600 text-center mt-6">
                    By continuing, you agree to AlibAI's{" "}
                    <Link to="/terms" className="text-theme-primary hover:underline">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-theme-primary hover:underline">
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </div>
    );
}

function XIcon() {
    return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    );
}
