import { NAV_ITEMS } from "@/app/lib/utils";
import Link from "next/link";
export const Navbar = () => {
  return (
    <div className="w-full flex justify-center mt-8">
      <nav className="pointer-events-auto block">
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.title}
              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
