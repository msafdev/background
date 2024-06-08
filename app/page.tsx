"use client";

// Hooks
import { useRef, useState } from "react";
import { useTheme } from "next-themes";

// Sections
import Title from "@/app/_section/title";
import Footer from "@/app/_section/footer";

// Components
import Navbar from "@/components/common/navbar";
import Preview from "@/components/common/preview";

// Items
import { backgroundItems } from "@/components/common/background";

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
            <Preview
              key={index}
              setPreview={setPreview}
              containerRef={containerRef}
            >
              {item.component}
            </Preview>
          ))}
        </div>

        {/* Disclaimer, Footer */}
        <Footer />
      </main>
    </>
  );
}
