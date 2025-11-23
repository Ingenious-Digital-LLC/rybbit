import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolCTA } from "../components/ToolCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from "next";
import Link from "next/link";
import { SampleSizeForm } from "./SampleSizeForm";

export const metadata: Metadata = {
  title: "Free Sample Size Calculator | A/B Test Sample Size Calculator for Marketing",
  description:
    "Calculate the sample size needed for statistically significant A/B test results. Determine confidence levels, statistical power, and minimum detectable effect. Never run underpowered tests again with our free A/B testing calculator.",
  keywords: [
    "sample size calculator",
    "ab test sample size",
    "sample size determination",
    "statistical power calculator",
    "ab testing calculator",
    "significance calculator",
    "conversion rate testing",
    "minimum detectable effect",
    "confidence level",
    "statistical significance",
  ],
  openGraph: {
    title: "Free Sample Size Calculator | A/B Test Sample Size Calculator",
    description:
      "Calculate how many visitors you need for statistically significant A/B test results. Get accurate sample size calculations with confidence levels and statistical power.",
    type: "website",
    url: "https://rybbit.com/tools/sample-size-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Sample Size Calculator for A/B Tests",
    description:
      "Calculate sample size needed for statistically significant A/B test results. Determine confidence levels and statistical power.",
  },
  alternates: {
    canonical: "https://rybbit.com/tools/sample-size-calculator",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "A/B Test Sample Size Calculator",
      applicationCategory: "Statistics Tool",
      description: "Free tool to calculate the sample size needed for statistically significant A/B testing results",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Accurate sample size calculation",
        "Configurable confidence levels (90%, 95%, 99%)",
        "Adjustable statistical power (80%, 90%)",
        "Minimum detectable effect customization",
        "Test duration estimation",
        "Real-time results visualization",
      ],
      operatingSystem: "Any",
      url: "https://rybbit.com/tools/sample-size-calculator",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is sample size in A/B testing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sample size is the number of visitors or observations required in each test variant (control and treatment) to reach statistical significance. It's calculated based on your baseline conversion rate, the minimum detectable effect (smallest improvement you want to reliably detect), the confidence level (how certain you want to be), and statistical power (probability of detecting the effect if it exists). Proper sample size ensures your A/B test results are reliable and not due to random chance.",
          },
        },
        {
          "@type": "Question",
          name: "Why does minimum detectable effect matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minimum detectable effect (MDE) defines the smallest improvement you want to detect in your A/B test. For example, a 0.5% improvement in conversion rate or a 2% improvement. Smaller MDEs require much larger sample sizes because you need more data to distinguish tiny differences from random variation. A 0.1% improvement might need 10x more visitors than a 1% improvement. Setting realistic MDEs based on business impact helps you balance statistical rigor with practical feasibility.",
          },
        },
        {
          "@type": "Question",
          name: "What is statistical significance and why does it matter for A/B tests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Statistical significance measures whether the difference between your control and treatment variants is real or just due to random chance. A statistically significant result typically means there's less than a 5% probability (at 95% confidence) that the difference occurred by chance alone. Without sufficient sample size, you might see a 'winning' variant that's actually just lucky variation. Reaching statistical significance requires hitting the calculated sample size, which is why you shouldn't stop A/B tests early even if you see early winners.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between confidence level and statistical power?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Confidence level (often 95%) measures the risk of Type I error - claiming a difference exists when it doesn't (false positive). A 95% confidence level means you accept a 5% chance of false positives. Statistical power (typically 80%) measures the risk of Type II error - missing a real difference when it exists (false negative). An 80% power means you have a 20% chance of missing a real effect if it exists. Both matter: 95% confidence and 80% power are standard in A/B testing as they balance risk appropriately.",
          },
        },
        {
          "@type": "Question",
          name: "How long should I run my A/B test?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Run your A/B test until you've reached the calculated sample size, regardless of what the results look like mid-test. The duration depends on your daily visitor volume. If you need 10,000 visitors total and get 1,000/day, you'll need about 10 days. At 5,000/day, that's 2 days. Running tests longer than needed wastes resources, but stopping early risks false positives - you might declare a 'winner' that's just random luck. Use analytics to track progress toward your sample size goal.",
          },
        },
        {
          "@type": "Question",
          name: "What baseline conversion rate should I use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your baseline conversion rate is your current control variant's conversion rate. If you're testing a website redesign and currently 2.5% of visitors convert, use 2.5% as your baseline. You can get this from your analytics tools (Google Analytics, Rybbit Analytics, etc.). Use your most recent data that's representative of normal traffic. Seasonal variations and traffic changes can affect your baseline, so update it if conditions change significantly. More accurate baselines lead to more realistic sample size calculations.",
          },
        },
      ],
    },
  ],
};

