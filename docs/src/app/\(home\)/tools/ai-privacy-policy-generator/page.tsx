import { PrivacyPolicyForm } from "./PrivacyPolicyForm";
import { TrackedButton } from "@/components/TrackedButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DEFAULT_EVENT_LIMIT } from "@/lib/const";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Privacy Policy Generator | GDPR & Privacy Policy Creator",
  description:
    "Generate a GDPR-compliant privacy policy with AI in minutes. Our free privacy policy generator creates customized, legally-aligned policies for your website. CCPA, GDPR, and privacy law compliant.",
  keywords: [
    "privacy policy generator",
    "AI privacy policy",
    "GDPR privacy policy",
    "CCPA compliance",
    "privacy policy template",
    "generate privacy policy",
    "free privacy policy",
    "privacy policy creator",
    "website privacy policy",
    "privacy compliance",
    "data protection",
    "privacy regulations",
  ],
  openGraph: {
    title: "Free AI Privacy Policy Generator | GDPR & Privacy Policy Creator",
    description:
      "Generate GDPR-compliant privacy policies in minutes using AI. Free, customized, legally-aligned for your website.",
    type: "website",
    url: "https://rybbit.com/tools/ai-privacy-policy-generator",
    siteName: "Rybbit Documentation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Privacy Policy Generator | GDPR & Privacy Policy Creator",
    description:
      "Generate a GDPR-compliant privacy policy with AI. Customize for your business in minutes, no lawyer needed.",
  },
  alternates: {
    canonical: "https://rybbit.com/tools/ai-privacy-policy-generator",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://rybbit.com/tools/ai-privacy-policy-generator#webapp",
      name: "AI Privacy Policy Generator",
      description: "Free AI-powered tool to generate GDPR-compliant privacy policies for your website",
      url: "https://rybbit.com/tools/ai-privacy-policy-generator",
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
      "@id": "https://rybbit.com/tools/ai-privacy-policy-generator#faqpage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need a privacy policy for my website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, most websites need a privacy policy. It's legally required if you collect personal data (email addresses, cookies, IP addresses, etc.), operate in the EU under GDPR, operate in California under CCPA, or use analytics. Even if not required, it builds user trust and demonstrates transparency about data handling practices.",
          },
        },
        {
          "@type": "Question",
          name: "What is GDPR compliance in a privacy policy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GDPR (General Data Protection Regulation) compliance means your privacy policy clearly explains what personal data you collect, how you use it, who you share it with, and users' rights regarding their data. It must include information about data retention, cookies, analytics, and provide users with rights to access, correct, and delete their data. The policy must be easily accessible and written in clear language.",
          },
        },
        {
          "@type": "Question",
          name: "What sections should my privacy policy include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Essential sections include: Introduction, Information We Collect, How We Use Your Information, Who We Share Data With, Your Rights and Choices, Data Retention, Cookies and Tracking, Third-Party Links, Data Security, Children's Privacy, and Contact Information. Additional sections may include: Legal Bases for Processing, Data Transfers, Automated Decision-Making, and Policy Updates. Our AI generator includes all relevant sections based on your website description.",
          },
        },
        {
          "@type": "Question",
          name: "What is CCPA and how does it differ from GDPR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CCPA (California Consumer Privacy Act) is US privacy legislation similar to GDPR but with some differences. CCPA applies to for-profit companies collecting personal information from California residents. Key rights include: knowing what data is collected, deleting personal information, and opting out of data sales. GDPR is broader, applies to any company processing EU residents' data, and has stricter requirements around consent and data transfers.",
          },
        },
        {
          "@type": "Question",
          name: "Is an AI-generated privacy policy legally binding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AI-generated privacy policy serves as a comprehensive starting point that covers most legal requirements. However, it should be reviewed by a legal professional before publication to ensure it fully complies with laws in your jurisdiction and accurately reflects your specific business practices. Laws vary by country and industry, so professional review is recommended for complete legal protection.",
          },
        },
        {
          "@type": "Question",
          name: "How often should I update my privacy policy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You should update your privacy policy whenever you make significant changes to how you collect or use data. This includes: adding new third-party services or integrations, changing data retention practices, implementing new features that collect data, or when laws change. It's best practice to review your policy at least annually and update your users when major changes occur.",
          },
        },
      ],
    },
  ],
};

