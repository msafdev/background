const Bg1 = () => {
  return (
    <div className="relative h-full w-full bg-background">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:1.5rem_2rem]"></div>
      <div className="absolute border-x border-border dark:border-zinc-800 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-auto w-full aspect-square min-w-[500px] max-w-[900px] rounded-full bg-[radial-gradient(circle_100px_at_70%_70%,#ffffff36,#fff)] sm:bg-[radial-gradient(circle_150px_at_70%_70%,#ffffff36,#fff)] dark:bg-[radial-gradient(circle_100px_at_70%_70%,#fbfbfb36,#09090b)] sm:dark:bg-[radial-gradient(circle_150px_at_70%_70%,#fbfbfb36,#09090b)]"></div>
    </div>
  );
};

const Bg2 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,163,255,0.23)_0,rgba(0,0,0,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.23),rgba(255,255,255,0))]"></div>
  );
};

const Bg3 = () => {
  return (
    <div className="relative h-full w-full bg-background">
      <div className="absolute bottom-0 top-0 right-0 left-0 bg-background bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:1.5rem_2rem]"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-auto w-full aspect-square min-w-[800px] rounded-full bg-[radial-gradient(circle,#ffffff,transparent)] dark:bg-[radial-gradient(circle,#09090B,transparent)]" />
    </div>
  );
};

const Bg4 = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_20%,transparent_40%,#63e_100%)]"></div>
  );
};

const Bg5 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-background">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_0%_0%,#c7d2fe,transparent)] dark:bg-[radial-gradient(circle_800px_at_0%_0%,#6366f136,transparent)]"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_100%,#c7d2fe,transparent)] dark:bg-[radial-gradient(circle_800px_at_100%_100%,#6366f136,transparent)]"></div>
    </div>
  );
};

const Bg6 = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_-50%,#c7d2fe_40%,transparent_100%)] dark:[background:radial-gradient(125%_125%_at_50%_-50%,#6366f136_40%,transparent_100%)]"></div>
  );
};

export const backgroundItems = [
  {
    name: "Background 1",
    component: <Bg1 />,
  },
  {
    name: "Background 2",
    component: <Bg2 />,
  },
  {
    name: "Background 3",
    component: <Bg3 />,
  },
  {
    name: "Background 4",
    component: <Bg4 />,
  },
  {
    name: "Background 5",
    component: <Bg5 />,
  },
  {
    name: "Background 6",
    component: <Bg6 />,
  },
] as const;
