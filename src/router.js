import { createBrowserRouter } from "react-router-dom";
import Home from "./Path/Home";
import Latest from "./Path/Latest";
import TopPicks from "./Path/TopPicks";
import Layout from "./Path/Layout";
import ReadBook from "./Path/ReadBook";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "", Component: Home },
      { path: "latest", Component: Latest },
      { path: "toppicks", Component: TopPicks },
      { path: "books/:id", Component: ReadBook,},
    ],
  },
]);

export default router;
