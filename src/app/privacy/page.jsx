export const metadata = {
  title: "Privacy Policy | 3x Growth",
  description: "Our privacy policy and data protection practices.",
}

export default function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-16">
      <div className="section-container max-w-4xl mx-auto">
        <h1 className="heading-md mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
            <p>
              3x Growth Consulting ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
              explains our data practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and email address from contact forms</li>
              <li>Phone number and company information</li>
              <li>Usage data through analytics</li>
              <li>Communication preferences</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries</li>
              <li>Send you updates and newsletters</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. Contact us at
              contact@salessyllabus.com to exercise these rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-4">
              Email: contact@salessyllabus.com
              <br />
              Phone: +91 6200207379
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
