export const metadata = {
  title: "Terms of Service | 3x Growth",
  description: "Our terms of service and conditions of use.",
}

export default function TermsOfService() {
  return (
    <section className="pt-32 pb-16">
      <div className="section-container max-w-4xl mx-auto">
        <h1 className="heading-md mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) from our
              website for personal, non-commercial transitory viewing only.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Disclaimer</h2>
            <p>
              The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or
              implied, and hereby disclaim and negate all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Limitations</h2>
            <p>
              In no event shall 3x Growth Consulting or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on our website could include technical, typographical, or photographic errors. We
              do not warrant that any of the materials on our website are accurate, complete, or current.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Links</h2>
            <p>
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of
              any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any
              such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Modifications</h2>
            <p>
              We may revise these terms of service for our website at any time without notice. By using this website,
              you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India, and you
              irrevocably submit to the exclusive jurisdiction of the courts located in India.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
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
