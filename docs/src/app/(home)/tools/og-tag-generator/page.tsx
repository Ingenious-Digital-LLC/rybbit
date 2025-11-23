import { ToolCTA } from "../components/ToolCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedTools } from "@/components/RelatedTools";
import { Metadata } from "next";
import Link from "next/link";
import { OGTagForm } from "./OGTagForm";

export const metadata: Metadata = {
  title: "Free Open Graph Tag Generator | OG Meta Tag Creator for Social Sharing",
  description:
    "Generate optimized Open Graph tags for social sharing. Create perfect previews for Facebook, Twitter, LinkedIn with our free AI-powered OG tag generator. Learn best practices, image sizes, and testing methods.",
  keywords: [
    "open graph tag generator",
    "og meta tag creator",
    "social sharing tags",
    "facebook og tags",
    "twitter card generator",
    "linkedin meta tags",
    "og image size",
    "social preview generator",
    "meta tag tool",
    "seo tool",
  ],
  openGraph: {
    title: "Free Open Graph Tag Generator | Perfect Social Media Previews",
    description:
      "Create optimized OG tags for social sharing. Generate Facebook, Twitter, and LinkedIn previews in seconds with our free tool.",
    type: "website",
    url: "https://rybbit.com/tools/og-tag-generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Open Graph Tag Generator",
    description: "Generate optimized OG tags for social sharing. Perfect previews on Facebook, Twitter, and LinkedIn.",
  },
  alternates: {
    canonical: "https://rybbit.com/tools/og-tag-generator",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Open Graph Tag Generator",
      applicationCategory: "SEO Tool",
      description: "Free tool to generate optimized Open Graph tags for social sharing",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "AI-powered OG tag generation",
        "Multiple tag variations",
        "Twitter Card optimization",
        "Social preview",
        "HTML code generation",
        "Image size recommendations",
      ],
      operatingSystem: "Any",
      url: "https://rybbit.com/tools/og-tag-generator",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are Open Graph tags and why do I need them?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Open Graph (OG) tags are meta tags in your HTML head that control how your content appears when shared on social media platforms like Facebook, LinkedIn, and Twitter. They define the title, description, image, and type of content that appears in the social preview. Without OG tags, social media platforms use their default parsing which often results in poor-looking previews. Optimized OG tags significantly increase click-through rates and engagement when content is shared.",
          },
        },
        {
          "@type": "Question",
          name: "What are the required vs optional Open Graph tags?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Required OG tags are: og:title, og:type, og:image, and og:url. These four tags provide the minimum information needed for a social preview. Optional but recommended tags include og:description (summary of content), og:locale (language), and og:site_name. For articles, add og:article:published_time and og:article:author. Twitter Cards require card type, title, and description at minimum.",
          },
        },
        {
          "@type": "Question",
          name: "What are the correct image sizes and specifications for OG tags?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For og:image, use images that are 1200x630 pixels (1.91:1 aspect ratio) for optimal display on most platforms. Minimum recommended size is 200x200 pixels. File size should be under 8MB. Twitter Card images for summary_large_image should be 506x506 minimum, preferably 1024x512. Use JPG or PNG formats. For og:image:width and og:image:height, specify the actual dimensions of your image. Square images work best for profiles and smaller feeds.",
          },
        },
        {
          "@type": "Question",
          name: "How do I test my Open Graph tags?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use Facebook's Sharing Debugger (facebook.com/developers/tools/debug/) to see how your pages appear on Facebook. Use LinkedIn's Post Inspector (linkedin.com/feed/update/urn:li:activity) to test LinkedIn previews. For Twitter, use the Card Validator (cards-dev.twitter.com/validator). Always clear the cache after making changes. Test on actual social platforms by pasting your URL in the status update box. Track social referral traffic with Rybbit Analytics to see which OG tags drive the most clicks.",
          },
        },
        {
          "@type": "Question",
          name: "What's the difference between Open Graph tags and Twitter Cards?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Open Graph tags are a protocol developed by Facebook that works across multiple platforms. Twitter Cards use the twitter: prefix and allow more granular control over Twitter-specific previews. Twitter Cards types include summary (small card with summary), summary_large_image (large image card), app (mobile app card), and player (video player card). You should implement both OG tags and Twitter Card tags for complete social optimization. Twitter will fall back to OG tags if Twitter Card tags are missing.",
          },
        },
      ],
    },
  ],
};

