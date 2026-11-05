import type { ContactMethod } from "./types";

export default [
  {
    label: "Email",
    value: "masadullahna@gmail.com",
    href: "mailto:masadullahna@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/masadullahna",
    href: "https://github.com/masadullahna",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/masadullahna",
    href: "https://linkedin.com/in/masadullahna",
  },
] as const satisfies readonly ContactMethod[];
