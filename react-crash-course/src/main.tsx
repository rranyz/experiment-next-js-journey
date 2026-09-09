import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Post, { loader as postLoader } from "./Post.tsx";
import RootLayout from "./routes/RootLayout.tsx";
import NewPost from "./routes/NewPost.tsx";
import { action as postAddAction } from "./routes/newPostAddAction.ts";
import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/PostDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Post />,
        loader: postLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: postAddAction, // form management
          },
          {
            path: ":id",
            element: <PostDetails />,
            loader: postDetailsLoader, // form management
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
