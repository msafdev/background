import { Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Title = ({ setTheme }: { setTheme: () => void }) => {
  return (
    <div className="flex flex-col items-center max-w-md sm:max-w-3xl gap-y-3 sm:gap-y-4 md:gap-y-6">
      <div className="text-sm bg-gradient-to-b from-background to-accent font-medium font-mono text-muted-foreground hover:text-accent-foreground transition-all duration-300 ease-in-out px-4 shadow py-1.5 border rounded-full">
        Open sourced 🤖 on Github
      </div>

      <h1 className="w-full text-2xl leading-tight sm:text-3xl md:text-5xl font-semibold text-center bg-gradient-to-br from-foreground via-foreground to-muted inline-block text-transparent bg-clip-text py-2">
        Collection of Sleek
        <span className="inline-flex text-2xl sm:text-3xl md:text-5xl">
          Modern Background Snippets
        </span>
      </h1>

      <p className="w-full text-sm md:text-lg text-center text-muted-foreground max-w-sm sm:max-w-lg md:max-w-2xl font-medium mb-2">
        A collection of modern background snippets. Simply copy and paste into
        your projects. Built with{" "}
        <Link
          href={"https://tailwindcss.com/docs"}
          target="_blank"
          className="text-foreground hover:underline"
        >
          Tailwind CSS
        </Link>{" "}
        and{" "}
        <Link
          href={"https://ui.shadcn.com/themes"}
          target="_blank"
          className="text-foreground hover:underline"
        >
          Shadcn-ui
        </Link>{" "}
        theme.
      </p>

      <div className="flex items-center gap-x-4">
        <Button onClick={setTheme} className="shadow-btn border-b-2">
          Change theme
        </Button>
        <Button
          variant="outline"
          className="shadow-btn border-0 border-b-2"
          asChild
        >
          <Link href="https://trakteer.id/msafdev" target="_blank">
            <Gem className="w-3 h-3 mr-2 inline-block" />
            Donate
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Title;
