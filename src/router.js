import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Latest from "./Latest";
import TopPicks from "./TopPicks";
import Layout from "./Layout";
import ReadBook from "./ReadBook";


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
