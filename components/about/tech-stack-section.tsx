import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGithub,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

interface TechSkill {
  name: string;
  level: number;
  icon: string;
}

interface TechStackSectionProps {
  skills: TechSkill[];
}

export function TechStackSection({ skills }: TechStackSectionProps) {
  function getIconComponent(iconName: string) {
    const iconMap = {
      react: <FaReact className="h-8 w-8" />,
      typescript: <SiTypescript className="h-8 w-8" />,
      nextjs: <SiNextdotjs className="h-8 w-8" />,
      nodejs: <FaNodeJs className="h-8 w-8" />,
      tailwind: <SiTailwindcss className="h-8 w-8" />,
      python: <FaPython className="h-8 w-8" />,
      docker: <FaDocker className="h-8 w-8" />,
      aws: <FaAws className="h-8 w-8" />,
      database: <FaDatabase className="h-8 w-8" />,
      github: <FaGithub className="h-8 w-8" />,
    };

    return iconMap[iconName as keyof typeof iconMap] || null;
  }

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 tracking-tight">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <Card
            key={skill.name}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-center text-primary">
                {getIconComponent(skill.icon)}
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <h3 className="font-medium">{skill.name}</h3>
              <div className="flex justify-center mt-2 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-4 rounded-full ${
                      i < skill.level ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
