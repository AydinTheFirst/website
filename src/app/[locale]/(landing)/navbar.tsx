import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import React from "react";
import { useIntlayer } from "react-intlayer";
import { useLocation } from "react-router";

import LocaleLink from "~/components/locale-link";
import LocaleSwitcher from "~/components/locale-switcher";
import ThemeSwitcher from "~/components/theme-switcher";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const content = useIntlayer("navbar");
  const { pathname } = useLocation();

  const menuItems = [
    { href: "/", label: content.items.home },
    { href: "/about", label: content.items.about },
    { href: "/projects", label: content.items.projects },
    { href: "/contact", label: content.items.contact },
  ];

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, setIsMenuOpen]);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as={LocaleLink} className="text-foreground" href="/">
          <p className="font-bold text-inherit">Halil Aydın</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <LocaleLink color="foreground" href={item.href}>
              {item.label}
            </LocaleLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <LocaleSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <LocaleLink color="foreground" href={item.href}>
              {item.label}
            </LocaleLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
