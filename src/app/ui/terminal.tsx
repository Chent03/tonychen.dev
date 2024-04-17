import { TypingEffect } from "@/app/ui/typingeffect";
import { GitHub, LinkedIn } from "@/app/ui/icons";
export const Terminal = () => {
  return (
    <div className="prose prose-xl dark:prose-invert xl:col-span-2 mt-10">
      <div className="w-full shadow subpixel-antialiased rounded min-h-50 bg-zinc-800 dark:bg-zinc-700 border-black dark:border-white mx-auto">
        <div
          className="flex items-center py-1 h-6 rounded-t border-b-0 border-gray-500 text-center text-black"
          id="headerTerminal"
        >
          <div
            className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
            id="closebtn"
          ></div>
          <div
            className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
            id="minbtn"
          ></div>
          <div
            className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
            id="maxbtn"
          ></div>
        </div>
        <div className="p-3 h-auto dark:text-zinc-300 text-sm bg-zinc-900 font-semibold text-md text-white dark:bg-zinc-800">
          <p className="mt-1 pl-1 text-lg font-bold">
            <TypingEffect text="Hii, I'm Tony Chen 👋" />
          </p>
          <p className="pl-1 pb-1 text-1em">
            A software developer based in New York City. I find great joy in
            working on the front end and creating a wonderful UI/UX experience.
            The primary stacks that I use are Typescript, React, Next.JS, and
            Node. Aside from coding, I love watching basketball, tinkering with
            my fantasy lineup, and trying to create the perfect parlay.
          </p>
          <p className="pl-1 pb-4 mb-1 mt-3"> Let&apos;s connect!</p>
          <div className="flex gap-2">
            <a href="https://github.com/chent03" target="_blank">
              <GitHub className="h-6 w-6 fill-zinc-500 transition hover:fill-white" />
            </a>
            <a href="https://www.linkedin.com/in/tochen1231/" target="_blank">
              <LinkedIn className="h-6 w-6 fill-zinc-500 transition hover:fill-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
