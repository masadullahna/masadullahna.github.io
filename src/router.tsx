import { createHashRouter } from "react-router";
import App from "./App";
import Home from "./pages/home";
import About from "./pages/about";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
