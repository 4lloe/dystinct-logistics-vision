import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="py-8 px-6 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-bold">FAQ</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">
              <span className="text-cyber-gradient">Frequently Asked Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground/60 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-12">
            {/* General Services & Eligibility */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-cyber-gradient border-b border-border/50 pb-4">
                1. General Services & Eligibility
              </h2>
              
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">Who can request our support and audit services?</h3>
                  <p className="text-muted-foreground">Our services are available to truck drivers, owner-operators, and carriers operating in the U.S. transportation industry. According to <strong>FMCSA regulations (49 CFR Part 395)</strong>, all carriers must maintain accurate records of duty status (RODS). We provide independent review and support to ensure compliance.</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">Why should drivers or carriers use support services if they already have an ELD?</h3>
                  <p className="text-muted-foreground">An ELD records driving time automatically, but compliance requires more than data recording. Drivers must ensure records are accurate, certified, and supported by documentation. FMCSA (<strong>395.8 & 395.11</strong>) requires supporting documents, log certification, and proper edits. Our audits help detect errors before they become violations.</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">Can drivers who qualify for ELD exemptions also benefit from our services?</h3>
                  <p className="text-muted-foreground">Yes. Even exempt drivers must maintain accurate records of duty status if required by FMCSA. We help ensure exemptions are applied correctly and that alternative compliance methods (like paper logs) are error-free.</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">Why is independent audit support important for drivers?</h3>
                  <p className="text-muted-foreground">FMCSA audits and roadside inspections often reveal mistakes in logs, edits, or missing supporting documents. Independent support minimizes risks of penalties, out-of-service orders, and increased CSA scores.</p>
                </div>
              </div>
            </div>

            {/* ELD Compliance */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-cyber-gradient border-b border-border/50 pb-4">
                2. ELD (Electronic Logging Device) Compliance
              </h2>
              
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">What is an ELD device?</h3>
                  <p className="text-muted-foreground">An ELD is an electronic device that automatically records driving time and engine data, ensuring compliance with FMCSA's Hours of Service rules. (<strong>49 CFR 395.20</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">Who must comply with the ELD rule?</h3>
                  <p className="text-muted-foreground">Most drivers required to maintain RODS must use an ELD. Exceptions apply for short-haul operations, drivers operating pre-2000 vehicles, and certain driveaway-towaway operations. (<strong>395.8(a)(1)(iii)</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">What are the key design and performance standards for ELDs?</h3>
                  <p className="text-muted-foreground">FMCSA requires ELDs to meet specific technical standards for accuracy, tamper resistance, and standardized data transfer. (<strong>395.22</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">What documentation must be onboard the vehicle?</h3>
                  <p className="text-muted-foreground">Drivers must carry: ELD user manual, instruction sheet for data transfer, instruction sheet for reporting malfunctions, and supply of paper logs for at least 8 days (<strong>395.22(h)</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">What supporting documents must be kept, and for how long?</h3>
                  <p className="text-muted-foreground">Carriers must keep up to 8 supporting documents for each 24-hour period that verifies driver's activities (fuel receipts, bills of lading, etc.), retained for <strong>6 months</strong>. (<strong>395.11</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">What are driver responsibilities for reviewing and editing logs?</h3>
                  <p className="text-muted-foreground">Drivers must review records, edit only when accurate, and certify logs daily. Carriers cannot require certification of false information. (<strong>395.30 & 395.32</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">What about unidentified driver driving or logs?</h3>
                  <p className="text-muted-foreground">Carriers must assign unidentified driving records to the correct driver or annotate them as unassigned. (<strong>395.32(b)</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">Is real-time tracking required?</h3>
                  <p className="text-muted-foreground">No. FMCSA does not require real-time GPS tracking, only accurate RODS. (<strong>395.26(d)</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">What happens if the ELD malfunctions?</h3>
                  <p className="text-muted-foreground">Drivers must notify the carrier within 24 hours and reconstruct RODS on paper logs until the device is repaired or replaced (within 8 days). (<strong>395.34</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">Are there exemptions from using ELDs?</h3>
                  <p className="text-muted-foreground">Yes. Exemptions include: drivers who operate within the short-haul exception, drivers operating pre-2000 model year vehicles, and driveaway-towaway operations (<strong>395.8(a)(1)(iii)</strong>)</p>
                </div>
              </div>
            </div>

            {/* Hours of Service Compliance */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-cyber-gradient border-b border-border/50 pb-4">
                3. Hours of Service (HOS) Compliance
              </h2>
              
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">What are the Hours of Service (HOS) limits for property-carrying drivers?</h3>
                  <p className="text-muted-foreground"><strong>11-hour driving limit</strong>: maximum of 11 hours driving after 10 consecutive hours off duty; <strong>14-hour rule</strong>: cannot drive beyond the 14th consecutive hour after coming on duty; <strong>30-minute break</strong>: required after 8 cumulative hours of driving; <strong>60/70-hour rule</strong>: may not drive after 60/70 hours on duty in 7/8 consecutive days (<strong>395.3</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">How does the ELD help with HOS compliance?</h3>
                  <p className="text-muted-foreground">The ELD automatically records driving time and alerts drivers to approaching limits, reducing the risk of unintentional violations. (<strong>395.8 & 395.32</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">What happens if a driver exceeds HOS limits?</h3>
                  <p className="text-muted-foreground">Violations can result in fines, out-of-service orders, and negative impact on the carrier's CSA score. Consistent violations may trigger FMCSA audits. (<strong>395.13 & FMCSA enforcement policy</strong>)</p>
                </div>
              </div>
            </div>

            {/* FMCSA Audits & Inspections */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-cyber-gradient border-b border-border/50 pb-4">
                4. FMCSA Audits & Inspections
              </h2>
              
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">How do your audits help with FMCSA inspections?</h3>
                  <p className="text-muted-foreground">We verify that logs, ELD records, and supporting documents are consistent. This ensures readiness for compliance reviews and reduces risk of penalties. (<strong>395.11, 395.30</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">What happens if records are inconsistent or uncertified?</h3>
                  <p className="text-muted-foreground">FMCSA may issue violations, civil penalties, or place drivers out of service. Certified, accurate logs are mandatory. (<strong>395.8(e)</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">How do ELD and HOS rules intersect with FMCSA requirements?</h3>
                  <p className="text-muted-foreground">ELDs provide automated RODS, while HOS rules regulate driving hours. Both are enforced by FMCSA, and violations in either area can trigger audits or penalties. (<strong>395.3 & 395.8</strong>)</p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-cyber-gradient mb-3">How do ELD and logbook data help in audits?</h3>
                  <p className="text-muted-foreground">FMCSA inspectors use ELD data to cross-check driving time, HOS compliance, and supporting documents. Clean and accurate logs speed up inspections and protect against violations. (<strong>395.24 & 395.32</strong>)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;