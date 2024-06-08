import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-center text-xs text-muted-foreground max-w-sm gap-y-4 flex flex-col">
      <p>
        <span className="font-semibold">Disclaimer:</span> These snippets are
        inspired by{" "}
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
  );
};

export default Footer;