export default function AIPrivacyPolicyGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-20">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-full">
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">AI-Powered Tool</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              AI Privacy Policy Generator
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              Generate a comprehensive, GDPR-compliant privacy policy tailored to your website using AI. Just describe
              your site and we'll handle the rest.
            </p>
          </div>

          {/* Interactive Form Component */}
          <PrivacyPolicyForm />

          {/* Warning */}
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900 rounded-xl p-6 mb-16">
            <p className="text-sm text-yellow-900 dark:text-yellow-200">
              <strong>Disclaimer:</strong> This AI-generated privacy policy is a starting point. While it's tailored to
              your description, you should have it reviewed by a legal professional to ensure compliance with all
              applicable laws and regulations in your jurisdiction.
            </p>
          </div>

          {/* Why Privacy Policies Matter Section */}
          <div className="mb-16 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Why Privacy Policies Matter</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              A privacy policy is more than a legal requirement—it's a fundamental part of building trust with your
              users. It transparently explains how you collect, use, and protect personal information, giving users
              control over their data and demonstrating your commitment to privacy.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              Without a clear privacy policy, users won't know what happens to their data, which erodes trust and can
              expose your business to legal liability. In regulated markets like the EU and California, a privacy policy
              is legally mandatory if you collect any personal information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Legal Compliance</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Meet requirements of GDPR, CCPA, and other privacy laws to avoid fines and penalties.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">User Trust</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Transparency builds confidence and demonstrates your commitment to protecting user privacy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Business Protection</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Set clear expectations about data handling practices to reduce liability exposure.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">User Rights</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Inform users of their rights to access, correct, and delete their personal data.
                </p>
              </div>
            </div>
          </div>

          {/* GDPR & CCPA Compliance Section */}
          <div className="mb-16 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">GDPR & CCPA Compliance</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  GDPR (General Data Protection Regulation)
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  The European Union's data protection regulation that applies to any website serving EU residents.
                </p>
                <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Transparent data collection practices</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Explicit user consent required</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>User rights: access, correction, deletion</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Data Protection Officer may be required</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Fines up to 20M or 4% of revenue</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  CCPA (California Consumer Privacy Act)
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  US privacy law that applies to companies collecting data from California residents.
                </p>
                <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Right to know what data is collected</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Right to delete personal information</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Right to opt-out of data sales</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Non-discrimination for exercising rights</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Fines up to $7,500 per violation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Required Sections Section */}
          <div className="mb-16 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              Required Privacy Policy Sections
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              A comprehensive privacy policy should include these essential sections to meet legal requirements and
              inform users:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Introduction & Scope</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Overview of the policy, which organizations it covers, and when it was last updated.
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Information Collected</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Detailed list of all personal data types you collect (emails, IP addresses, cookies, etc.).
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">How We Use Your Data</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Explain purposes for data collection (marketing, analytics, service improvement, etc.).
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Data Sharing & Third Parties</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Who you share data with (payment processors, analytics providers, marketing platforms).
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">User Rights & Choices</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  How users can access, correct, delete, or withdraw consent from their data.
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Data Retention</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  How long you keep personal data and why, then how it's securely deleted.
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Cookies & Tracking</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Types of cookies used, third-party tracking, and how users can control tracking.
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Data Security</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Security measures you take to protect personal data from unauthorized access.
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Children's Privacy</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  How you handle data from users under 13 (or other age limits in your region).
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Policy Changes</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  How you'll notify users when the policy changes and when changes take effect.
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Contact Information</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  How users can contact you about privacy concerns or exercise their rights.
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-green-200 dark:border-green-900/30">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Legal Basis (GDPR)</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Your legal basis for processing data (consent, contract, legal obligation, etc.).
                </p>
              </div>
            </div>
          </div>

          {/* Legal Considerations Section */}
          <div className="mb-16 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              Legal Considerations & Best Practices
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">Legal Review Recommended</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Have a lawyer review your privacy policy before publishing. While this AI tool generates a strong
                  starting point, only a legal professional can ensure full compliance with laws in your jurisdiction.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">Jurisdiction Matters</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Privacy laws vary by country and state. If you serve users in multiple regions (EU, California,
                  Canada, etc.), your policy must address all applicable requirements.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">Accuracy Is Critical</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Your privacy policy must accurately reflect your actual practices. Don't claim you don't collect data
                  if you do, or promise data deletion if you won't deliver. Inaccuracies can lead to legal violations.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">Regular Updates</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  When you change how you collect or use data, update your policy. This might happen when adding
                  analytics, integrating new services, or changing retention practices.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">Consent Management</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Under GDPR, you need explicit consent for non-essential tracking. Implement a consent banner and
                  record when users agree to your policy.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">Third-Party Services</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Disclose all third parties that access user data (analytics, payment processors, CRM tools). You may
                  need data processing agreements with these vendors.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="bg-neutral-100/50 dark:bg-neutral-800/20 backdrop-blur-sm border border-neutral-300/50 dark:border-neutral-800/50 rounded-xl overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    Do I need a privacy policy for my website?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Yes, in most cases. It's legally required if you collect personal data (email, cookies, IP
                    addresses), operate in the EU under GDPR, operate in California under CCPA, or use analytics. Even
                    if not required, a privacy policy builds user trust and demonstrates transparency.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What is GDPR and do I need to comply?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    GDPR (General Data Protection Regulation) is EU privacy law. You must comply if you have users in
                    the EU, regardless of where your business is located. Key requirements: collect data with consent,
                    explain how you use it, let users access/delete their data, and implement security measures.
                    Violations can result in fines up to 20 million euros or 4% of revenue.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    What sections should my privacy policy include?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Essential sections include: Introduction, Information We Collect, How We Use Your Data, Who We Share
                    Data With, Your Rights, Data Retention, Cookies & Tracking, Data Security, Children's Privacy,
                    Policy Changes, and Contact Information. Our generator includes all these based on your specific
                    business description.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    How is this different from a template generator?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Our AI-powered tool understands your specific business description and generates a customized policy
                    addressing your unique use case. It's more comprehensive and tailored than a simple template, and
                    automatically includes relevant sections based on what you describe about your website (e-commerce,
                    SaaS, blog, etc.).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    Is an AI-generated privacy policy legally binding?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    The generated policy is a comprehensive starting point based on common legal requirements. However,
                    you should always have a lawyer review it before publishing to ensure full compliance with laws in
                    your jurisdiction and that it accurately reflects your actual data practices.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-b border-neutral-300/50 dark:border-neutral-800/50">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    Why does the generated policy mention Rybbit?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    If you use analytics on your site, you need to disclose it in your privacy policy. We include a
                    section about Rybbit's privacy-focused, cookieless analytics as an example of responsible data
                    collection that respects user privacy. Replace this with your actual analytics provider.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="px-6 py-4 text-base font-medium hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                    How often should I update my privacy policy?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-neutral-700 dark:text-neutral-300">
                    Update whenever you make significant changes to how you collect or use data. This includes adding
                    new services, changing data retention practices, implementing new features, or when relevant laws
                    change. It's best practice to review your policy annually and notify users of material changes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Privacy-first analytics with Rybbit
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              No cookies, no tracking, full GDPR compliance. Get powerful analytics without compromising your users'
              privacy. Get started for free with up to {DEFAULT_EVENT_LIMIT.toLocaleString()} events per month.
            </p>
            <TrackedButton
              href="https://app.rybbit.io/signup"
              eventName="signup"
              eventProps={{ location: "ai_privacy_policy_generator_cta" }}
              className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-10 py-4 text-lg rounded-lg shadow-lg shadow-emerald-900/20 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Start tracking for free
            </TrackedButton>
          </div>
        </div>
      </div>
    </>
  );
}
