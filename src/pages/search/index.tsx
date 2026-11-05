import { useSearchParams, Link } from "react-router";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import List from "../../components/list";
import Card from "../../components/card";
import PROJECTS from "../projects/constants";
import type { Project } from "../projects/types";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";

  const titleText = query ? `Search: "${query}"` : "Search";
  useDocumentTitle(titleText, "Muhammad Asad Ullah");

  const normalizedQuery = query.toLowerCase();

  const filteredProjects: readonly Project[] = query
    ? PROJECTS.filter((project) => {
        const inTitle = project.title.toLowerCase().includes(normalizedQuery);
        const inCategory = project.category.toLowerCase().includes(normalizedQuery);
        const inDesc = project.description.toLowerCase().includes(normalizedQuery);
        const inTags = project.tags.some((tag) =>
          tag.toLowerCase().includes(normalizedQuery)
        );
        return inTitle || inCategory || inDesc || inTags;
      })
    : [];

  return (
    <article className="space-y-12 md:space-y-16 w-full">
      {/* Header Card */}
      <Card as="header" className="space-y-4 p-8 sm:p-12">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/40">
          Search Results
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {query ? (
            <>
              Results for <span className="text-blue-600 dark:text-blue-400">&ldquo;{query}&rdquo;</span>
            </>
          ) : (
            "Explore Projects"
          )}
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          {query
            ? `Found ${filteredProjects.length} ${filteredProjects.length === 1 ? "project" : "projects"} matching your query.`
            : "Type in the search bar above to filter projects by title, tech stack, or description."}
        </p>
      </Card>

      {/* Results Section */}
      <section aria-labelledby="search-results-heading">
        <h2 id="search-results-heading" className="sr-only">
          Matching Projects
        </h2>

        {query && filteredProjects.length === 0 ? (
          <Card className="text-center p-12 space-y-4">
            <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
              No matching projects found
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto text-sm">
              We couldn&apos;t find any projects matching &ldquo;{query}&rdquo;. Try searching for &ldquo;AI&rdquo;, &ldquo;React&rdquo;, &ldquo;FastAPI&rdquo;, or &ldquo;Python&rdquo;.
            </p>
            <div className="pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline gap-1"
              >
                View all projects &rarr;
              </Link>
            </div>
          </Card>
        ) : (
          <List<Project>
            items={filteredProjects}
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
        )}
      </section>
    </article>
  );
};

export default Search;
