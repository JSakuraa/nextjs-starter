"use client";

import { useRouter } from "next/navigation";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    // @ts-expect-error
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
