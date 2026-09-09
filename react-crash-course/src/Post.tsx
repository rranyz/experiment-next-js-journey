import "./App.css";
import PostLists from "./components/postcomponents/PostLists.tsx";
import { Outlet } from "react-router";

function Post() {
  return (
    <>
      {/* this outlet will use by children of Post */}
      <Outlet />
      <main>
        <PostLists />
      </main>
    </>
  );
}

export default Post;

// the data return can access in nested components of the main component
export async function loader() {
  const response = await fetch("http://localhost:8080/posts/");
  const postListRes = await response.json();
  return postListRes.posts;
}
