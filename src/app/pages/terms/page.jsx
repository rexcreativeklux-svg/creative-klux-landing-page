import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Link from 'next/link';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
           
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">             

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
                    <p className="text-gray-600">Last updated: November 13, 2025</p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            By accessing and using Creative Klux, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Permission is granted to temporarily download and use Creative Klux for personal or commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Modify or copy the materials</li>
                            <li>Use the materials for any commercial purpose without proper licensing</li>
                            <li>Attempt to decompile or reverse engineer any software</li>
                            <li>Remove any copyright or other proprietary notations</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            You are responsible for safeguarding your account password and for any activities or actions under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Creative Klux and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without prior written consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Content</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our Service allows you to create, post, store, and share content. You retain all rights in, and are solely responsible for, the content you post on Creative Klux.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content in connection with operating and providing the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You may not use Creative Klux:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                            <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                            <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                            <li>To upload or transmit viruses or any other type of malicious code</li>
                            <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Subscription and Billing</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis (monthly or annually).
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            A valid payment method is required to process the payment for your subscription. You shall provide accurate and complete billing information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                        <p className="text-gray-700 leading-relaxed">
                            In no event shall Creative Klux, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have any questions about these Terms, please contact us at:{' '}
                            <a href="mailto:legal@creativeklux.com" className="text-blue-600 hover:text-blue-700 font-semibold">
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