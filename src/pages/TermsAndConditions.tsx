import Navigation from "@/components/Navigation";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms and Conditions – Compliance & Audit Support</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>By using our website or services, you agree to these Terms and Conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Provided</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Compliance audits for truck drivers regarding FMCSA HOS and ELD regulations</li>
              <li>Support and consulting for logbook review, ELD compliance, and regulatory readiness</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide accurate and complete information for audit purposes</li>
              <li>Use the services in compliance with FMCSA rules and regulations</li>
              <li>Maintain confidentiality of login credentials if applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitation of Liability</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We provide guidance and audits based on the information you supply</li>
              <li>We are not responsible for penalties resulting from inaccurate or incomplete information</li>
              <li>Our liability is limited to the fees paid for the services provided</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All content, logos, and materials on the website are our property</li>
              <li>Users may not reproduce, distribute, or use content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Termination of Services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We reserve the right to terminate services for users who violate these terms</li>
              <li>Termination does not absolve users from any fees due for services already provided</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Governing Law</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>These terms are governed by the laws of State of Florida, USA</li>
              <li>Any disputes will be resolved in the appropriate courts of State of Florida, USA</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We may revise these Terms and Conditions at any time</li>
              <li>Updates are effective immediately upon posting on the website</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;