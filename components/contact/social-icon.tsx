import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

interface SocialIconProps {
  name: string;
  size: number;
}

export function SocialIcon({ name, size }: SocialIconProps) {
  switch (name) {
    case "Instagram":
      return <FaInstagram size={size} />;
    case "Twitter":
      return <FaTwitter size={size} />;
    case "LinkedIn":
      return <FaLinkedin size={size} />;
    case "GitHub":
      return <FaGithub size={size} />;
    default:
      return null;
  }
}
