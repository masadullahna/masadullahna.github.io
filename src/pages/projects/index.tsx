import useDocumentTitle from "../../hooks/useDocumentTitle";
import List from "../../components/list";
import Card from "../../components/card";
import PROJECTS from "./constants";
import type { Project } from "./types";

const Projects = () => {
  useDocumentTitle("Projects", "Muhammad Asad Ullah");

  return (
    <article className="space-y-12 md:space-y-16 w-full">
      {/* Header Card */}
      <Card as="header" className="space-y-6 p-10 sm:p-14">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/40">
          AI &amp; Engineering Portfolio
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08]">
          Featured Projects
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
          Scalable AI agents, retrieval-augmented pipelines, and high-performance full-stack architectures.
        </p>
      </Card>

      {/* Projects Grid */}
      <section aria-labelledby="all-projects-heading">
        <h2 id="all-projects-heading" className="sr-only">
          All Projects
        </h2>
        <List<Project>
          items={PROJECTS}
          className="grid gap-8 md:grid-cols-2 list-none p-0 m-0"
          renderItem={(project) => (
            <li key={project.title}>
              <Card className="h-full flex flex-col justify-between group">
                <article className="space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  <List<string>
                    items={project.tags}
                    className="flex flex-wrap gap-2 pt-2 list-none p-0 m-0"
                    renderItem={(tag) => (
                      <li
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                      >
                        {tag}
                      </li>
                    )}
                  />
                </article>

                {project.link && (
                  <div className="pt-6 mt-6 border-t border-zinc-200/60 dark:border-zinc-800/60">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline gap-1.5"
                    >
                      View Code &amp; Demo
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                )}
              </Card>
            </li>
          )}
        />
      </section>
    </article>
  );
};

export default Projects;
