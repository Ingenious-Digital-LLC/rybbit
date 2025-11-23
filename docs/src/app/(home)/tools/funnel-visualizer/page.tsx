import { ToolCTA } from "../components/ToolCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedTools } from "@/components/RelatedTools";
import { Metadata } from "next";
import Link from "next/link";
import { FunnelVisualizerForm } from "./FunnelVisualizerForm";

export const metadata: Metadata = {
  title: "Free Funnel Visualizer | Marketing Funnel Analysis & Conversion Funnel Tool",
  description:
    "Visualize your conversion funnel step-by-step. Input visitor counts at each stage to identify where you're losing customers. Analyze drop-off rates and optimize your funnel for better conversions.",
  keywords: [
    "funnel visualizer",
    "conversion funnel",
    "funnel analysis",
    "conversion rate optimization",
    "sales funnel",
    "funnel metrics",
    "drop-off analysis",
    "customer journey",
    "conversion tracking",
    "funnel optimization",
  ],
  openGraph: {
    title: "Free Funnel Visualizer | Marketing Funnel Analysis & Conversion Funnel Tool",
    description:
      "Visualize your conversion funnel step-by-step. Identify drop-off points and optimize conversion rates.",
    type: "website",
    url: "https://rybbit.io/tools/funnel-visualizer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Funnel Visualizer | Marketing Funnel Analysis & Conversion Funnel Tool",
    description:
      "Visualize your conversion funnel step-by-step. Identify drop-off points and optimize conversion rates.",
  },
  alternates: {
    canonical: "https://rybbit.io/tools/funnel-visualizer",
  },
};

