import type { ReactNode } from "react";

export interface ListProps<T> {
  items: readonly T[] | T[];
  renderItem: (item: T, index: number) => ReactNode;
  as?: "ul" | "ol";
  className?: string;
  emptyMessage?: ReactNode;
}
