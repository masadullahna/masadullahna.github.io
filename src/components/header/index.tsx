import { NavLink } from "react-router";
import Navbar from "../navbar";
import Searchbar from "../searchbar";
import ThemeToggler from "../theme-toggler";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md transition-colors">
      <div className="w-full max-w-7xl mx-auto flex items-center gap-6 px-6 py-3.5">
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 hover:opacity-85 shrink-0 flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
            NA
          </span>
          Muhammad Asad Ullah
        </NavLink>

        <div className="flex-1 min-w-0">
          <Searchbar />
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Navbar />
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default Header;
