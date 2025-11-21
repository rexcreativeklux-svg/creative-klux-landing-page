import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Link from 'next/link';

export default function RefundPolicy() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Refund Policy</h1>
                    <p className="text-gray-600">Last updated: November 14, 2025</p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 space-y-10">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Our 30-Day Money-Back Guarantee</h2>
                        <p className="text-gray-700 leading-relaxed">
                            At <strong>Creative Klux</strong>, your satisfaction is our priority. We offer a <strong>no-questions-asked 30-day refund policy</strong> on all paid subscriptions and digital products.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-3">
                            If you're not completely satisfied within the first 30 days of your purchase, simply contact us and we'll issue a <strong>full refund</strong> — no hassle, no hidden fees.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Free Plan</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our Free Forever plan requires no payment, so no refunds are applicable. You can cancel your free account anytime with zero charges.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Paid Subscriptions (Creator Plus, Business)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            All paid plans come with our <strong>30-day money-back guarantee</strong>:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li><strong>Full refund within 30 days</strong> of initial purchase or renewal</li>
                            <li>Applies to both <strong>monthly</strong> and <strong>annual</strong> subscriptions</li>
                            <li>No prorating required — you get <strong>100% back</strong> if within 30 days</li>
                            <li>After 30 days, standard cancellation applies (no further charges, but no refund)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Digital Products & Templates</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            One-time purchases (templates, assets, design kits) are covered by the same 30-day guarantee:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li><strong>Full refund within 30 days</strong> if you’re not satisfied — even if downloaded</li>
                            <li>Custom or personalized digital products are <strong>non-refundable</strong> after delivery</li>
                            <li>Technical defects are eligible for refund or replacement anytime</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How to Request a Refund</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Getting your refund is simple:
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                            <li>Email us at <a href="mailto:refunds@creativeklux.com" className="text-blue-600 hover:text-blue-700 font-semibold">refunds@creativeklux.com</a></li>
                            <li>Include your <strong>account email</strong> and <strong>order number</strong></li>
                            <li>Let us know why you're requesting a refund (optional)</li>
                            <li>Receive confirmation and refund within <strong>3–5 business days</strong></li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Refund Processing</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Approved refunds are processed within <strong>3–5 business days</strong> and returned to your original payment method. Depending on your bank or card issuer, it may take up to <strong>10 additional days</strong> to appear in your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Non-Refundable Cases</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Refunds will not be issued if:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>You violate our <Link href="/pages/terms" className="text-blue-600 hover:text-blue-700 font-semibold">Terms of Service</Link></li>
                            <li>Your account was suspended due to policy violations</li>
                            <li>Fraudulent activity or abuse of the refund system is detected</li>
                            <li>More than 30 days have passed since purchase</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Need Help?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Questions about refunds or eligibility? We're here to help.  
                            Email us at{' '}
                            <a href="mailto:refunds@creativeklux.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                                refunds@creativeklux.com
                            </a>
                            {' '}— we respond within 24 hours.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
}