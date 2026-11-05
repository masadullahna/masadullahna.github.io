import { type FC, type FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import type { SearchbarProps } from "./types";

const Searchbar: FC<SearchbarProps> = ({
  placeholder = "Search projects by title, tag, or description...",
  onSearch,
}) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      if (onSearch) {
        onSearch(trimmed);
      }
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <form role="search" onSubmit={handleSubmit} className="w-full flex-1 relative flex items-center">
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>
      {/* Search Icon */}
      <span className="absolute left-4.5 pointer-events-none text-zinc-400 dark:text-zinc-500 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4.5 h-4.5"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </span>
      <input
        id="search-input"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-5 py-2.5 text-base rounded-full border border-zinc-200 dark:border-zinc-700/80 bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-700/60 hover:shadow-sm focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all duration-200"
      />
    </form>
  );
};

export default Searchbar;
