export type SocialIcon =
  | "github"
  | "linkedin"
  | "x"
  | "facebook"
  | "whatsapp";

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: SocialIcon;
};

export type NavItem = {
  id: string;
  label: string;
};

export const siteConfig = {
  name: "Rakib",
  firstName: "Rakib",
  initials: "R",
  designation: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "React & Next.js Developer",
    "Node.js & MongoDB Developer",
    "CS Student & Builder",
  ],
  tagline:
    "Full-stack developer building complete web products with React, Next.js, Node.js, and MongoDB.",
  heroIntro:
    "I'm a full-stack developer from Dinajpur, Bangladesh. I build complete web products — from the database and API to the interface people actually use — with React, Next.js, Node.js, and MongoDB.",
  availability: "Open to full-stack roles & freelance work",
  location: "Dinajpur, Bangladesh",
  timezone: "GMT+6",
  email: "h.rakib0000000000@gmail.com",
  phone: "+880 1625 672901",
  phoneHref: "+8801625672901",
  whatsapp: "+880 1303 839198",
  whatsappHref: "8801303839198",
  resumeUrl: "/resume.pdf",
  photo: "/images/profile.png",
  photoAlt: "Portrait of Rakib, full-stack developer",
  siteUrl: "https://rakib-portfolio.netlify.app",
  socials: [
    {
      label: "GitHub",
      handle: "@Rakib304832",
      href: "https://github.com/Rakib304832",
      icon: "github",
    },
    {
      label: "X",
      handle: "@HRaki46262",
      href: "https://x.com/HRaki46262",
      icon: "x",
    },
    {
      label: "Facebook",
      handle: "rakib.fatim",
      href: "https://www.facebook.com/rakib.fatim",
      icon: "facebook",
    },
  ] satisfies SocialLink[],
  nav: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ] satisfies NavItem[],
  stats: [
    { value: "4", label: "Projects shipped & live" },
    { value: "10+", label: "Technologies in the stack" },
    { value: "3rd", label: "Semester, CS diploma" },
  ],
} as const;

export const contactChannels = [
  {
    id: "email",
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Best for full-stack roles, freelance projects, and detailed briefs.",
  },
  {
    id: "phone",
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
    description: "Weekdays, 10:00 – 19:00 GMT+6.",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: siteConfig.whatsapp,
    href: `https://wa.me/${siteConfig.whatsappHref}`,
    description: "Fastest way to reach me for quick questions.",
  },
] as const;
