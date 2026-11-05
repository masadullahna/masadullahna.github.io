import type { CardProps } from "./types";

const Card = ({
  children,
  className = "",
  as: Component = "article",
}: CardProps) => {
  return (
    <Component
      className={`rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-900/40 p-8 sm:p-10 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 ${className}`}
    >
      {children}
    </Component>
  );
};

export default Card;
