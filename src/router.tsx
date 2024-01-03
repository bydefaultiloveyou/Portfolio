import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;
