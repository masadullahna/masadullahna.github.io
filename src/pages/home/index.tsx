import { Link } from "react-router";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Card from "../../components/card";

const Home = () => {
  useDocumentTitle(undefined, "Muhammad Asad Ullah");

  return (
    <article className="space-y-16 md:space-y-24 w-full">
      {/* Hero Card */}
      <Card as="header" className="space-y-8 p-10 sm:p-14 md:p-16">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/40">
          Full-Stack AI Engineer
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.08]">
          Building Intelligent &amp; Scalable AI-Driven Systems.
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal max-w-3xl">
          Architecting end-to-end AI applications, LLM workflows, and modern web solutions with high performance and seamless user experiences.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition-all"
          >
            Explore Projects &rarr;
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </Card>

      {/* Overview Cards Grid */}
      <section aria-labelledby="core-focus-heading" className="space-y-6">
        <h2 id="core-focus-heading" className="text-3xl font-bold tracking-tight">
          Engineering Focus
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-8">
            <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
              Generative AI &amp; Agents
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Autonomous agentic workflows, RAG systems, model fine-tuning, and structured reasoning pipelines.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
              Full-Stack Architecture
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Robust backends with FastAPI/Node.js, scalable distributed databases, and responsive React frontend systems.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
              High Performance &amp; Scale
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Sub-second latency, production-ready vector databases, and resilient cloud deployments.
            </p>
          </Card>
        </div>
      </section>
    </article>
  );
};

export default Home;
