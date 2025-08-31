import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useLocale } from "react-intlayer";

export default function LocaleSwitcher() {
  const { availableLocales, setLocale } = useLocale();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isIconOnly
          radius='full'
          size='sm'
          variant='light'
        >
          <Icon
            className='h-4 w-4'
            icon='lucide:globe'
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Dynamic Actions'>
        {availableLocales.map((locale) => (
          <DropdownItem
            key={locale}
            onPress={() => setLocale(locale)}
          >
            {locale.toUpperCase()}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
