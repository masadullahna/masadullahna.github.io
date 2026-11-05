import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "article" | "section" | "div" | "header";
}
