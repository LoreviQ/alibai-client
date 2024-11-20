import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [{ title: "AlibAI" }, { name: "description", content: "Welcome to AlibAI!" }];
};

export default function Index() {
    return (
        <div>
            <h1>Welcome to AlibAI!</h1>
            <p>This is a Remix app.</p>
        </div>
    );
}
