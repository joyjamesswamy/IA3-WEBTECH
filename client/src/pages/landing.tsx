import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, PieChart, Wallet, BarChart3, Shield, Smartphone } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b h-16 flex items-center px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold">ExpenseTracker</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" data-testid="button-login">Login</Button>
            </Link>
            <Link href="/register">
              <Button data-testid="button-get-started">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="min-h-[80vh] flex items-center px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Take Control of Your{" "}
              <span className="text-primary">Finances</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Track expenses, set budgets, and gain insights into your spending habits. 
              Make smarter financial decisions with powerful analytics and beautiful visualizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-hero-start">
                  Start Tracking Free
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto" data-testid="button-hero-login">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8 border border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-card rounded-md border">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Spent</p>
                    <p className="text-2xl font-bold font-mono">$2,847.50</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-card rounded-md border">
                    <p className="text-sm text-muted-foreground">Food</p>
                    <p className="text-lg font-bold font-mono">$523</p>
                  </div>
                  <div className="p-4 bg-card rounded-md border">
                    <p className="text-sm text-muted-foreground">Transport</p>
                    <p className="text-lg font-bold font-mono">$215</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Manage Your Money
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you understand and control your spending
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Smart Analytics</h3>
                <p className="text-muted-foreground">
                  Visualize your spending patterns with interactive charts and detailed breakdowns by category.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <PieChart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Budget Tracking</h3>
                <p className="text-muted-foreground">
                  Set monthly budgets for each category and get alerts when you're approaching your limits.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Secure & Private</h3>
                <p className="text-muted-foreground">
                  Your financial data is encrypted and secure. We never share your information with third parties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Mobile Friendly</h3>
                <p className="text-muted-foreground">
                  Access your expenses anywhere, anytime. Fully responsive design works on all devices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Insights & Trends</h3>
                <p className="text-muted-foreground">
                  Discover spending trends and patterns to help you make better financial decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Easy Tracking</h3>
                <p className="text-muted-foreground">
                  Add expenses in seconds with our streamlined interface. Tag and categorize with ease.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Take Control?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of users who are already managing their finances smarter
          </p>
          <Link href="/register">
            <Button size="lg" data-testid="button-final-cta">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

      <footer className="border-t py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ExpenseTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
