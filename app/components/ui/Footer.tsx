import { Github, Linkedin, Dribbble, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/anil-kn-4276a4189", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "hhttps://github.com/project-anil", label: "GitHub" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:anilkn5087@gmail.com", label: "Mail" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo/Name */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="text-primary text-xl">@</span>
            </div>
            <span className="text-xl">Anil K N</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-border w-full">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Anil K N. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
