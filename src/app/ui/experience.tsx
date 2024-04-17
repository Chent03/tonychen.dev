import { Work } from "@/app/ui/icons";
import Image from "next/image";
import { EXPERIENCES } from "@/app/lib/utils";
import { Pill } from "@/app/ui/components/pill";

export const Experience = () => {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 flex flex-col mt-6">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Work className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4 flex-grow">
        {EXPERIENCES.map((job) => (
          <li className="flex gap-4 group" key={job.company}>
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={job.source}
                alt={job.company}
                width={32}
                height={32}
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                <a
                  href={job.link}
                  target="__blank"
                  className="group-hover:text-teal-300 focus-visible:text-teal-300"
                >
                  {job.company}
                </a>
              </dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                {job.date}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="w-full flex-none text-xs text-zinc-500 dark:text-zinc-400">
                {job.title}
              </dd>
              <dt className="sr-only">Description</dt>
              <dd className="text-xs text-zinc-400 dark:text-zinc-400 mt-2">
                {job.description}
              </dd>
              <dt className="sr-only">Tech Stack</dt>
              <dd className=" mt-2">
                <ul className="flex flex-wrap">
                  {job.tech?.map((tech) => (
                    <li key={tech} className="mr-1.5">
                      <Pill text={tech} />
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <footer>
        <a
          href="/Tony_Chen_Resume.pdf"
          target="__blank"
          className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
        >
          View Full Resume
        </a>
      </footer>
    </div>
  );
};
