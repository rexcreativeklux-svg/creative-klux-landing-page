import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Refund Policy
          </h1>
          <p className="text-gray-600">Last updated: June 23, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Our 30-Day Money-Back Guarantee
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At <strong>Creativeklux</strong>, your satisfaction is our
              priority. We offer a{" "}
              <strong>no-questions-asked 30-day refund policy</strong> on all
              paid Creativeklux subscriptions.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              If you&apos;re not completely satisfied within the first 30 days
              of your purchase, simply contact us and we&apos;ll issue a{" "}
              <strong>full refund</strong> — no hassle, no hidden fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Free Plan
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Free plan requires no payment, so no refunds are applicable.
              You can cancel or delete your free account at any time with zero
              charges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Paid Subscriptions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All paid Creativeklux plans come with our{" "}
              <strong>30-day money-back guarantee</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong>Full refund within 30 days</strong> of initial purchase
                or renewal
              </li>
              <li>
                Applies to both <strong>monthly</strong> and{" "}
                <strong>annual</strong> subscriptions
              </li>
              <li>
                No prorating required — you get <strong>100% back</strong> if
                within 30 days
              </li>
              <li>
                After 30 days, standard cancellation applies — no further
                charges, but no refund for the current billing period
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Digital Products & Templates
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One-time purchases such as templates, asset packs, and design kits
              are covered by the same 30-day guarantee:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong>Full refund within 30 days</strong> if you&apos;re not
                satisfied — even if downloaded
              </li>
              <li>
                Custom or personalized digital products are{" "}
                <strong>non-refundable</strong> after delivery
              </li>
              <li>
                Technical defects are eligible for a refund or replacement at
                any time
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Third-Party Platform Charges
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Creativeklux allows you to connect and manage external advertising
              platforms including Meta Ads Manager, Google Ads, TikTok Ads,
              LinkedIn Campaign Manager, Snapchat Ads, and Pinterest Ads. Please
              note the following regarding charges from these platforms:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Ad spend on connected platforms (Meta, Google, TikTok, LinkedIn,
                Snapchat, Pinterest, etc.) is billed{" "}
                <strong>directly by those platforms</strong> to your payment
                method on file with them — not by Creativeklux
              </li>
              <li>
                Creativeklux has{" "}
                <strong>no control over and cannot refund</strong> any charges
                made by third-party advertising platforms
              </li>
              <li>
                For refunds or billing disputes related to ad spend, you must
                contact the respective platform directly
              </li>
              <li>
                Disconnecting a platform integration from Creativeklux does not
                automatically pause or cancel any active campaigns on that
                platform — you are responsible for managing campaign budgets
                within each ad platform
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. How to Request a Refund
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Requesting a refund is straightforward:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Email us at{" "}
                <a
                  href="mailto:refunds@creativeklux.com"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  refunds@creativeklux.com
                </a>
              </li>
              <li>
                Include your <strong>account email</strong> and{" "}
                <strong>order or transaction number</strong>
              </li>
              <li>
                Optionally, let us know why you&apos;re requesting a refund —
                your feedback helps us improve
              </li>
              <li>
                Receive a confirmation and refund within{" "}
                <strong>3–5 business days</strong>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Refund Processing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Approved refunds are processed within{" "}
              <strong>3–5 business days</strong> and returned to your original
              payment method. Depending on your bank or card issuer, it may take
              up to <strong>10 additional business days</strong> to appear in
              your account. We will send you a confirmation email once the
              refund has been initiated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Non-Refundable Cases
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refunds will not be issued in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                More than 30 days have passed since the original purchase date
              </li>
              <li>
                Your account was suspended or terminated due to violations of
                our{" "}
                <Link
                  href="/pages/terms"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                Fraudulent activity or abuse of the refund policy is detected
              </li>
              <li>
                The refund request relates to charges made by a connected
                third-party platform (Meta, Google, TikTok, etc.) rather than
                Creativeklux directly
              </li>
              <li>
                Custom or personalized digital products that have already been
                delivered
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Cancellations
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You may cancel your Creativeklux subscription at any time from
              your account settings. Cancellation stops future billing but does
              not automatically trigger a refund unless you are within the
              30-day guarantee window. Your access to paid features will
              continue until the end of your current billing period. Cancelling
              your Creativeklux account does not disconnect or pause any active
              campaigns running on connected third-party ad platforms — please
              manage those directly within each platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Need Help?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Questions about refunds, billing, or your eligibility? We&apos;re
              here to help. Email us at{" "}
              <a
                href="mailto:refunds@creativeklux.com"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                refunds@creativeklux.com
              </a>{" "}
              — we respond within 24 hours on business days.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
