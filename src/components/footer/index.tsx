const Footer = () => {
  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 text-sm transition-colors mt-auto">
      <section className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Muhammad Asad Ullah. All rights reserved.
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          Designed with Google MD3 Principles &bull; React &bull; Tailwind CSS v4
        </p>
      </section>
    </footer>
  );
};

export default Footer;
