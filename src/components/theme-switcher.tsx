import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme, theme, themes } = useTheme();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          aria-label="Change Theme"
          isIconOnly
          radius="full"
          variant="bordered"
        >
          <Icon className="h-5 w-5" icon={getThemeIcon(theme ?? "system")} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {themes.map((theme, i) => (
          <DropdownItem
            key={i}
            onPress={() => setTheme(theme)}
            startContent={<Icon icon={getThemeIcon(theme)} />}
          >
            {getThemeName(theme)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

function getThemeIcon(theme: string) {
  switch (theme) {
    case "dark":
      return "mdi:moon-and-stars";
    case "light":
      return "mdi:white-balance-sunny";
    default:
      return "mdi:theme-light-dark";
  }
}

function getThemeName(theme: string) {
  switch (theme) {
    case "dark":
      return "Dark";
    case "light":
      return "Light";
    default:
      return "System";
  }
}
