import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Solutions } from "./pages/Solutions";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { Process } from "./pages/Process";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "solutions", Component: Solutions },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
      { path: "process", Component: Process },
      { path: "*", Component: NotFound },
    ],
  },
]);