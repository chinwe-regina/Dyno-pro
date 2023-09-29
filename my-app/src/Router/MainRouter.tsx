import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Common/Layout";
import HomeScreen from "../Pages/HomeScreen";
import HomeScreen2 from "../Pages2/HomeScreen2";
import HomeScreen3 from "../Pages3/HomeScreen3";
// import Layout2 from "../components2/Common2/Layout2";
// import HomeScreen2 from "../Pages2/HomeScreen2";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/homescreen",
        element: <HomeScreen2 />,
      },
      {
        path: "/homes",
        element: <HomeScreen3 />,
      },
    ],
  },
]);
