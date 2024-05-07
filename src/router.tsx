import { createBrowserRouter } from "react-router-dom";

import Root from "./routes/__root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);

export default router;
