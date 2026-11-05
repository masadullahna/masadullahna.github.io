import useDocumentTitle from "../../hooks/useDocumentTitle";
import List from "../../components/list";
import Card from "../../components/card";
import SKILLS from "./constants";

const About = () => {
  useDocumentTitle("About", "Muhammad Asad Ullah");

  return (
    <article className="space-y-12 md:space-y-16 w-full">
      {/* Header Card */}
      <Card as="header" className="space-y-6 p-10 sm:p-14">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
          Professional Overview
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08]">
          About Me
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
          Full-Stack AI Engineer bridging the gap between intelligent machine learning models and production-grade web applications.
        </p>
      </Card>

      {/* Bio Card */}
      <Card as="section" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Background &amp; Philosophy
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          I specialize in building intelligent, scalable systems that leverage the power of LLMs and generative AI combined with rock-solid full-stack architectures. From designing RAG pipelines and autonomous agents to deploying high-performance React frontends and robust APIs, my focus is on turning AI capabilities into tangible, reliable products.
        </p>
      </Card>

      {/* Skills Card */}
      <Card as="section" className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Technical Stack &amp; Tools
        </h2>
        <List<string>
          items={SKILLS}
          className="flex flex-wrap gap-3 list-none p-0 m-0"
          renderItem={(skill) => (
            <li
              key={skill}
              className="px-5 py-2.5 text-base font-medium rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
            >
              {skill}
            </li>
          )}
        />
      </Card>
    </article>
  );
};

export default About;
