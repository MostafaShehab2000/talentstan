import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-4 bg-slate-50 py-12">
        <div className="w-full max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
              <ShieldCheck className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Join TalentStan</h1>
            <p className="text-muted-foreground mt-2 max-w-sm">
              Create your lifelong digital healthcare identity and connect with top facilities.
            </p>
          </div>
          
          <Card className="border-border/50 shadow-xl shadow-slate-200/50">
            <CardHeader>
              <CardTitle>Professional Registration</CardTitle>
              <CardDescription>
                Please provide your official legal details as they appear on your ID.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Professional Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profession">Primary Profession</Label>
                  <select 
                    id="profession" 
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select your profession...</option>
                    <option value="physician">Physician / Doctor</option>
                    <option value="nurse">Registered Nurse</option>
                    <option value="pharmacist">Pharmacist</option>
                    <option value="technician">Medical Technician</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Create Password</Label>
                  <Input id="password" type="password" required />
                </div>

                <div className="pt-2">
                  <Button className="w-full h-11 text-base" type="submit">
                    Create Identity
                  </Button>
                </div>
              </form>
              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <Link href="/login" className="font-medium text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
