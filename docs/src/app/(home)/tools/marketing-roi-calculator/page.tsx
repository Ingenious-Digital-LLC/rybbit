import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolCTA } from "../components/ToolCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from "next";
import Link from "next/link";
import { MarketingROIForm } from "./MarketingROIForm";

export const metadata: Metadata = {
  title: "Free Marketing ROI Calculator | Calculate Return on Investment & ROAS",
  description:
    "Calculate your marketing ROI, ROAS, profit margins, and net profit. Get instant insights into your campaign performance and make data-driven decisions.",
  keywords: [
    "ROI calculator",
    "marketing ROI",
    "ROAS calculator",
    "return on ad spend",
    "marketing ROI formula",
    "campaign ROI",
    "advertising ROI",
    "marketing metrics",
  ],
  openGraph: {
    title: "Free Marketing ROI Calculator | Calculate Return on Investment & ROAS",
    description: "Calculate your marketing ROI, ROAS, profit margins, and net profit instantly.",
    type: "website",
    url: "https://rybbit.io/tools/marketing-roi-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Marketing ROI Calculator | Calculate Return on Investment & ROAS",
    description: "Calculate your marketing ROI, ROAS, profit margins, and net profit instantly.",
  },
  alternates: {
    canonical: "https://rybbit.io/tools/marketing-roi-calculator",
  },
};

