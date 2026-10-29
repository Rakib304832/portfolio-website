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
  name: "Rakib Hasan",
  firstName: "Rakib",
  lastName: "Hasan",
  initials: "RH",
  designation: "Frontend Developer",
  roles: [
    "Frontend Developer",
    "React & Next.js Specialist",
    "UI Engineer",
    "Performance Nerd",
  ],
  tagline:
    "I design and build fast, accessible interfaces that make complex products feel simple.",
  heroIntro:
    "Frontend developer from Dhaka who turns ambitious ideas into polished, production-ready experiences. Currently focused on React, Next.js, and design systems that scale.",
  availability: "Open to frontend roles & freelance work",
  location: "Dhaka, Bangladesh",
  timezone: "GMT+6",
  email: "hello@rakibhasan.dev",
  phone: "+880 1712 345678",
  phoneHref: "+8801712345678",
  whatsapp: "+880 1712 345678",
  whatsappHref: "8801712345678",
  resumeUrl: "/resume.pdf",
  photo: "/images/profile.png",
  photoAlt: "Portrait of Rakib Hasan, frontend developer",
  siteUrl: "https://rakibhasan.dev",
  socials: [
    {
      label: "GitHub",
      handle: "@rakibhasan",
      href: "https://github.com/rakibhasan",
      icon: "github",
    },
    {
      label: "LinkedIn",
      handle: "in/rakibhasan",
      href: "https://linkedin.com/in/rakibhasan",
      icon: "linkedin",
    },
    {
      label: "X",
      handle: "@rakibhasan",
      href: "https://x.com/rakibhasan",
      icon: "x",
    },
    {
      label: "Facebook",
      handle: "rakibhasan",
      href: "https://facebook.com/rakibhasan",
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
    { value: "4+", label: "Years building for the web" },
    { value: "25+", label: "Projects shipped end to end" },
    { value: "12+", label: "Technologies in the toolbox" },
  ],
} as const;

export const contactChannels = [
  {
    id: "email",
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Best for detailed briefs and full-time roles.",
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
