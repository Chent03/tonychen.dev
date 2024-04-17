import { Terminal } from "@/app/ui/terminal";
import { Experience } from "@/app/ui/experience";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div className="transition-opacity h-20 w-20 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 overflow-hidden mb-5">
          <Image src="/avatar.png" alt="Tony" width={100} height={100} />
        </div>
      </div>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Software Developer, Sports Fanatic, and a Curious Cat.
        </h1>
        <Terminal />
      </div>
      <Experience />
    </>
  );
}
