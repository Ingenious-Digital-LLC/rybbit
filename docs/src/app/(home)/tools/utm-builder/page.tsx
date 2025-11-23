import { UTMBuilderForm } from "./UTMBuilderForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolCTA } from "../components/ToolCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free UTM Builder | Campaign URL Parameter Generator for Marketing Tracking",
  description:
    "Create trackable UTM campaign URLs instantly. Build utm_source, utm_medium, utm_campaign parameters for Google Analytics and marketing campaign tracking.",
  keywords: [
    "UTM builder",
    "UTM parameters",
    "campaign URL generator",
    "Google Analytics tracking",
    "UTM source",
    "UTM medium",
    "UTM campaign",
    "marketing tracking",
    "URL builder",
    "campaign tracking",
    "analytics parameters",
  ],
  openGraph: {
    title: "Free UTM Builder | Campaign URL Parameter Generator",
    description:
      "Generate UTM campaign URLs instantly for accurate marketing tracking in Google Analytics and other analytics platforms.",
    type: "website",
    url: "https://rybbit.com/tools/utm-builder",
    siteName: "Rybbit Documentation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free UTM Builder | Campaign URL Parameter Generator",
    description: "Build trackable campaign URLs with UTM parameters for better marketing analytics.",
  },
  alternates: {
    canonical: "https://rybbit.com/tools/utm-builder",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "UTM Builder Tool",
      description: "Free tool to generate UTM parameters for campaign URL tracking",
      url: "https://rybbit.com/tools/utm-builder",
      applicationCategory: "Utility",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Organization",
        name: "Rybbit",
        url: "https://rybbit.io",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is UTM tracking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UTM (Urchin Tracking Module) parameters are tags added to URLs that help you track the effectiveness of your marketing campaigns in analytics tools like Rybbit, Google Analytics, and others. They tell you exactly where your traffic is coming from and how your campaigns perform.",
          },
        },
        {
          "@type": "Question",
          name: "What are the required UTM parameters?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The three required parameters are: utm_source (identifies the source like google or newsletter), utm_medium (identifies the medium like cpc or email), and utm_campaign (identifies the specific campaign like summer_sale).",
          },
        },
        {
          "@type": "Question",
          name: "How do I track UTM links with Rybbit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Once you have Rybbit installed on your website, UTM parameters are automatically tracked. You can view your campaign performance in your Rybbit dashboard under the UTM section.",
          },
        },
        {
          "@type": "Question",
          name: "What are optional UTM parameters?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "utm_term is used for tracking paid search keywords, while utm_content helps differentiate between different ads or links within the same campaign. These are optional but useful for deeper campaign analysis and A/B testing.",
          },
        },
        {
          "@type": "Question",
          name: "What naming conventions should I follow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use lowercase letters and underscores instead of spaces (e.g., summer_sale, not Summer Sale). Be consistent across campaigns so data is properly grouped in analytics. Avoid special characters and keep names descriptive but concise.",
          },
        },
      ],
    },
  ],
};

