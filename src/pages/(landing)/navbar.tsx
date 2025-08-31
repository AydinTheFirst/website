import {
  Navbar as HeroNavbar,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@heroui/react";
import React from "react";
import { useIntlayer } from "react-intlayer";

import LocaleSwitcher from "~/components/locale-switcher";
import { ThemeSwitcher } from "~/components/theme-switcher";
import { SITE_CONFIG } from "~/constants";

export default function Navbar() {
  const content = useIntlayer("navbar");
  const [, setIsMenuOpen] = React.useState(false);

  const navbarItems = [
    {
      href: "/",
      label: content.home
    },
    {
      href: "/about",
      label: content.about
    },
    {
      href: "/projects",
      label: content.projects
    },
    {
      href: "/contact",
      label: content.contact
    }
  ];

  return (
    <HeroNavbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label='Toggle Menu'
          className='sm:hidden'
        />
        <NavbarBrand className='font-bold text-inherit'>
          {SITE_CONFIG.name}
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className='hidden gap-4 sm:flex'
        justify='center'
      >
        {navbarItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              color='foreground'
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </NavbarContent>
      <NavbarMenu>
        {navbarItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              color='foreground'
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
}
