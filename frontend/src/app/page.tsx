import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, ShieldCheck, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 pb-24 bg-gradient-to-b from-primary/5 to-background">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          The Enterprise Healthcare <span className="text-primary">Workforce Platform</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          TalentStan connects premier hospitals with elite medical professionals. Scale your operations, manage shifts, and secure top talent across the MENA region.
        </p>
        <div className="mt-10 flex gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <Link href="/register">
            <Button size="lg" className="h-12 px-8 text-lg">Join the Network</Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg">Hospital Login</Button>
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg shadow-primary/5">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Verified Professionals</h3>
                <p className="text-muted-foreground">Every doctor and nurse undergoes rigorous credential verification and background checks.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg shadow-primary/5">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                  <Activity className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dynamic Shift Matching</h3>
                <p className="text-muted-foreground">Instantly fill emergency shifts with our AI-powered locum matching engine.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg shadow-primary/5">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise Scale</h3>
                <p className="text-muted-foreground">Built for hospital groups across Egypt and the GCC to manage their entire workforce.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t py-12 bg-slate-50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} TalentStan Enterprise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