export default function OGTagGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "OG Tag Generator" }]}
          />
          {/* Header */}
          <div className="mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-full">
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">AI-Powered Tool</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              Open Graph Tag Generator
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              Generate optimized Open Graph tags for social media sharing. Get perfect previews on Facebook, Twitter,
              and LinkedIn with AI-powered suggestions and complete HTML code.
            </p>
          </div>

          {/* Tool */}
          <div className="mb-16">
            <OGTagForm />
          </div>

          {/* Educational Content */}
          <div className="mb-16 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">What Are Open Graph Tags?</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Open Graph (OG) tags are meta tags placed in the HTML head of your web pages that control how your
                content appears when shared on social media platforms. Developed by Facebook, the Open Graph protocol
                works across Facebook, LinkedIn, Twitter, Pinterest, and many other social networks.
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                When someone shares your link on social media, the platform's crawler reads your OG tags to determine
                what preview to display: the title, description, image, and content type. Without proper OG tags, social
                platforms make their best guess by extracting text and images from your page, often resulting in
                unattractive or irrelevant previews that discourage clicks.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Why Open Graph Tags Matter for Social Sharing
              </h2>
              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900 rounded-lg">
                  <h3 className="font-semibold text-emerald-900 dark:text-emerald-300 mb-2">
                    Increased Click-Through Rates
                  </h3>
                  <p className="text-emerald-800 dark:text-emerald-200">
                    Optimized OG images and descriptions increase clicks on social shares by 2-3x compared to default
                    previews.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Brand Consistency</h3>
                  <p className="text-blue-800 dark:text-blue-200">
                    Control exactly how your brand appears across social platforms, ensuring consistent messaging and
                    visual branding.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900 rounded-lg">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Better Social Engagement</h3>
                  <p className="text-purple-800 dark:text-purple-200">
                    Professional, well-designed previews encourage sharing and comments, leading to increased organic
                    reach.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-lg">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">SEO and Discoverability</h3>
                  <p className="text-orange-800 dark:text-orange-200">
                    Better social engagement signals can indirectly improve search rankings and overall content
                    discoverability.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Required vs Optional OG Tags</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                    Required Tags (Minimum)
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <code className="text-sm font-mono text-emerald-600 dark:text-emerald-400">og:title</code>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                        The title of your page or content (50-60 characters recommended)
                      </p>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <code className="text-sm font-mono text-emerald-600 dark:text-emerald-400">og:type</code>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                        The type of content: website, article, product, video.movie, music.song, etc.
                      </p>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <code className="text-sm font-mono text-emerald-600 dark:text-emerald-400">og:image</code>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                        URL of the image to display (1200x630px recommended)
                      </p>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <code className="text-sm font-mono text-emerald-600 dark:text-emerald-400">og:url</code>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                        The canonical URL of the page being shared
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Recommended Tags</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <code className="text-sm font-mono text-blue-600 dark:text-blue-400">og:description</code>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                        A brief description of the content (150-160 characters)
                      </p>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                        og:image:width & og:image:height
                      </code>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                        Actual dimensions of the og:image
                      </p>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <code className="text-sm font-mono text-blue-600 dark:text-blue-400">og:site_name</code>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">Your website or brand name</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                      <code className="text-sm font-mono text-blue-600 dark:text-blue-400">twitter:card</code>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
                        Twitter Card type: summary, summary_large_image, app, or player
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Open Graph Image Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
                      <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-white">Platform</th>
                      <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-white">
                        Recommended Size
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-white">
                        Aspect Ratio
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-white">Format</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200 dark:border-neutral-700">
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Facebook / General</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">1200 x 630 px</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">1.91:1</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">JPG / PNG</td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-neutral-700">
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">
                        Twitter (summary_large_image)
                      </td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">1024 x 512 px</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">2:1</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">JPG / PNG</td>
                    </tr>
                    <tr className="border-b border-neutral-200 dark:border-neutral-700">
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">LinkedIn</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">1200 x 630 px</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">1.91:1</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">JPG / PNG</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">Minimum</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">200 x 200 px</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">1:1</td>
                      <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">JPG / PNG</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4">
                Use 1200x630px for most platforms (Facebook, LinkedIn, Pinterest). Keep file size under 8MB. Use
                high-quality JPG or PNG. Avoid text in critical image areas as it may be cropped.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">How to Test Your OG Tags</h2>
              <div className="space-y-4">
                <div className="p-6 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                    1. Facebook Sharing Debugger
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                    Visit facebook.com/developers/tools/debug/ and enter your URL. This shows exactly how your page will
                    appear in Facebook feeds and reveals any parsing errors.
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Pro tip: Click "Scrape Again" to refresh the cache after making changes.
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                    2. LinkedIn Post Inspector
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                    Visit linkedin.com/feed/update and paste your URL in the status box. This preview shows how your
                    content will appear on LinkedIn feeds.
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Pro tip: LinkedIn sometimes takes time to update. Wait a few hours if changes don't appear
                    immediately.
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                    3. Twitter Card Validator
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                    Visit cards-dev.twitter.com/validator and enter your URL to preview how your page will appear in
                    tweets and Twitter feeds.
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Pro tip: Check the "Tag" tab to see which tags Twitter detected from your page.
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                    4. Test on Actual Social Platforms
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Paste your URL directly into Facebook, LinkedIn, Twitter, and Pinterest status boxes to see
                    real-time previews. This is the most authentic test.
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Pro tip: Use incognito/private browsing mode to avoid cached versions.
                  </p>
                </div>

                <div className="p-6 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg">
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">
                    5. Track Performance with Analytics
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                    Use{" "}
                    <Link
                      href="https://app.rybbit.io"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                    >
                      Rybbit Analytics
                    </Link>{" "}
                    to track which social platforms drive the most traffic to your pages.
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Measure CTR by platform to see which OG tags perform best and optimize accordingly.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Open Graph Tags FAQs</h2>
            <div className="bg-neutral-100/50 dark:bg-neutral-800/20 backdrop-blur-sm border border-neutral-300/50 dark:border-neutral-800/50 rounded-xl overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What are Open Graph tags?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Open Graph tags are meta tags that control how URLs are displayed when shared on social media
                    platforms like Facebook, LinkedIn, and Twitter. They define the title, description, image, and type
                    of content that appears in social shares.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    Why are OG tags important?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    OG tags significantly impact social media engagement. A well-optimized OG image and description can
                    increase click-through rates by 2-3x compared to default previews. They're essential for content
                    marketing and social sharing strategy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    How do I test my OG tags?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Use Facebook's Sharing Debugger, LinkedIn's Post Inspector, or Twitter's Card Validator to test how
                    your OG tags appear. Track social referral traffic with{" "}
                    <Link
                      href="https://app.rybbit.io"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      Rybbit Analytics
                    </Link>{" "}
                    to see which OG tags drive the most clicks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What's the difference between Open Graph tags and Twitter Cards?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Open Graph tags are a protocol developed by Facebook that works across multiple platforms. Twitter
                    Cards use the twitter: prefix and allow more granular control over Twitter-specific previews. You
                    should implement both for complete social optimization. Twitter will fall back to OG tags if Twitter
                    Card tags are missing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What image sizes should I use for OG tags?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Use 1200x630 pixels (1.91:1 aspect ratio) for og:image on most platforms. Minimum size is 200x200
                    pixels. For Twitter Cards (summary_large_image), use 1024x512 or larger. Always include
                    og:image:width and og:image:height tags. Keep file size under 8MB and use JPG or PNG format.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <RelatedTools currentToolHref="/tools/og-tag-generator" category="seo" />
        </div>

        <ToolCTA
          title="Track your social media traffic with Rybbit"
          description="See which social platforms drive the most traffic and optimize your OG tags based on real data."
          eventLocation="og_tag_generator_cta"
        />
      </div>
    </>
  );
}
