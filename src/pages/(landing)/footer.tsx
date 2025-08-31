import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useIntlayer } from "react-intlayer";

import { SOCIAL_LINKS } from "~/constants";

export default function Footer() {
  const content = useIntlayer("footer");

  const footerLinks = {
    company: [
      { href: "/", label: content.links.home },
      { href: "/about", label: content.links.about },
      { href: "/projects", label: content.links.projects },
      { href: "/contact", label: content.links.contact }
    ],
    social: SOCIAL_LINKS.map((social) => ({
      href: social.href,
      icon: social.icon,
      label: social.name
    }))
  };
  return (
    <footer className='border-divider bg-background border-t'>
      <div className='mx-auto max-w-6xl px-6 py-12'>
        <div className='grid gap-8 md:grid-cols-4'>
          {/* Brand Section */}
          <div className='md:col-span-2'>
            <h3 className='mb-4 text-xl font-bold'>{content.name}</h3>
            <p className='text-default-600 mb-4 max-w-sm'>{content.about}</p>
            <p className='text-default-500 text-sm'>{content.availability}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='mb-4 font-semibold'>{content.quickLinks}</h4>
            <ul className='space-y-2'>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    color='foreground'
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className='mb-4 font-semibold'>{content.connect}</h4>
            <div className='flex flex-col gap-3'>
              {footerLinks.social.map((social) => (
                <Link
                  color='foreground'
                  href={social.href}
                >
                  <Icon
                    className='mr-2 inline-block h-5 w-5'
                    icon={social.icon}
                  />
                  <span>{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-divider mt-8 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between'>
          <p className='text-default-500 text-sm'>{content.copyright}</p>
          <div className='flex items-center gap-4'>
            <Link
              className='text-default-500 hover:text-primary text-sm transition-colors'
              href='#'
            >
              {content.privacy}
            </Link>
            <Link
              className='text-default-500 hover:text-primary text-sm transition-colors'
              href='#'
            >
              {content.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