export default function FunnelVisualizerPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Funnel Visualizer",
        description: "Free tool to visualize conversion funnels and analyze drop-off rates at each step",
        url: "https://rybbit.io/tools/funnel-visualizer",
        applicationCategory: "BusinessApplication",
        featureList: [
          "Step-by-step funnel visualization",
          "Conversion rate analysis",
          "Drop-off rate tracking",
          "Customizable funnel stages",
          "Real-time calculations",
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a conversion funnel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A conversion funnel is the path visitors take from initial contact to conversion. It shows how many users progress through each step and where they drop off. Understanding your funnel helps identify friction points and optimization opportunities.",
            },
          },
          {
            "@type": "Question",
            name: "What are the typical stages in a conversion funnel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Common funnel stages include: Awareness (landing page visits), Consideration (product/service page views), Evaluation (cart additions), Decision (checkout starts), and Conversion (purchases). However, funnels vary by business model. E-commerce might track store browsing to purchase, while SaaS might track sign-ups to trial to paid conversion.",
            },
          },
          {
            "@type": "Question",
            name: "How do I analyze funnel drop-offs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To analyze drop-offs: (1) Calculate the percentage drop from each step to the next, (2) Identify which steps have the largest losses, (3) Consider external factors (traffic quality, targeting, seasonality), (4) Test improvements on high-drop-off steps, (5) Compare performance over time. The steps with the biggest drop-offs typically offer the best optimization opportunities.",
            },
          },
          {
            "@type": "Question",
            name: "What is a good conversion funnel rate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Conversion rates vary widely by industry and business model. E-commerce websites typically see 2-5% overall conversion rates, SaaS free-to-paid conversion is often 5-15%, while lead generation funnels might convert 10-30% of visitors. The key is to compare your metrics against your own baseline and industry benchmarks, then focus on improving the weakest steps.",
            },
          },
          {
            "@type": "Question",
            name: "How can I improve my conversion funnel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Optimize high drop-off steps first by: simplifying forms and checkout processes, improving page load speed, enhancing trust signals and social proof, clarifying value propositions, reducing friction (fewer clicks), improving mobile experience, A/B testing changes, and removing distractions. Track these improvements with Rybbit Analytics to measure the actual impact on conversions.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Breadcrumbs items={[{label: "Home", href: "/"}, {label: "Tools", href: "/tools"}, {label: "Funnel Visualizer"}]} />
          {/* Header */}
          <div className="mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-full">
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Free Tool</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              Funnel Visualizer
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              Visualize your conversion funnel step-by-step. Input visitor counts at each stage and see where you're
              losing customers. Analyze drop-off rates and identify optimization opportunities.
            </p>
          </div>

          {/* Tool */}
          <div className="mb-16">
            <FunnelVisualizerForm />
          </div>

          {/* Educational Content Section */}
          <div className="mb-16 space-y-12">
            {/* What is a Conversion Funnel */}
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">What is a Conversion Funnel?</h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <p>
                  A conversion funnel visualizes the customer journey from initial awareness to final conversion. Just
                  like a physical funnel narrows toward the bottom, a conversion funnel shows how the number of users
                  decreases at each step of your sales or signup process.
                </p>
                <p>
                  Understanding your conversion funnel is critical for business growth because it reveals where
                  potential customers are dropping off. By identifying and fixing these bottlenecks, you can
                  significantly improve your overall conversion rate without increasing marketing spend.
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-6 mt-6">
                  <h3 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-3">Why Funnels Matter</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Reveal exactly where customers are leaving</li>
                    <li>• Help prioritize optimization efforts on high-impact areas</li>
                    <li>• Enable data-driven decision making about your funnel</li>
                    <li>• Track progress as you implement improvements</li>
                    <li>• Support ROI calculations for marketing initiatives</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Funnel Stages */}
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Understanding Funnel Stages</h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <p>
                  While funnels vary by business model, most follow a similar progression from awareness to conversion.
                  Here are the common stages:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Awareness</h3>
                    <p className="text-sm">
                      Users discover your brand through ads, content, or word-of-mouth. This is typically measured by
                      landing page visits or impressions.
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Consideration</h3>
                    <p className="text-sm">
                      Interested users explore your product or service by viewing product pages, demos, or reading
                      reviews.
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Evaluation</h3>
                    <p className="text-sm">
                      Users actively consider the purchase by adding items to cart, requesting quotes, or starting free
                      trials.
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Decision</h3>
                    <p className="text-sm">
                      Users commit to action by starting checkout, completing signup forms, or requesting more
                      information.
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Conversion</h3>
                    <p className="text-sm">
                      Users complete the desired action—purchase, signup, trial activation, or lead submission.
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Retention</h3>
                    <p className="text-sm">
                      Users continue engaging (repeat purchases, retention rate, customer lifetime value).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Analyzing Drop-offs */}
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                How to Analyze Funnel Drop-offs
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <p>
                  Drop-offs occur when users don't progress to the next step. Analyzing where and why users drop off is
                  the key to optimization. Here's a systematic approach:
                </p>
                <div className="space-y-3 mt-6">
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      1. Calculate Drop-off Percentages
                    </h3>
                    <p className="text-sm">
                      For each step, calculate what percentage of users from the previous step dropped off. A 50% drop
                      from step 1 to 2 is a major red flag.
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      2. Identify the Biggest Bottleneck
                    </h3>
                    <p className="text-sm">
                      Focus on the step with the largest absolute drop (most users lost). This is usually your
                      highest-impact optimization opportunity.
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      3. Consider External Factors
                    </h3>
                    <p className="text-sm">
                      Evaluate traffic quality, targeting, seasonality, device type, and traffic source. High drop-offs
                      might indicate poor audience match, not a product issue.
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">4. Hypothesize Root Causes</h3>
                    <p className="text-sm">
                      Use analytics, user testing, surveys, and session recordings to understand why users drop off. Is
                      it friction, unclear messaging, trust issues, or pricing?
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">5. Test Improvements</h3>
                    <p className="text-sm">
                      Implement targeted fixes (form simplification, page speed improvements, clearer CTAs) and measure
                      the impact on your funnel conversion rate.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Optimization Strategies */}
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Funnel Optimization Strategies
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <p>
                  Once you've identified drop-off points, here are proven strategies to improve each stage of your
                  funnel:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Awareness Stage</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Target high-intent keywords and audiences</li>
                      <li>• Improve ad creative and messaging relevance</li>
                      <li>• Ensure traffic sources align with audience quality</li>
                      <li>• Test different channel mix</li>
                    </ul>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Consideration Stage</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Improve page load speed</li>
                      <li>• Clarify value proposition above the fold</li>
                      <li>• Add product images, videos, and demos</li>
                      <li>• Include social proof and testimonials</li>
                    </ul>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Evaluation Stage</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Make pricing transparent and competitive</li>
                      <li>• Add comparison tables and ROI calculators</li>
                      <li>• Offer risk-free trials or guarantees</li>
                      <li>• Provide detailed feature documentation</li>
                    </ul>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Decision Stage</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Simplify checkout (fewer form fields)</li>
                      <li>• Show security badges and trust signals</li>
                      <li>• Offer multiple payment options</li>
                      <li>• Reduce required steps to purchase</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="bg-neutral-100/50 dark:bg-neutral-800/20 backdrop-blur-sm border border-neutral-300/50 dark:border-neutral-800/50 rounded-xl overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What is a conversion funnel?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    A conversion funnel is the path visitors take from initial contact to conversion. It shows how many
                    users progress through each step and where they drop off. Understanding your funnel helps identify
                    friction points and optimization opportunities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What are the typical stages in a conversion funnel?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Common funnel stages include: Awareness (landing page visits), Consideration (product/service page
                    views), Evaluation (cart additions), Decision (checkout starts), and Conversion (purchases).
                    However, funnels vary by business model. E-commerce might track store browsing to purchase, while
                    SaaS might track sign-ups to trial to paid conversion.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    How do I analyze funnel drop-offs?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    To analyze drop-offs: (1) Calculate the percentage drop from each step to the next, (2) Identify
                    which steps have the largest losses, (3) Consider external factors (traffic quality, targeting,
                    seasonality), (4) Test improvements on high-drop-off steps, (5) Compare performance over time. The
                    steps with the biggest drop-offs typically offer the best optimization opportunities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What is a good conversion funnel rate?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Conversion rates vary widely by industry and business model. E-commerce websites typically see 2-5%
                    overall conversion rates, SaaS free-to-paid conversion is often 5-15%, while lead generation funnels
                    might convert 10-30% of visitors. The key is to compare your metrics against your own baseline and
                    industry benchmarks, then focus on improving the weakest steps.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    How can I improve my conversion funnel?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Optimize high drop-off steps first by: simplifying forms and checkout processes, improving page load
                    speed, enhancing trust signals and social proof, clarifying value propositions, reducing friction
                    (fewer clicks), improving mobile experience, A/B testing changes, and removing distractions. Track
                    these improvements with{" "}
                    <Link
                      href="https://app.rybbit.io"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      Rybbit Analytics
                    </Link>{" "}
                    to measure the actual impact on conversions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <RelatedTools currentToolHref="/tools/funnel-visualizer" category="analytics" />
        </div>

        <ToolCTA
          title="Track funnels automatically with Rybbit"
          description="No manual data entry—Rybbit automatically tracks conversion funnels with real-time session data."
          eventLocation="funnel_visualizer_cta"
        />
      </div>
    </>
  );
}
