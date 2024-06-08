"use client";

import { useRef, useState } from "react";

// Components
import Navbar from "@/components/common/navbar";
import Title from "@/app/_section/title";
import { backgroundItems } from "@/components/common/background";

import { useTheme } from "next-themes";
import Preview from "@/components/common/preview";
import Link from "next/link";

export default function Home() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const { theme, setTheme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* This is used as the container of the selected previews */}
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        {preview ? preview : null}
      </div>
      <main
        ref={containerRef}
        suppressHydrationWarning
        className="flex min-h-[100svh] flex-col items-center px-6 gap-y-24 md:gap-y-32 pb-16 md:pb-24"
      >
        {/* Navbar, Logo, Social Icons */}
        <Navbar />

        {/* Title, Badge, CTA Buttons */}
        <Title
          setTheme={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        />

        {/* Preview Cards */}
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 w-full max-w-5xl gap-3 md:gap-5">
          {backgroundItems.map((item, index) => (
            <Preview key={index} setPreview={setPreview} ref={containerRef}>
              {item.component}
            </Preview>
          ))}
        </div>

        {/* Disclaimer, Footer */}
        <div className="text-center text-xs text-muted-foreground max-w-sm gap-y-4 flex flex-col">
          <p>
            <span className="font-semibold">Disclaimer:</span> These snippets
            are inspired by{" "}
            <Link
              href={"https://bg.ibelick.com"}
              target="_blank"
              className="text-foreground hover:underline"
            >
              Julien Thibeaut's
            </Link>{" "}
            snippets.
          </p>
          <p>
            All of these snippets are intended to be used alongside{" "}
            <Link
              href={"https://ui.shadcn.com/themes"}
              target="_blank"
              className="text-foreground hover:underline"
            >
              shadcn-ui
            </Link>{" "}
            and{" "}
            <Link
              href={"https://www.npmjs.com/package/next-themes"}
              target="_blank"
              className="text-foreground hover:underline"
            >
              next-themes.
            </Link>
          </p>
          <code>Made with ❤️ by msafdev</code>
        </div>
      </main>
    </>
  );
}
