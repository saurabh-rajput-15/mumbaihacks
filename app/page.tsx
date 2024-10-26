import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Rocket, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Work Smarter with AI-Powered Productivity
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-xl text-muted-foreground mb-8">
            Boost your remote work productivity with intelligent task management,
            wellness tracking, and team collaboration tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mt-16">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Brain className="h-8 w-8 text-primary" />
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Smart Tasks
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              AI-powered task prioritization and intelligent deadline suggestions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Wellness
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              Track your work-life balance and get personalized recommendations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Rocket className="h-8 w-8 text-primary" />
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Automation
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              Streamline workflows with smart templates and auto-reporting
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Team Sync
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              Real-time updates and AI-powered meeting summaries
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}