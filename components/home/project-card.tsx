import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types/home";

export function ProjectCard({
  title,
  description,
  tags,
  githubLink,
  liveLink,
}: Project) {
  return (
    <Card className="flex flex-col cursor-pointer h-full transition-all hover:shadow-lg hover:border-primary">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="outline" size="sm">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Github className="h-4 w-4" /> Code
          </a>
        </Button>
        {liveLink && (
          <Button asChild variant="default" size="sm">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <ExternalLink className="h-4 w-4" /> Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
