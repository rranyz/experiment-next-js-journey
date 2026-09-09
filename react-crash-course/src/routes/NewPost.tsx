import { Link, Form, redirect } from "react-router";
import Modal from "../components/postcomponents/Modal";
import classes from "./NewPost.module.css";

interface NewPostProps<T extends any[] = any[]> {
  // Best for input change function
  // onChangeBody: React.ChangeEventHandler<HTMLTextAreaElement>;
  // onChangeAuthor: React.ChangeEventHandler<HTMLInputElement>;
  onSubmitAdd: (...args: T) => void;
  // onClickCancel: React.MouseEventHandler<HTMLButtonElement>;
}

function NewPost() {
  // typescript reference
  // function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
  //   setCurrentValue(event.target.value);
  // }
  // function changeAuthorHandler(event: React.ChangeEvent<HTMLInputElement>) {
  //   setValueAuthor(event.target.value);
  // }

  // function onSubmitHandlers(
  //   event: React.SubmitEvent<HTMLFormElement> &
  //     React.MouseEvent<HTMLButtonElement>,
  // ) {
  //   event.preventDefault(); // prevent the browser to sent a request
  //   const postPayloadData = {
  //     body: currectValue,
  //     author: enteredValueAuthor,
  //    };
  // }

  return (
    <Modal>
      <Form method="POST" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;
