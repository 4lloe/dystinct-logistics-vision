import Navigation from "@/components/Navigation";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.location.href = '/'}
            className="text-cyber-gradient hover:text-cyber-gradient/80 p-0"
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>We respect your privacy. This policy explains how we collect, use, and protect personal information when you use our website or services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Name, email, phone number, and company (if applicable)</li>
              <li>Form submissions (service requests, contact forms)</li>
              <li>Usage data such as IP address, browser type, and pages visited</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To respond to inquiries or service requests</li>
              <li>To provide audit and compliance support services</li>
              <li>To send updates or important notifications related to our services</li>
              <li>To improve website functionality and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Sharing Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We do not sell or rent personal information</li>
              <li>We may share data with trusted service providers only to perform services on our behalf</li>
              <li>We may disclose information if required by law or regulatory authorities (e.g., FMCSA compliance purposes)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We implement industry-standard measures to protect your data</li>
              <li>Access to personal information is limited to authorized personnel only</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Access:</strong> You can request a copy of your personal data</li>
              <li><strong>Correction:</strong> You can request corrections to your information</li>
              <li><strong>Deletion:</strong> You can request deletion of your personal information</li>
              <li>Contact us to exercise any of these rights via the contact form or email</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies & Tracking</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We may use cookies to improve website functionality</li>
              <li>Cookies do not collect personally identifiable information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Privacy Policy</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We may update this policy periodically</li>
              <li>Updates are effective immediately upon posting on the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Email: info@distinctlog-ss.us</li>
              <li>Phone: +1 (331) 454-9901</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;