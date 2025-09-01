import { Image, type ImageProps } from "@heroui/react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  const imageProps: ImageProps = {
    alt: "Logo",
    className: className ?? "h-5 w-5",
    src: "/favicon.ico"
  };

  return <Image {...imageProps} />;
}
