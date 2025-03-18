export interface entype {
  leetcode_username: string;
  navItems: {
    title: string;
    href: string;
  }[];
  hero: {
    name: string;
    title: string;
    company: string;
    companyLink: string;
    description: string;
  };
  achievements: {
    title: string;
    description: string;
    icon: string;
  }[];
  projectsPage: {
    title: string;
    subtitle: string;
    description: string;
  };
  projects: {
    title: string;
    description: string;
    tags: string[];
    githubLink: string;
    liveLink?: string;
    image: string;
    featured: boolean;
  }[];
  about: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      skills: string[];
    };
    techSkills: {
      name: string;
      level: number;
      icon: string;
    }[];
    experiences: {
      title: string;
      company: string;
      period: string;
      description: string;
    }[];
    stats: {
      statItems: {
        label: string;
        value: string;
      }[];
      leetcodeRating: string;
    };
  };
  contact: {
    thoughtTitle: string;
    thoughtText: string;
    imageUrl: string;
    imageAlt: string;
    socials: {
      title: string;
      links: {
        name: string;
        url: string;
      }[];
    };
    form: {
      title: string;
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      subject: {
        label: string;
        placeholder: string;
      };
      message: {
        label: string;
        placeholder: string;
      };
      submit: string;
      success: string;
      error: string;
    };
  };
}
