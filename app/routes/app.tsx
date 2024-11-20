import { LoaderFunction, redirect } from "@remix-run/node";
import { authCookie } from "~/utils/cookies";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
    const cookieHeader = request.headers.get("Cookie");
    const userData = await authCookie.parse(cookieHeader);

    if (!userData?.authenticated) {
        return redirect("/login");
    }

    return { userData };
};

export default function APP() {
    const loaderdata = useLoaderData<typeof loader>();
    // display user info here
    return <div>App page: Logged in as {loaderdata.userData.username}</div>;
}