export default function MarketingROICalculatorPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Marketing ROI Calculator",
        description: "Calculate ROI, ROAS, profit margins, and net profit for your marketing campaigns",
        url: "https://rybbit.io/tools/marketing-roi-calculator",
        applicationCategory: "BusinessApplication",
        featureList: [
          "ROI Calculation",
          "ROAS Calculation",
          "Profit Margin Analysis",
          "Net Profit Calculation",
          "Real-time Results",
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
            name: "What is ROI vs ROAS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ROI (Return on Investment) measures your profit as a percentage of your investment, calculated as (Revenue - Cost) / Cost × 100. ROAS (Return on Ad Spend) measures revenue per dollar spent on advertising, calculated as Revenue / Ad Spend. ROI focuses on profitability, while ROAS focuses on revenue efficiency.",
            },
          },
          {
            "@type": "Question",
            name: "What is a good marketing ROI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A good marketing ROI varies by industry, but generally, a 5:1 ratio (500% ROI) is considered strong, meaning you earn $5 for every $1 spent. The average marketing ROI across industries is around 100-200%. For ROAS, 4:1 or higher is typically considered good, though this depends on your profit margins and business model.",
            },
          },
          {
            "@type": "Question",
            name: "How do I calculate ROI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ROI is calculated using the formula: (Net Profit / Cost) × 100 = ROI%. For marketing campaigns, this means: (Revenue - Ad Spend - COGS) / Ad Spend × 100. This gives you the percentage return on every dollar invested in advertising.",
            },
          },
          {
            "@type": "Question",
            name: "What timeframe should I measure marketing ROI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The ideal timeframe depends on your business model and sales cycle. For e-commerce and digital products, weekly or monthly analysis is common. For B2B with longer sales cycles, quarterly or annual ROI measurements may be more appropriate. Always account for attribution windows and customer lifetime value when analyzing ROI.",
            },
          },
          {
            "@type": "Question",
            name: "How can I improve my marketing ROI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To improve ROI: optimize targeting to reach high-intent audiences, improve conversion rates, reduce customer acquisition costs, test different ad creatives and messaging, focus budget on top-performing channels, implement A/B testing, track metrics accurately, and continuously optimize based on data. Using analytics tools helps identify which campaigns generate the best returns.",
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
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "Marketing ROI Calculator" }]} />
          {/* Header */}
          <div className="mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-full">
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Free Tool</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              Marketing ROI Calculator
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              Calculate ROI, ROAS, and profit margins for your marketing campaigns. Make data-driven decisions about
              your ad spend.
            </p>
          </div>

          {/* Tool */}
          <div className="mb-16">
            <MarketingROIForm />
          </div>

          {/* Educational Content Section */}
          <div className="mb-16 space-y-12">
            {/* ROI vs ROAS */}
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Understanding ROI vs ROAS</h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <p>
                  When measuring marketing performance, two key metrics stand out: ROI (Return on Investment) and ROAS
                  (Return on Ad Spend). While they sound similar, they measure different aspects of campaign success.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-200 mb-3">
                      ROI (Return on Investment)
                    </h3>
                    <p className="text-sm mb-3">Measures profit as a percentage of your investment.</p>
                    <p className="text-sm font-mono bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded mb-3">
                      (Revenue - Cost) / Cost × 100
                    </p>
                    <p className="text-sm">
                      A 200% ROI means you earn $2 in profit for every $1 spent. Focuses on profitability and
                      bottom-line impact.
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">
                      ROAS (Return on Ad Spend)
                    </h3>
                    <p className="text-sm mb-3">Measures revenue generated per dollar of ad spend.</p>
                    <p className="text-sm font-mono bg-blue-100 dark:bg-blue-900/50 p-3 rounded mb-3">
                      Revenue / Ad Spend
                    </p>
                    <p className="text-sm">
                      A 4:1 ROAS means you generate $4 in revenue for every $1 spent on ads. Focuses on revenue
                      generation efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why ROI Matters */}
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Why Marketing ROI Matters</h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <p>Tracking marketing ROI is essential for sustainable business growth. It helps you:</p>
                <ul className="space-y-3 mt-4">
                  <li className="flex gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                    <span>
                      <strong>Justify marketing budgets</strong> to stakeholders with clear financial metrics
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                    <span>
                      <strong>Identify top-performing channels</strong> and allocate budget accordingly
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                    <span>
                      <strong>Reduce wasted ad spend</strong> on underperforming campaigns
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                    <span>
                      <strong>Optimize customer acquisition costs</strong> across your marketing mix
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                    <span>
                      <strong>Make data-driven decisions</strong> about marketing strategy and tactics
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* ROI Formulas */}
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Marketing ROI Formulas</h2>
              <div className="space-y-4">
                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Basic ROI Formula:</h3>
                    <p className="font-mono text-sm bg-neutral-200 dark:bg-neutral-900 p-3 rounded">
                      ROI = (Net Profit / Investment) × 100
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Marketing ROI Formula:</h3>
                    <p className="font-mono text-sm bg-neutral-200 dark:bg-neutral-900 p-3 rounded">
                      ROI = (Revenue - Ad Spend - COGS) / Ad Spend × 100
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">ROAS Formula:</h3>
                    <p className="font-mono text-sm bg-neutral-200 dark:bg-neutral-900 p-3 rounded">
                      ROAS = Total Revenue / Ad Spend
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Profit Margin Formula:</h3>
                    <p className="font-mono text-sm bg-neutral-200 dark:bg-neutral-900 p-3 rounded">
                      Profit Margin = (Net Profit / Revenue) × 100
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Use our calculator above to apply these formulas instantly. All calculations are performed in
                  real-time as you enter your numbers.
                </p>
              </div>
            </section>

            {/* Industry Benchmarks */}
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Industry Benchmarks</h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <p>
                  Marketing ROI varies significantly by industry, business model, and campaign type. Here are general
                  benchmarks to help you evaluate your performance:
                </p>
                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-neutral-200 dark:bg-neutral-700">
                        <th className="border border-neutral-300 dark:border-neutral-600 p-3 text-left font-semibold">
                          Industry
                        </th>
                        <th className="border border-neutral-300 dark:border-neutral-600 p-3 text-left font-semibold">
                          Average ROI
                        </th>
                        <th className="border border-neutral-300 dark:border-neutral-600 p-3 text-left font-semibold">
                          Good ROAS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-neutral-50 dark:bg-neutral-800/50">
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">E-commerce</td>
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">100-200%</td>
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">3:1 to 5:1</td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">SaaS</td>
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">200-400%</td>
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">5:1 to 10:1</td>
                      </tr>
                      <tr className="bg-neutral-50 dark:bg-neutral-800/50">
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">B2B Services</td>
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">150-300%</td>
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">3:1 to 6:1</td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">Lead Generation</td>
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">200-500%</td>
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">4:1 to 8:1</td>
                      </tr>
                      <tr className="bg-neutral-50 dark:bg-neutral-800/50">
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">Digital Services</td>
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">250-400%</td>
                        <td className="border border-neutral-300 dark:border-neutral-600 p-3">5:1 to 10:1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm italic">
                  Note: These benchmarks are based on industry averages and can vary significantly based on business
                  model, market, and campaign optimization.
                </p>
              </div>
            </section>

            {/* Best Practices */}
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Marketing ROI Best Practices</h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <div className="space-y-3">
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      1. Track All Costs Accurately
                    </h3>
                    <p className="text-sm">
                      Include ad spend, platform fees, creative production, and overhead costs to calculate true ROI.
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      2. Define Attribution Windows
                    </h3>
                    <p className="text-sm">
                      Establish clear timeframes for tracking conversions based on your sales cycle and customer
                      behavior.
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      3. Segment by Channel and Campaign
                    </h3>
                    <p className="text-sm">
                      Track ROI separately for different channels, campaigns, and customer segments to identify winners.
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      4. Account for Customer Lifetime Value
                    </h3>
                    <p className="text-sm">
                      Consider repeat purchases and long-term customer value when evaluating campaign ROI.
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      5. Test and Optimize Continuously
                    </h3>
                    <p className="text-sm">
                      Run A/B tests, analyze performance data, and iterate on top-performing elements.
                    </p>
                  </div>
                  <div className="bg-neutral-100/50 dark:bg-neutral-800/30 rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      6. Review Monthly and Adjust
                    </h3>
                    <p className="text-sm">
                      Monitor ROI trends over time and reallocate budget to high-performing campaigns.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How to Improve ROI */}
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                How to Improve Your Marketing ROI
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Acquisition Side</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Improve targeting accuracy and audience segmentation</li>
                      <li>• Optimize ad copy and creative performance</li>
                      <li>• Reduce customer acquisition cost (CAC)</li>
                      <li>• Test different channels and tactics</li>
                      <li>• Implement attribution tracking</li>
                      <li>• Focus on high-intent audiences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Conversion Side</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Improve website conversion rates</li>
                      <li>• Optimize landing pages for campaigns</li>
                      <li>• Streamline checkout and purchase process</li>
                      <li>• Improve product-market fit</li>
                      <li>• Increase average order value</li>
                      <li>• Maximize customer retention</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  The most effective approach combines optimization on both sides: reducing costs to acquire customers
                  while increasing the revenue they generate.
                </p>
              </div>
            </section>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="bg-neutral-100/50 dark:bg-neutral-800/20 backdrop-blur-sm border border-neutral-300/50 dark:border-neutral-800/50 rounded-xl overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What is ROI vs ROAS?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    ROI (Return on Investment) measures your profit as a percentage of your investment, calculated as
                    (Revenue - Cost) / Cost × 100. ROAS (Return on Ad Spend) measures revenue per dollar spent on
                    advertising, calculated as Revenue / Ad Spend. ROI focuses on profitability, while ROAS focuses on
                    revenue efficiency.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What is a good marketing ROI?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    A good marketing ROI varies by industry, but generally, a 5:1 ratio (500% ROI) is considered strong,
                    meaning you earn $5 for every $1 spent. The average marketing ROI across industries is around
                    100-200%. For ROAS, 4:1 or higher is typically considered good, though this depends on your profit
                    margins and business model.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    How do I calculate ROI?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    ROI is calculated using the formula: (Net Profit / Cost) × 100 = ROI%. For marketing campaigns, this
                    means: (Revenue - Ad Spend - COGS) / Ad Spend × 100. This gives you the percentage return on every
                    dollar invested in advertising. Use our calculator above to compute this automatically.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What timeframe should I measure marketing ROI?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    The ideal timeframe depends on your business model and sales cycle. For e-commerce and digital
                    products, weekly or monthly analysis is common. For B2B with longer sales cycles, quarterly or
                    annual ROI measurements may be more appropriate. Always account for attribution windows and customer
                    lifetime value when analyzing ROI.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    How can I improve my marketing ROI?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    To improve ROI, focus on: targeting high-intent audiences, optimizing conversion rates, reducing
                    customer acquisition costs, improving ad creative and messaging, A/B testing campaigns, focusing on
                    high-performing channels, and tracking performance with analytics. Use{" "}
                    <Link
                      href="https://app.rybbit.io"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      Rybbit Analytics
                    </Link>{" "}
                    to identify which campaigns and channels drive the best returns.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <RelatedTools currentToolHref="/tools/marketing-roi-calculator" category="analytics" />
        </div>

        <ToolCTA
          title="Track your marketing ROI with Rybbit"
          description="See which campaigns generate the best ROI and optimize your marketing spend."
          eventLocation="roi_calculator_cta"
        />
      </div>
    </>
  );
}
