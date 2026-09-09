import { useLoaderData, Link, type LoaderFunctionArgs } from "react-router";

import Modal from "../components/postcomponents/Modal.tsx";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

/**
 *
 * @param param0
 * @returns
 */
export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  const response = await fetch("http://localhost:8080/posts/" + id);
  const postDetails = await response.json();

  return postDetails.post;
}
