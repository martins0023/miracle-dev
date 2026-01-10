'use client';

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/martins0023", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/miracle1oladapo", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border font-sans">
      <div className="container px-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Miracle Oladapo</h3>
            <p className="text-sm text-muted-foreground">
              Engineering digital experiences, one pixel at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/50 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Miracle Oladapo. Built with passion and lots of coffee.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
