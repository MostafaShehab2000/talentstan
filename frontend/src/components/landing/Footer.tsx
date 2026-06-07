import Link from "next/link";

const footerLinks = {
  Platform: ["For Facilities", "For Professionals", "Pricing", "AI Matching", "Workforce Analytics"],
  Company: ["About Us", "Careers", "Press", "Partners", "Contact"],
  Resources: ["Documentation", "API Reference", "Status", "Changelog", "Blog"],
  Legal: ["Privacy Policy", "Terms of Service", "HIPAA Compliance", "Cookie Policy"],
};

export function Footer() {
  return (
    <footer className="bg-[#0A2218] text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-6 mb-14">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F766E]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 7v5c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V7L12 2z" fill="white" fillOpacity="0.3"/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">TalentStan</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              The Enterprise Healthcare Workforce Marketplace. Liquidity, precision, and trust at scale across the MENA region.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} TalentStan Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <span>🌍 Available in 6 MENA Countries</span>
            <span>·</span>
            <span>HIPAA & PDPL Compliant</span>
            <span>·</span>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
