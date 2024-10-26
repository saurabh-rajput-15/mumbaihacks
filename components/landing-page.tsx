'use client';

import { Button } from '@/components/ui/button';
import { Brain, Zap, Users, Clock, Shield } from 'lucide-react';
import Link from 'next/link';

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center bg-gradient-to-b from-background to-muted">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Work Smarter with{' '}
          <span className="text-primary">AI-Powered Productivity</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mb-8">
          Boost your remote work productivity with AI insights, smart task management,
          and wellness tracking.
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to stay productive
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI Insights"
              description="Get personalized productivity recommendations based on your work patterns"
            />
            <FeatureCard
              icon={Clock}
              title="Smart Scheduling"
              description="Optimize your calendar with AI-powered meeting and task scheduling"
            />
            <FeatureCard
              icon={Users}
              title="Team Collaboration"
              description="Stay connected with your team through seamless async communication"
            />
            <FeatureCard
              icon={Shield}
              title="Wellness Tracking"
              description="Monitor and improve your work-life balance with smart reminders"
            />
            <FeatureCard
              icon={Zap}
              title="Automation"
              description="Automate repetitive tasks and focus on what matters most"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background border">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}