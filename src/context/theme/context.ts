import { createContext } from "react";
import type { ThemeContextValue } from "./types";

const ThemeContext = createContext<ThemeContextValue | null>(null);

export default ThemeContext;