export default function SampleSizeCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "Sample Size Calculator" }]} />
          {/* Header */}
          <div className="mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-full">
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Free Tool</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              A/B Test Sample Size Calculator
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              Calculate how many visitors you need for statistically significant A/B test results. Never run
              underpowered tests again.
            </p>
          </div>

          {/* Tool */}
          <div className="mb-16">
            <SampleSizeForm />
          </div>

          {/* Educational Content */}
          <div className="mb-16 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">What Is Sample Size?</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Sample size is the number of visitors or observations needed in each variant (control and treatment) of
                your A/B test to achieve statistical significance. It's a critical calculation that determines whether
                your test results are reliable or just due to random chance.
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Without proper sample size, you risk two costly mistakes: (1) declaring a "winning" variant that's
                actually just lucky variation (Type I error), or (2) missing a real improvement because you didn't
                collect enough data (Type II error). The correct sample size balances these risks based on your specific
                test parameters.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Why Sample Size Matters for A/B Tests
              </h2>
              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 rounded-lg">
                  <h3 className="font-semibold text-emerald-900 dark:text-emerald-300 mb-2">Avoid False Positives</h3>
                  <p className="text-emerald-800 dark:text-emerald-200">
                    Adequate sample size reduces the risk of declaring a winner when the difference is just random
                    fluctuation. At 95% confidence, you accept only a 5% chance of being wrong.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Detect Real Improvements</h3>
                  <p className="text-blue-800 dark:text-blue-200">
                    Proper power (typically 80%) ensures you have a high probability of catching real improvements when
                    they exist, avoiding missed opportunities.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900 rounded-lg">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Business Confidence</h3>
                  <p className="text-purple-800 dark:text-purple-200">
                    Statistically significant results give you confidence to implement changes with real revenue impact,
                    rather than relying on gut feeling.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-lg">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">
                    Efficient Resource Allocation
                  </h3>
                  <p className="text-orange-800 dark:text-orange-200">
                    Knowing your sample size upfront prevents wasting time and resources running tests longer than
                    needed or stopping early out of impatience.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Understanding Statistical Significance
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Statistical significance answers the question: "Is this result real, or just random chance?" A result is
                statistically significant when the probability of observing it by chance alone (if there were truly no
                difference) is very small - typically less than 5%.
              </p>
              <div className="p-6 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">P-Value</h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    The p-value is the probability of seeing your results if there's actually no difference. A p-value
                    of 0.03 (3%) means there's only a 3% chance this difference occurred randomly. With 95% confidence,
                    you need p &lt; 0.05.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Confidence Interval</h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    A 95% confidence interval around your observed effect means if you repeated the test 100 times, the
                    true effect would fall within this range 95 times. Wider intervals indicate less certainty; narrower
                    ones indicate more precision.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    Statistical vs. Practical Significance
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    A result can be statistically significant (real difference exists) but practically insignificant
                    (too small to matter). Conversely, a practically significant result might not reach statistical
                    significance without enough data. Both matter for good business decisions.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Confidence Levels and Statistical Power
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                    Confidence Level (Type I Error Protection)
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">90%</div>
                        <div>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            <strong>10% false positive risk:</strong> More lenient, detects effects with fewer visitors.
                            Use when speed matters and you can tolerate higher false positive risk.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">95%</div>
                        <div>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            <strong>5% false positive risk:</strong> Industry standard. Recommended for most A/B tests.
                            Provides good balance between safety and efficiency.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">99%</div>
                        <div>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            <strong>1% false positive risk:</strong> Very strict, requires more visitors. Use only when
                            false positives are extremely costly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                    Statistical Power (Type II Error Protection)
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-lg">80%</div>
                        <div>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            <strong>20% false negative risk:</strong> Standard in A/B testing. Recommended for most
                            tests. Good balance of detecting real effects while managing sample size.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-lg">90%</div>
                        <div>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            <strong>10% false negative risk:</strong> More strict, requires more visitors. Use when
                            missing improvements is very costly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Minimum Detectable Effect (MDE)
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Minimum detectable effect is the smallest change in conversion rate (or other metric) that your test is
                powered to detect reliably. It's expressed as an absolute percentage point change.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
                      <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-white">MDE</th>
                      <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-white">
                        Baseline Example
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-white">
                        Sample Size Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200 dark:border-neutral-700">
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">0.1%</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">2.5% → 2.6% conversion</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">
                        Very large (hundreds of thousands)
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-neutral-700">
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">0.5%</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">2.5% → 3.0% conversion</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Large (tens of thousands)</td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-neutral-700">
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">1.0%</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">2.5% → 3.5% conversion</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Moderate (thousands)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">5.0%</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">2.5% → 7.5% conversion</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Small (hundreds)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4">
                Smaller MDEs require exponentially larger sample sizes. Define your MDE based on business impact: what's
                the smallest improvement worth implementing? If a 0.5% improvement would save $100K/year, that's worth
                detecting; if a 0.1% improvement would only save $5K, you might not need to detect it.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">How to Use This Calculator</h2>
              <div className="space-y-4">
                <div className="p-6 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                    1. Enter Your Baseline Conversion Rate
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Get this from your analytics (Google Analytics, Rybbit, etc.). If 100 visitors and 3 convert, your
                    baseline is 3%. Use your most recent representative data.
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                    2. Define Your Minimum Detectable Effect
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    What's the smallest improvement worth detecting? If your baseline is 2%, a 0.5% MDE means you want
                    to reliably detect moving to 2.5% or higher. Think about business impact, not just percentage
                    points.
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                    3. Choose Your Confidence Level (Default: 95%)
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    95% is standard and recommended. This means you accept a 5% chance that your result is a false
                    positive. Only use 90% if time is critical, or 99% if false positives are extremely costly.
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                    4. Select Your Statistical Power (Default: 80%)
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    80% power is standard, meaning you accept a 20% chance of missing a real improvement. Use 90% if
                    missing improvements is very costly (requires larger sample size).
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                    5. Calculate and Plan Your Test
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    The calculator shows the required sample size per variant, total visitors needed, and estimated test
                    duration. Use Rybbit Analytics to monitor progress and track when you reach statistical
                    significance.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">A/B Test Sample Size FAQs</h2>
            <div className="bg-neutral-100/50 dark:bg-neutral-800/20 backdrop-blur-sm border border-neutral-300/50 dark:border-neutral-800/50 rounded-xl overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What is sample size in A/B testing?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Sample size is the number of visitors needed in each test variant (control and treatment) to reach
                    statistical significance. It's calculated based on your baseline conversion rate, the minimum
                    detectable effect you want to find, your desired confidence level, and statistical power. Proper
                    sample size ensures your A/B test results are reliable and not due to random chance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    Why does MDE matter for sample size?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Minimum detectable effect (MDE) defines the smallest improvement you want to reliably detect.
                    Smaller MDEs require exponentially larger sample sizes. For example, detecting a 0.5% improvement
                    might require 10 times more visitors than detecting a 5% improvement. Set your MDE based on business
                    impact: what's the smallest improvement worth implementing? This helps balance statistical rigor
                    with practical feasibility.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What is statistical significance and why does it matter?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Statistical significance means the difference between your variants is real and not just due to
                    random chance. At 95% confidence, a statistically significant result means there's less than a 5%
                    probability the difference occurred randomly. Without sufficient sample size, you might see a
                    "winning" variant that's just lucky variation. Reaching calculated sample size is critical - don't
                    stop tests early even if you see early winners.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What is the difference between confidence level and statistical power?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Confidence level (typically 95%) measures Type I error - the risk of claiming a difference exists
                    when it doesn't (false positive). At 95% confidence, you accept a 5% chance of being wrong.
                    Statistical power (typically 80%) measures Type II error - the risk of missing a real difference
                    when it exists (false negative). At 80% power, you have a 20% chance of missing a real effect. Both
                    matter for reliable A/B testing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    How long should I run my A/B test?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Run your test until you reach the calculated sample size, even if you see apparent "winners"
                    mid-test. Stopping early increases false positive risk. The duration depends on your daily visitor
                    volume - if you need 10,000 visitors and get 1,000/day, run it about 10 days. Use{" "}
                    <Link
                      href="https://app.rybbit.io"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      Rybbit Analytics
                    </Link>{" "}
                    to track progress and know when you reach statistical significance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What baseline conversion rate should I use?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Your baseline is your current control variant's conversion rate. Get this from your analytics tools.
                    If 2.5% of visitors currently convert, use 2.5%. Use your most recent representative data. Seasonal
                    variations and traffic changes can affect your baseline, so update it if conditions change. More
                    accurate baselines lead to more realistic sample size calculations and test planning.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <RelatedTools currentToolHref="/tools/sample-size-calculator" category="analytics" />
        </div>

        <ToolCTA
          title="Run better A/B tests with Rybbit"
          description="Track conversions, variants, and statistical significance in real-time. Know exactly when you've reached statistical significance and avoid costly false positives."
          eventLocation="sample_size_calculator_cta"
        />
      </div>
    </>
  );
}
