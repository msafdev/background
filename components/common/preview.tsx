import { ReactNode, Suspense } from "react";
import ReactDOMServer from "react-dom/server";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Preview = ({
  setPreview,
  children,
  containerRef,
}: {
  setPreview: (preview: ReactNode) => void;
  children: ReactNode;
  containerRef?: any;
}) => {
  const { toast } = useToast();

  const copyToClipboard = (node: ReactNode) => {
    const code = ReactDOMServer.renderToString(node);
    navigator.clipboard.writeText(code);
  };

  const isBrowser = () => typeof window !== "undefined";

  const applyPreview = (preview: ReactNode) => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });

    setPreview(children);
  };

  return (
    <Suspense fallback={null}>
      <div className="w-full h-auto aspect-square border rounded-xl relative overflow-hidden shadow group bg-popover">
        <div className="absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 flex flex-col justify-center lg:opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:lg:bg-foreground/10 w-full h-full ease-in-out z-10">
          <div className="flex items-center justify-center gap-x-2">
            <Button
              size={"sm"}
              className="py-1 h-fit text-xs"
              onClick={() => {
                applyPreview(children);
              }}
            >
              Preview
            </Button>
            <Button
              size={"sm"}
              className="py-1 h-fit text-xs"
              onClick={() => {
                copyToClipboard(children);
                toast({
                  title: "📋 copied to clipboard",
                  description: "don't forget to give it a star!",
                });
              }}
            >
              Snippet
            </Button>
          </div>
        </div>

        {children}
      </div>
    </Suspense>
  );
};

export default Preview;
