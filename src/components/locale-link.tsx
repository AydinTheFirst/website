/* eslint-disable no-restricted-imports */

import { Link, type LinkProps } from "@heroui/react";
import { getLocalizedUrl } from "intlayer";
import { useLocale } from "react-intlayer";
import { Link as RouterLink } from "react-router";

export default function LocaleLink(props: LinkProps) {
  const { locale } = useLocale();

  const isExternal = (href: string) => {
    try {
      const url = new URL(href, location.href);
      return url.origin !== location.origin;
    } catch {
      return false;
    }
  };

  if (isExternal(props.href as string)) {
    return <Link {...props} />;
  }

  return (
    <Link
      {...props}
      as={RouterLink}
      href={getLocalizedUrl(props.href as string, locale)}
    />
  );
}
