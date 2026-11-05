import { NavLink } from "react-router";
import List from "../list";
import SIDEBAR_NAV_LINKS from "./constants";
import type { SidebarItem, SidebarProps } from "./types";

const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
  if (!isOpen) return null;

  return (
    <aside
      aria-label="Sidebar Navigation"
      className="fixed inset-y-0 left-0 z-50 w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-lg flex flex-col justify-between transition-transform"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">Menu</span>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="p-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        <nav aria-label="Sidebar Links">
          <List<SidebarItem>
            items={SIDEBAR_NAV_LINKS}
            className="flex flex-col gap-3 list-none p-0 m-0"
            renderItem={(link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            )}
          />
        </nav>
      </div>

      <footer className="text-xs text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Portfolio</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
