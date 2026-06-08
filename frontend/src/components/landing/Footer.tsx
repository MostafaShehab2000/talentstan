import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Platform: ["How it Works", "Dynamic Pricing", "Credential Guard", "Workforce Analytics"],
  Marketplace: ["Browse Shifts", "Browse Facilities", "Market Data", "Live Ticker"],
  Professionals: ["For Doctors", "For Nurses", "For Allied Health", "Registration"],
  Facilities: ["For Hospitals", "For Clinics", "Post a Shift", "Enterprise Hub"],
  Enterprise: ["Strategic Partners", "API Integration", "Custom SLA", "Sales"],
  Resources: ["Documentation", "Case Studies", "Webinars", "Blog"],
  Developers: ["API Reference", "SDKs", "Webhooks", "Status"],
  Investors: ["Financials", "Press Releases", "Events", "Governance"],
  Media: ["Press Kit", "Brand Assets", "Newsroom", "Contact PR"],
  TrustCenter: ["Security", "Compliance", "HIPAA", "PDPL"],
  Careers: ["Open Roles", "Life at TalentStan", "Benefits", "University"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Guidelines"],
};

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-[#F3F4F6]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Section */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-3 shrink-0 mb-6">
            <div className="relative w-[150px] h-[40px]">
              <Image 
                src="/logo.png" 
                alt="TalentStan Logo" 
                fill 
                className="object-contain"
              />
            </div>
          </Link>
          <p className="text-sm font-medium text-[#6B7280] max-w-sm">
            The Digital Nation of Healthcare Talent. Connecting world-class facilities with verified medical professionals.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#021A18] mb-4">
                {category === 'TrustCenter' ? 'Trust Center' : category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-xs font-medium text-[#6B7280] hover:text-[#0F766E] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#F3F4F6] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-[#9CA3AF]">
            Copyright © {new Date().getFullYear()} TalentStan Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs font-medium text-[#9CA3AF]">United States</span>
            <span className="text-xs font-medium text-[#9CA3AF]">Saudi Arabia</span>
            <span className="text-xs font-medium text-[#9CA3AF]">UAE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
