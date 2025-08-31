import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { IntlayerProvider } from "react-intlayer";
import { Outlet } from "react-router";

import { composeProviders } from "~/utils/compose-providers";

const AppProviders = composeProviders(
  ({ children }) => (
    <ThemeProvider
      attribute='class'
      enableSystem
    >
      {children}
    </ThemeProvider>
  ),

  ({ children }) => <IntlayerProvider>{children}</IntlayerProvider>,
  ({ children }) => <HeroUIProvider>{children}</HeroUIProvider>
);

export default function RootLayout() {
  return (
    <AppProviders>
      <Outlet />
    </AppProviders>
  );
}
