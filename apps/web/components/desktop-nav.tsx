import Link from "next/link";

import { Icons } from "@/components/icons";

import { capitalize } from "@/lib/utils";

import { MAIN_NAV_PAGES as pages } from "@/lib/constants";

export const icon = (type: (typeof pages)[number], size: number) => {
  switch (type) {
    case "/profile":
      return <Icons.myProfile size={size} />;
    case "/news":
      return <Icons.news size={size} />;
    case "/messenger":
      return <Icons.messenger size={size} />;
    case "/friends":
      return <Icons.friends size={size} />;
    case "/photos":
      return <Icons.photos size={size} />;
    default:
      const _: never = type; // eslint-disable-line
      throw "Not all cases are covered";
  }
};

export const menuItemName = (type: (typeof pages)[number]) => {
  const pathname = type.slice(1);

  switch (type) {
    case "/profile":
      return `My ${pathname}`;
    default:
      return capitalize(pathname);
  }
};

export const query = (type: (typeof pages)[number]) => {
  switch (type) {
    case "/friends":
      return {
        tab: "all",
      };
    default:
      return undefined;
  }
};

export const DesktopNav = () => (
  <ul className="hidden gap-5 md:flex md:flex-col">
    {pages.map((page) => (
      <Link
        key={page}
        href={{
          pathname: page,
          query: query(page),
        }}
      >
        <li className="flex cursor-pointer items-center gap-2 rounded p-2 text-sm transition-[background-color] hover:bg-neutral-200 dark:hover:bg-neutral-950">
          {icon(page, 20)}
          <span className="ml-1">{menuItemName(page)}</span>
        </li>
      </Link>
    ))}
  </ul>
);
