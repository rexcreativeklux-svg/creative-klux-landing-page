import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50">
                <Header />
            
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-gray-600">Last updated: November 21, 2025</p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Welcome to Creative Klux. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we handle your personal data when you visit our website and tell you about your privacy rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Identity Data (name, username, profile information)</li>
                            <li>Contact Data (email address, telephone number)</li>
                            <li>Technical Data (IP address, browser type, device information)</li>
                            <li>Usage Data (how you use our website and services)</li>
                            <li>Marketing and Communications Data (your preferences for marketing)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use your personal data for the following purposes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>To provide and maintain our service</li>
                            <li>To notify you about changes to our service</li>
                            <li>To provide customer support</li>
                            <li>To gather analysis or valuable information to improve our service</li>
                            <li>To monitor the usage of our service</li>
                            <li>To detect, prevent and address technical issues</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Legal Rights</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>Request access to your personal data</li>
                            <li>Request correction of your personal data</li>
                            <li>Request erasure of your personal data</li>
                            <li>Object to processing of your personal data</li>
                            <li>Request restriction of processing your personal data</li>
                            <li>Request transfer of your personal data</li>
                            <li>Right to withdraw consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at:{' '}
                            <a href="mailto:privacy@creativeklux.com" className="text-blue-600 hover:text-blue-700 font-semibold">
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