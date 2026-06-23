import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: June 23, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Creativeklux. We respect your privacy and are committed
              to protecting your personal data. This Privacy Policy explains how
              we collect, use, store, and share information when you use our
              platform — including when you connect third-party social media
              accounts and advertising platforms to publish content and manage
              campaigns on your behalf.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect the following categories of data:
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              2.1 Information You Provide
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Identity Data — name, username, profile photo</li>
              <li>Contact Data — email address, phone number</li>
              <li>
                Billing Data — payment method details (processed securely via
                our payment provider; we do not store full card numbers)
              </li>
              <li>
                Brand Assets — logos, brand colors, fonts, and creative content
                you upload or generate
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              2.2 Data from Connected Third-Party Platforms
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              When you connect a social media or advertising account, we receive
              data from that platform limited to what is necessary to provide
              the features you enable. This may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>
                <strong>Facebook &amp; Instagram (Meta):</strong> Page list,
                page access tokens, Instagram Business account details, post
                engagement metrics (likes, comments, reach, impressions) on
                content published via Creativeklux
              </li>
              <li>
                <strong>Meta Ads Manager:</strong> Ad account IDs, campaign
                data, ad creative performance metrics, ad account spend data
              </li>
              <li>
                <strong>LinkedIn:</strong> Profile ID, connected company pages,
                post engagement data on content published via Creativeklux,
                LinkedIn Campaign Manager account and campaign data
              </li>
              <li>
                <strong>YouTube:</strong> Channel information, video upload
                status, and basic analytics on content published via
                Creativeklux
              </li>
              <li>
                <strong>Pinterest:</strong> Business account details, board
                list, pin performance data on content published via
                Creativeklux, Pinterest Ads account and campaign data
              </li>
              <li>
                <strong>Snapchat:</strong> Business account details, story and
                spotlight performance data, Snapchat Ads account and campaign
                data
              </li>
              <li>
                <strong>TikTok:</strong> Account details, video performance data
                on content published via Creativeklux, TikTok Ads account and
                campaign data
              </li>
              <li>
                <strong>X (Twitter):</strong> Account details and post
                performance data on content published via Creativeklux
              </li>
              <li>
                <strong>Google Ads:</strong> Ad account details, campaign
                performance data, asset upload status
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not access your personal inbox, private messages, friend or
              follower lists, contacts, or any data unrelated to publishing and
              campaign management.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              2.3 Automatically Collected Data
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Technical Data — IP address, browser type and version, device
                type, operating system
              </li>
              <li>
                Usage Data — pages visited, features used, session duration,
                clicks and interactions within the platform
              </li>
              <li>
                Log Data — server logs generated during your use of the platform
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the data we collect strictly to provide and improve the
              Creativeklux platform. Specific purposes include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Publishing content to your connected social media accounts and
                pages on your explicit instruction
              </li>
              <li>
                Creating, managing, and optimizing ad campaigns on connected
                advertising platforms at your direction
              </li>
              <li>
                Displaying engagement and performance analytics for content and
                campaigns you manage through the platform
              </li>
              <li>
                Managing your brand assets, workspace, and account settings
              </li>
              <li>Processing payments for your Creativeklux subscription</li>
              <li>
                Providing customer support and responding to your requests
              </li>
              <li>
                Detecting and preventing security incidents, fraud, or abuse
              </li>
              <li>
                Improving platform features through aggregate, anonymized usage
                analysis
              </li>
              <li>
                Sending transactional communications (account updates, billing
                notices, security alerts)
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not use data obtained from third-party platform APIs to
              serve advertising to you, and we do not sell your data or
              third-party platform data to any party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. How We Share Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, rent, or trade your personal data. We share data
              only in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong>Connected platforms:</strong> We transmit content and
                campaign data to third-party platforms (Meta, Google, LinkedIn,
                TikTok, etc.) on your behalf and at your instruction when you
                use publishing or ad management features.
              </li>
              <li>
                <strong>Service providers:</strong> We share data with trusted
                third-party service providers who assist in operating the
                platform (cloud hosting, payment processing, analytics), under
                strict confidentiality obligations.
              </li>
              <li>
                <strong>Legal compliance:</strong> We may disclose data if
                required by law, court order, or to protect the rights,
                property, or safety of Creativeklux, our users, or the public.
              </li>
              <li>
                <strong>Business transfers:</strong> In the event of a merger,
                acquisition, or sale of assets, your data may be transferred as
                part of that transaction, with notice provided to you.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Third-Party Platform API Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Data received from third-party platform APIs (including Meta,
              Google, LinkedIn, TikTok, Pinterest, Snapchat, X, and YouTube) is
              handled in compliance with the respective developer policies of
              those platforms, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Meta&apos;s Platform Terms and Developer Policies</li>
              <li>Google&apos;s API Services User Data Policy</li>
              <li>LinkedIn&apos;s API Terms of Use</li>
              <li>TikTok&apos;s Developer Terms of Service</li>
              <li>Pinterest&apos;s Developer Terms</li>
              <li>Snapchat&apos;s Developer Terms</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              API data is used exclusively to deliver the specific features
              enabled by your connected integrations. It is not used for any
              secondary purpose, including profiling, advertising targeting
              unrelated to your own campaigns, or training AI models.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may disconnect any third-party platform integration at any
              time from your Creativeklux account settings. Upon disconnection,
              we will cease accessing that platform&apos;s data. You may also
              revoke access directly through the third-party platform&apos;s app
              permissions settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal data only for as long as necessary to
              fulfill the purposes described in this policy, or as required by
              law. Specifically:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Account data is retained for the duration of your active account
                and deleted within 90 days of account closure upon request
              </li>
              <li>
                Content and creative assets you have generated or uploaded are
                retained until you delete them or close your account
              </li>
              <li>
                Third-party platform data received via API is retained only as
                long as needed to display analytics and manage active campaigns
              </li>
              <li>
                Billing records are retained as required by applicable financial
                regulations
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your
              data from unauthorized access, loss, or disclosure — including
              encrypted data transmission (TLS), secure token storage for
              third-party platform credentials, access controls limiting data
              access to authorized personnel, and regular security reviews.
              While we take all reasonable precautions, no method of
              transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Cookies and Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to maintain your
              session, remember your preferences, and collect aggregate usage
              analytics. You can control cookie settings through your browser.
              Disabling certain cookies may affect the functionality of the
              platform. We do not use third-party advertising cookies to track
              your activity across other websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Your Legal Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong>Access:</strong> Request a copy of the personal data we
                hold about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete data
              </li>
              <li>
                <strong>Erasure:</strong> Request deletion of your personal
                data, subject to legal obligations
              </li>
              <li>
                <strong>Portability:</strong> Request a machine-readable export
                of your data
              </li>
              <li>
                <strong>Objection:</strong> Object to processing of your data
                for certain purposes
              </li>
              <li>
                <strong>Restriction:</strong> Request that we limit how we
                process your data in certain circumstances
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Where processing is based on
                consent, withdraw it at any time without affecting prior
                processing
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:privacy@creativeklux.com"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                privacy@creativeklux.com
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Creativeklux is not directed at individuals under the age of 16.
              We do not knowingly collect personal data from children. If you
              believe a child has provided us with personal data, please contact
              us and we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable law. We will notify you of
              material changes by posting the updated policy on this page with a
              revised &quot;Last updated&quot; date. Your continued use of
              Creativeklux after any changes constitutes your acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy or how we
              handle your data — including data received from connected
              third-party platforms — please contact us at:{" "}
              <a
                href="mailto:privacy@creativeklux.com"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                privacy@creativeklux.com
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
