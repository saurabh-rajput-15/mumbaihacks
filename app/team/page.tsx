import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeamPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Team</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <TeamMember
                name="John Doe"
                role="Product Manager"
                avatar="/avatars/01.png"
                status="online"
              />
              <TeamMember
                name="Jane Smith"
                role="Developer"
                avatar="/avatars/02.png"
                status="offline"
              />
              <TeamMember
                name="Mike Johnson"
                role="Designer"
                avatar="/avatars/03.png"
                status="online"
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <ActivityItem
                avatar="/avatars/01.png"
                name="John Doe"
                action="completed"
                item="Project Planning"
                time="2 hours ago"
              />
              <ActivityItem
                avatar="/avatars/02.png"
                name="Jane Smith"
                action="updated"
                item="Homepage Design"
                time="4 hours ago"
              />
              <ActivityItem
                avatar="/avatars/03.png"
                name="Mike Johnson"
                action="commented on"
                item="Task #123"
                time="5 hours ago"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function TeamMember({
  name,
  role,
  avatar,
  status,
}: {
  name: string;
  role: string;
  avatar: string;
  status: "online" | "offline";
}) {
  return (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
      <div className={`ml-auto w-2 h-2 rounded-full ${
        status === "online" ? "bg-green-500" : "bg-gray-300"
      }`} />
    </div>
  );
}

function ActivityItem({
  avatar,
  name,
  action,
  item,
  time,
}: {
  avatar: string;
  name: string;
  action: string;
  item: string;
  time: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm">
          <span className="font-medium">{name}</span>{' '}
          <span className="text-muted-foreground">{action}</span>{' '}
          <span className="font-medium">{item}</span>
        </p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
}