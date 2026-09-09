import classes from "./Post.module.css";
import { Link } from "react-router";

type PostProps = {
  id: String;
  author: String;
  descp: String;
};

/**
 * custom component for Post.tsx
 * @returns
 */
function Post({ id, author, descp }: PostProps) {
  return (
    <li className={classes.post}>
      <Link
        to={{
          pathname: "/" + id,
        }}
      >
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{descp}</p>
      </Link>
    </li>
  );
}

export default Post;
