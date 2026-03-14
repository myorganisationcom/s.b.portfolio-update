export const metadata = {
    title: "Self-Hosted AI Agents & Workflows | Sarvanu Banerjee Strategies",
    description: "We build, deploy, and self-host custom AI agents to automate your customer support, lead generation, and internal workflows. Own your data and logic.",
    openGraph: {
        title: "Self-Hosted AI Agents & Workflows | Sarvanu Banerjee Strategies",
        description: "We build, deploy, and self-host custom AI agents to automate your customer support, lead generation, and internal workflows.",
        url: "https://sarvanu.com/ai-agent-service",
        images: [
            {
                url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
                width: 1200,
                height: 630,
                alt: "Artificial Intelligence Neural Network",
            },
        ],
    },
    twitter: {
        title: "Self-Hosted AI Agents & Workflows | Sarvanu Banerjee Strategies",
        description: "We build, deploy, and self-host custom AI agents to automate your customer support, lead generation, and internal workflows.",
        images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"],
    },
    alternates: {
        canonical: "https://sarvanu.com/ai-agent-service",
    },
};

export default function AiAgentLayout({ children }) {
    return <>{children}</>;
}
