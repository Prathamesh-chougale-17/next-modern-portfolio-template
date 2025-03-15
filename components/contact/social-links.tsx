import { en } from "@/data/en";
import { SocialIcon } from "./social-icon";

interface SocialLink {
  name: string;
  url: string;
}

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-8">
      {en.contact.socials.links.map((social: SocialLink, index: number) => (
        <a
          key={index}
          href={social.url}
          className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon name={social.name} size={32} />
        </a>
      ))}
    </div>
  );
}
