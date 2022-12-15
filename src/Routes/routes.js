import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Main/Home";
import Post from "../Pages/Main/Post Segment/Post";
import Posts from "../Pages/Main/Post Segment/Posts";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/:post",
        element: <Post />,
      },
    //   {
    //     path: "cart",
    //     element: <Cart />,
    //   },
    ],
  },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//     children: [
//       {
//         path: "/dashboard",
//         element: <ProductList />,
//       },
//       {
//         path: "add-product",
//         element: <AddProduct />,
//       },
//     ],
//   },
]);

export default routes;