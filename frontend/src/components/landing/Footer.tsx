import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-4 lg:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold tracking-tighter">
                T
              </div>
              <span className="text-xl font-semibold tracking-tight text-foreground">
                TalentStan
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              The Enterprise Healthcare Workforce Marketplace. Liquidity, precision, and trust at scale.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">For Facilities</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">For Professionals</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Intelligence</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TalentStan Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
