import { NavLink } from "react-router";
import List from "../list";
import NAV_ITEMS from "./constants";
import type { NavItem } from "./types";

const Navbar = () => {
  return (
    <nav aria-label="Main Navigation">
      <List<NavItem>
        items={NAV_ITEMS}
        className="flex items-center gap-2 sm:gap-3 list-none m-0 p-0"
        renderItem={(item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        )}
      />
    </nav>
  );
};

export default Navbar;
