import React from 'react';

export type HowToStep = {
    name: string;
    text: string;
    url?: string;
    image?: string;
};

export type HowToTool = {
    name: string;
};

export interface HowToSchemaProps {
    name: string;
    description: string;
    steps: HowToStep[];
    totalTime?: string; // ISO 8601 duration format (e.g., "PT15M" for 15 minutes)
    estimatedCost?: {
        currency: string;
        value: string;
    };
    tools?: HowToTool[];
}

/**
 * HowToSchema component for step-by-step guides optimization
 * Helps Google perfectly render Rich Results for How-To instructions.
 */
export default function HowToSchema({
    name,
    description,
    steps,
    totalTime,
    estimatedCost,
    tools
}: HowToSchemaProps) {
    const schema: any = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": name,
        "description": description,
        "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text,
            "url": step.url,
            "image": step.image
        }))
    };

    if (totalTime) {
        schema.totalTime = totalTime;
    }

    if (estimatedCost) {
        schema.estimatedCost = {
            "@type": "MonetaryAmount",
            "currency": estimatedCost.currency,
            "value": estimatedCost.value
        };
    }

    if (tools && tools.length > 0) {
        schema.tool = tools.map(tool => ({
            "@type": "HowToTool",
            "name": tool.name
        }));
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
