import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Achievement } from "@/types/home";
import { Trophy, Mic, Github } from "lucide-react";

function getIcon(iconName: string) {
  switch (iconName) {
    case "trophy":
      return <Trophy className="h-10 w-10 text-primary" />;
    case "mic":
      return <Mic className="h-10 w-10 text-primary" />;
    case "github":
      return <Github className="h-10 w-10 text-primary" />;
    default:
      return null;
  }
}

export function AchievementCard({ title, description, icon }: Achievement) {
  return (
    <Card className="transition-all cursor-pointer hover:shadow-lg hover:scale-105">
      <CardHeader className="flex flex-row items-center gap-4">
        {getIcon(icon)}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