export default function UTMBuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "UTM Builder" }]}
          />
          {/* Header */}
          <div className="mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-full">
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Free Tool</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              UTM Builder
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              Create trackable campaign URLs with UTM parameters. Perfect for tracking your marketing campaigns across
              different channels and accurately measuring their performance.
            </p>
          </div>

          {/* Interactive Form Component */}
          <UTMBuilderForm />

          {/* What are UTM Parameters Section */}
          <div className="mb-16 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">What are UTM Parameters?</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              UTM (Urchin Tracking Module) parameters are special tags you add to the end of your URLs to track your
              marketing campaign performance. When someone clicks a link with UTM parameters, analytics tools like
              Rybbit, Google Analytics, and others automatically capture that data and organize it for you.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Instead of wondering which campaigns drive the most traffic, UTM parameters let you see exactly how many
              visitors came from each campaign, where they came from, and how they behaved on your site.
            </p>
          </div>

          {/* How UTM Works with Google Analytics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              How UTM Parameters Work with Google Analytics
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">The Five UTM Parameters</h3>
                <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                  <li>
                    <strong className="text-emerald-600 dark:text-emerald-400">utm_source:</strong> Where the traffic
                    comes from (google, newsletter, facebook)
                  </li>
                  <li>
                    <strong className="text-emerald-600 dark:text-emerald-400">utm_medium:</strong> How they got there
                    (cpc, email, social, organic)
                  </li>
                  <li>
                    <strong className="text-emerald-600 dark:text-emerald-400">utm_campaign:</strong> Which campaign it
                    belongs to (summer_sale, product_launch)
                  </li>
                  <li>
                    <strong className="text-emerald-600 dark:text-emerald-400">utm_term:</strong> Paid search keywords
                    (optional)
                  </li>
                  <li>
                    <strong className="text-emerald-600 dark:text-emerald-400">utm_content:</strong> Which ad or link
                    was clicked (optional)
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Example URL Structure</h3>
                <div className="bg-neutral-900 dark:bg-neutral-950 rounded p-4 mb-4 overflow-x-auto">
                  <code className="text-xs text-emerald-400 font-mono break-words">
                    https://example.com?utm_source=google&utm_medium=cpc&utm_campaign=summer_sale&utm_term=running_shoes
                  </code>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Google Analytics automatically parses these parameters and shows them in your reports, making it easy
                  to compare campaign performance.
                </p>
              </div>
            </div>
          </div>

          {/* UTM Naming Conventions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              UTM Naming Conventions & Best Practices
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Use Consistent Formatting
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 mb-2">
                  Always use lowercase letters and underscores instead of spaces. This ensures consistent data grouping
                  in your analytics.
                </p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  Good: summer_sale, facebook_ads, email_newsletter | Bad: Summer Sale, Facebook Ads, Email Newsletter
                </p>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Be Descriptive but Concise
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Use names that clearly identify the campaign or source without being overly long. Short, specific
                  names are easier to remember and less prone to typos.
                </p>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Establish a Naming Convention
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 mb-2">
                  Create a standard UTM naming scheme for your organization and document it. This prevents duplicate or
                  conflicting parameter values.
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Example scheme: campaign = [season]_[product], source = [channel], medium = [type]
                </p>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6 py-2">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Never Use Spaces or Special Characters
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Spaces and special characters can cause encoding issues. Stick to alphanumeric characters and
                  underscores.
                </p>
              </div>
            </div>
          </div>

          {/* Common UTM Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Common UTM Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Email Marketing</h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Track which emails drive the most traffic. Use utm_source=newsletter, utm_medium=email, and create
                  unique campaign names for each send.
                </p>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Social Media Campaigns</h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Measure performance across platforms. Use utm_source=facebook/twitter/linkedin, utm_medium=social, and
                  track A/B tests with utm_content.
                </p>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Paid Search Ads</h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Track Google Ads and Bing campaigns. Use utm_source=google, utm_medium=cpc, and utm_term for your
                  keywords to optimize bidding.
                </p>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                  Affiliate & Referral Programs
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Monitor performance by partner. Use utm_source=[partner_name], utm_medium=affiliate, and
                  utm_content=[unique_id] per partner.
                </p>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                  Offline to Online Tracking
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Include UTM parameters in offline marketing materials. QR codes, print ads, and events can all drive
                  trackable traffic.
                </p>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">A/B Testing Ads</h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Compare different ad creatives or messaging. Use utm_content to differentiate versions and measure
                  which performs better.
                </p>
              </div>
            </div>
          </div>

          {/* Common Mistakes to Avoid */}
          <div className="mb-16 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Common UTM Mistakes to Avoid</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Inconsistent Parameter Values
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Using "Facebook" sometimes and "facebook" other times causes data to be split into separate analytics
                  rows. Always use consistent casing and formatting.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Omitting Required Parameters
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  While technically you can have partial UTM parameters, missing utm_source, utm_medium, or utm_campaign
                  reduces your tracking insight. Always fill at least these three.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Using Spaces and Special Characters
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Spaces become %20 in URLs, and special characters can cause encoding issues. Stick to letters,
                  numbers, hyphens, and underscores.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Forgetting to Tag All Links
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  If you only tag some of your marketing links, you'll get incomplete data. Create a process to tag
                  every single campaign link.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Not Documenting Your Scheme
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Without documented naming conventions, your team will create inconsistent UTM parameters. Create and
                  share a style guide.
                </p>
              </div>
            </div>
          </div>

          {/* How to Use This Tool */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">How to Use the UTM Builder</h2>
            <ol className="space-y-4 text-neutral-700 dark:text-neutral-300">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">
                  1
                </span>
                <div>
                  <strong className="text-neutral-900 dark:text-white">Enter Your Website URL:</strong> Start with your
                  base URL (e.g., https://example.com/products)
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">
                  2
                </span>
                <div>
                  <strong className="text-neutral-900 dark:text-white">Fill Required Fields:</strong> Set your
                  utm_source, utm_medium, and utm_campaign. These three are essential for proper tracking.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">
                  3
                </span>
                <div>
                  <strong className="text-neutral-900 dark:text-white">Add Optional Parameters (Optional):</strong> Use
                  utm_term for keywords and utm_content to differentiate ads within the same campaign.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">
                  4
                </span>
                <div>
                  <strong className="text-neutral-900 dark:text-white">Copy Your UTM URL:</strong> Click the Copy button
                  to copy your fully formed URL with all parameters included.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">
                  5
                </span>
                <div>
                  <strong className="text-neutral-900 dark:text-white">Use in Your Campaigns:</strong> Paste the URL in
                  your marketing channels (emails, ads, social posts, etc.) and track the results.
                </div>
              </li>
            </ol>
          </div>
          <RelatedTools currentToolHref="/tools/utm-builder" category="analytics" />
        </div>

        <ToolCTA
          title="Track your UTM campaigns with Rybbit"
          description="See exactly which campaigns drive the most traffic and conversions."
          eventLocation="utm_builder_cta"
        />
      </div>
    </>
  );
}
