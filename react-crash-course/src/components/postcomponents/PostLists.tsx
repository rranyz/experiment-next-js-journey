import classes from "./PostLists.module.css";
import Post from "./Post.tsx";
import React from "react";
import { useLoaderData } from "react-router";

interface PostListsProps {
  isPosting: Boolean;
  onStopPosting: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}

type AddPostPayloadType = {
  id: String;
  body: String;
  author: String;
};

function PostLists() {
  const postList = useLoaderData<Array<AddPostPayloadType>>();

  return (
    <>
      {postList.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>No post display</p>
        </div>
      )}

      <ul className={classes.posts}>
        {postList.length > 0 &&
          postList.map((context) => (
            <Post
              key={Number(context.id)}
              id={context.id}
              author={context.author}
              descp={context.body}
            />
          ))}
      </ul>
    </>
  );
}

export default PostLists;
