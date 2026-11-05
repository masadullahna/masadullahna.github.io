import useDocumentTitle from "../../hooks/useDocumentTitle";
import List from "../../components/list";
import Card from "../../components/card";
import CONTACT_METHODS from "./constants";
import type { ContactMethod } from "./types";

const Contact = () => {
  useDocumentTitle("Contact", "Muhammad Asad Ullah");

  return (
    <article className="space-y-12 md:space-y-16 w-full">
      {/* Header Card */}
      <Card as="header" className="space-y-6 p-10 sm:p-14">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/40">
          Get In Touch
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08]">
          Let&apos;s Connect
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
          Interested in collaborating on AI agents, full-stack systems, or innovative engineering? Feel free to reach out.
        </p>
      </Card>

      {/* Contact Channels Grid */}
      <section aria-labelledby="contact-methods-heading">
        <h2 id="contact-methods-heading" className="sr-only">
          Contact Channels
        </h2>
        <List<ContactMethod>
          items={CONTACT_METHODS}
          className="grid gap-6 sm:grid-cols-3 list-none p-0 m-0"
          renderItem={(method) => (
            <li key={method.label}>
              <Card className="h-full p-6 sm:p-8 group">
                <article className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {method.label}
                  </span>
                  <p className="text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus:outline-none hover:underline block truncate"
                    >
                      {method.value}
                    </a>
                  </p>
                </article>
              </Card>
            </li>
          )}
        />
      </section>
    </article>
  );
};

export default Contact;
