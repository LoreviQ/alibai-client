import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "AlibAI" }, { name: "description", content: "Welcome to AlibAI!" }];
};

export default function Index() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20 scrollbar-hide">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-theme-secondary to-theme-tertiary text-theme-light py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-6">Your AI Social Media Manager</h2>
                        <p className="text-xl mb-8">
                            Let AI handle your social presence while you focus on what matters
                        </p>
                        <Link
                            to="/login"
                            className="bg-white text-theme-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                </section>
                <section className="py-16 bg-theme-dark">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl font-bold text-center mb-12">How AlibAI Works</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard
                                title="Smart Posting"
                                description="AI learns your style and automatically creates and schedules engaging posts across platforms"
                                icon="🤖"
                            />
                            <FeatureCard
                                title="Intelligent Learning"
                                description="Analyzes your successful posts to optimize future content and engagement"
                                icon="🧠"
                            />
                            <FeatureCard
                                title="Brand Consistency"
                                description="Maintains your voice and style across all social media platforms 24/7"
                                icon="✨"
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl text-theme-dark font-bold text-center mb-12">Why Choose AlibAI</h3>
                        <div className="space-y-8">
                            <BenefitRow
                                title="Save Hours Daily"
                                description="No more manual posting or scheduling. Let AI handle your social media presence automatically"
                            />
                            <BenefitRow
                                title="Always Professional"
                                description="AI-crafted posts ensure your online presence always reflects your best professional image"
                            />
                            <BenefitRow
                                title="Growth Focused"
                                description="Strategic posting times and content optimization to maximize your audience engagement and reach"
                            />
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-theme-dark text-theme-light py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 AlibAI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

function Header({}) {
    return (
        <header className="fixed w-full bg-theme-dark shadow-md z-10 h-20">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Replace with your actual logo */}
                    <h1 className="text-4xl font-bold text-theme-primary">AlibAI</h1>
                </div>
                <Link
                    to="/login"
                    className="bg-theme-primary text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                    Login
                </Link>
            </div>
        </header>
    );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
    return (
        <div className="p-6 bg-theme-light rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">{icon}</div>
            <h4 className="text-xl text-theme-dark font-semibold mb-3">{title}</h4>
            <p className="text-theme-dark">{description}</p>
        </div>
    );
}

function BenefitRow({ title, description }: { title: string; description: string }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl text-theme-dark font-semibold mb-2">{title}</h4>
            <p className="text-theme-dark">{description}</p>
        </div>
    );
}
