import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { EmotionDetector } from "@/components/wellness/emotion-detector";

export default function WellnessPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Wellness</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Daily Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6,892</div>
            <Progress value={68} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Goal: 10,000 steps
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Focus Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4h 12m</div>
            <Progress value={75} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Goal: 6 hours
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Breaks Taken</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/5</div>
            <Progress value={60} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Recommended: 5 breaks
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Stress Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Low</div>
            <Progress value={30} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Based on activity patterns
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <EmotionDetector />
      </div>
    </div>
  );
}