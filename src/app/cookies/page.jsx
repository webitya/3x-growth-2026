export const metadata = {
    title: "Cookie Policy - 3x Growth Consulting",
    description: "Cookie Policy for 3x Growth Consulting - How we use cookies and tracking technologies.",
};

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/40 shadow-xl p-8 md:p-12">
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Cookie Policy</h1>
                    <p className="text-sm text-slate-500 mb-8">Last updated: December 7, 2025</p>

                    <div className="prose prose-slate max-w-none space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. What Are Cookies?</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Types of Cookies We Use</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Essential Cookies</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Analytics Cookies</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        We use analytics cookies to understand how visitors interact with our website. This helps us improve our content and user experience. We may use Google Analytics for this purpose.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Functional Cookies</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Marketing Cookies</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        These cookies track your browsing habits to deliver advertising more relevant to you and your interests.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. How We Use Cookies</h2>
                            <p className="text-slate-600 leading-relaxed mb-3">We use cookies to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                <li>Keep you signed in to your account</li>
                                <li>Understand and save your preferences for future visits</li>
                                <li>Compile aggregate data about site traffic and interactions</li>
                                <li>Improve our website and services</li>
                                <li>Deliver personalized content and advertisements</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Third-Party Cookies</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We may use third-party services such as Google Analytics, which may set their own cookies to track user behavior. These third parties have their own privacy policies and cookie policies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Managing Cookies</h2>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                You can control and manage cookies in various ways:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                <li>Most browsers allow you to refuse or accept cookies</li>
                                <li>You can delete cookies that have already been set</li>
                                <li>You can set your browser to notify you when cookies are being set</li>
                                <li>You can opt-out of third-party cookies through browser settings</li>
                            </ul>
                            <p className="text-slate-600 leading-relaxed mt-3">
                                Please note that disabling cookies may affect the functionality of our website and limit your user experience.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Cookie Duration</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Some cookies are session cookies (deleted when you close your browser), while others are persistent cookies (remain on your device for a set period or until you delete them).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Updates to This Policy</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Contact Us</h2>
                            <p className="text-slate-600 leading-relaxed">
                                If you have any questions about our use of cookies, please contact us at:
                            </p>
                            <div className="mt-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <p className="text-slate-700"><strong>Email:</strong> contact@salessyllabus.com</p>
                                <p className="text-slate-700"><strong>Phone:</strong> +91 6200207379</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
