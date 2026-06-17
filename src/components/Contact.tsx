import { profile } from "@/data/portfolio";
import Section from "./Section";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <div className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800 sm:p-12">
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Have a project in mind or just want to say hello? Drop me a message
          below, or email me directly at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-white"
          >
            {profile.email}
          </a>
          .
        </p>

        <ContactForm />

        <div className="mt-10 flex gap-6 border-t border-zinc-200 pt-6 text-sm font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 dark:hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={profile.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 dark:hover:text-white"
          >
            Twitter
          </a>
        </div>
      </div>
    </Section>
  );
}
