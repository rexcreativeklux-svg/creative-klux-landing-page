import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-600">Last updated: June 23, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using Creativeklux, you accept and agree to be
              bound by these Terms and Conditions. If you do not agree to these
              terms, please do not use this service. These terms apply to all
              features of the platform, including AI creative generation, social
              media publishing, ad campaign management, and any third-party
              integrations you connect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Creativeklux is an AI-powered creative platform that enables users
              to generate, manage, and publish ad creatives, social media
              content, and branded design assets. The platform includes tools
              for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>AI-generated ad creatives and social media visuals</li>
              <li>
                Direct publishing to connected social media accounts and pages
              </li>
              <li>Managing and scheduling content across multiple platforms</li>
              <li>
                Creating and managing paid advertising campaigns via connected
                ad platforms
              </li>
              <li>Brand asset management including logos, colors, and fonts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Third-Party Platform Integrations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Creativeklux allows you to connect your accounts on third-party
              platforms including Facebook, Instagram, LinkedIn, YouTube,
              Pinterest, Snapchat, TikTok, X (Twitter), Google Ads, TikTok Ads,
              LinkedIn Campaign Manager, Snapchat Ads, Pinterest Ads, and Meta
              Ads Manager. By connecting these accounts, you authorize
              Creativeklux to:
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">
              3.1 Social Media Platforms
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>
                Access and display a list of your connected pages, profiles, and
                business accounts
              </li>
              <li>
                Publish posts, images, videos, reels, and stories to your pages
                and profiles on your behalf
              </li>
              <li>
                Read engagement metrics (likes, comments, shares, reach,
                impressions) on content published through Creativeklux
              </li>
              <li>
                Access your business profile information to identify the correct
                publishing destination
              </li>
              <li>
                Retrieve content you have previously published through the
                platform for editing or analytics purposes
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">
              3.2 Advertising Platforms
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>
                Access your ad accounts, campaigns, ad sets, and ad creatives
              </li>
              <li>
                Create, modify, and manage ad campaigns and creatives on your
                behalf
              </li>
              <li>
                Read campaign performance data including impressions, clicks,
                spend, and conversions
              </li>
              <li>
                Upload creative assets (images, videos) to your connected ad
                accounts
              </li>
              <li>
                Access billing and account information solely as required to
                manage campaign delivery
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">
              3.3 Scope of Access
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Creativeklux requests only the permissions necessary to perform
              the features you use. We do not access your personal inbox,
              private messages, contact lists, or any data beyond what is needed
              to deliver publishing and ad management functionality. You may
              revoke Creativeklux&apos;s access to any connected platform at any
              time, either through the Creativeklux integrations settings or
              directly through the third-party platform&apos;s own app
              permissions settings.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">
              3.4 Third-Party Platform Policies
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Your use of connected platforms is also governed by the respective
              terms and policies of those platforms (including Meta&apos;s Terms
              of Service, Google&apos;s Terms of Service, LinkedIn&apos;s User
              Agreement, TikTok&apos;s Terms of Service, and others). You are
              responsible for ensuring that the content you publish through
              Creativeklux complies with the policies of each platform to which
              you publish.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Use License
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subject to your compliance with these Terms, Creativeklux grants
              you a limited, non-exclusive, non-transferable license to access
              and use the platform for your personal or commercial creative and
              marketing purposes. Under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Resell, sublicense, or redistribute access to the platform or
                its features
              </li>
              <li>
                Attempt to decompile, reverse engineer, or extract the source
                code of the platform
              </li>
              <li>
                Use automated scripts, bots, or scrapers to interact with the
                platform outside of approved API access
              </li>
              <li>
                Remove any copyright or proprietary notices from platform
                materials
              </li>
              <li>
                Use the platform to publish content that violates the policies
                of any connected third-party platform
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. User Accounts
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you create an account with us, you must provide accurate,
              complete, and current information. You are responsible for
              maintaining the security of your account credentials and for all
              activity that occurs under your account, including actions taken
              through any connected third-party platform integrations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You must notify us immediately upon becoming aware of any
              unauthorized use of your account or any breach of security.
              Creativeklux is not liable for any loss or damage arising from
              unauthorized access to your account where you have failed to
              maintain adequate security of your credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Creativeklux platform, including its AI models, design tools,
              templates, interface, and original content (excluding content you
              create or upload), is the exclusive property of Creativeklux and
              its licensors. Our trademarks and brand assets may not be used
              without prior written consent. Creative assets you generate using
              the platform belong to you, subject to the license terms of any
              third-party AI models or asset libraries used in their creation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. User Content
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain full ownership of all content you create, upload, or
              publish through Creativeklux. You are solely responsible for
              ensuring that your content does not infringe on any third-party
              intellectual property rights and complies with all applicable laws
              and the policies of any platform to which you publish.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using the platform, you grant Creativeklux a limited,
              worldwide, non-exclusive, royalty-free license to store, process,
              and transmit your content solely as necessary to provide the
              service — including delivering content to connected social media
              and advertising platforms on your behalf.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Prohibited Uses
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not use Creativeklux to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Publish content that is unlawful, defamatory, harassing,
                discriminatory, or otherwise harmful
              </li>
              <li>
                Violate the advertising policies or community standards of any
                connected platform
              </li>
              <li>
                Infringe upon the intellectual property rights of any third
                party
              </li>
              <li>
                Run deceptive, misleading, or fraudulent advertising campaigns
              </li>
              <li>
                Upload or transmit malware, viruses, or any malicious code
              </li>
              <li>
                Attempt to gain unauthorized access to any platform, account, or
                system
              </li>
              <li>
                Use the platform in any way that violates applicable local,
                national, or international law
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Data and Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you connect third-party accounts, Creativeklux receives data
              from those platforms as permitted by your authorization. This data
              is used exclusively to provide the features you have enabled and
              is not sold to third parties. Data received from third-party
              platform APIs is handled in accordance with the applicable
              platform developer policies, including Meta&apos;s Platform Policy
              and Google&apos;s API Services User Data Policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For full details on how we collect, use, and protect your data,
              please review our{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Subscription and Billing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some features of Creativeklux are available on a subscription
              basis and are billed in advance on a recurring monthly or annual
              cycle. A valid payment method is required. You are responsible for
              providing accurate and complete billing information and for
              keeping that information current.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ad spend for campaigns run through connected advertising platforms
              (Meta Ads Manager, Google Ads, etc.) is billed directly by those
              platforms and is not collected by Creativeklux. You are solely
              responsible for managing your budget and spend on external ad
              platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend your account immediately, without
              prior notice or liability, if you breach these Terms or engage in
              activity that may harm Creativeklux, its users, or any connected
              third-party platform. Upon termination, your right to use the
              platform will cease immediately, and any pending scheduled posts
              or active campaigns managed through Creativeklux may be cancelled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Creativeklux, its directors, employees,
              partners, agents, suppliers, or affiliates be liable for any
              indirect, incidental, special, consequential, or punitive damages
              — including but not limited to loss of profits, data, ad spend, or
              business opportunities — arising from your use of the platform or
              any connected third-party service. Creativeklux is not liable for
              any actions taken by third-party platforms, including changes to
              their APIs, policies, or account restrictions that may affect your
              ability to publish or advertise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will
              notify you of significant changes by posting the updated Terms on
              this page and updating the &quot;Last updated&quot; date. Your
              continued use of Creativeklux after any changes constitutes your
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms or about how
              Creativeklux accesses and uses data from connected platforms,
              please contact us at:{" "}
              <a
                href="mailto:legal@creativeklux.com"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                legal@creativeklux.com
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
