import type { ActionFunctionArgs } from "react-router";
import { redirect } from "react-router";
/**
 * Typescript for paramter action
 * import react-router for types
 * sample: ActionFunctionArgs
 * todo: Could not Fast Refresh ("action" export is incompatible)
 * The problem is that NewPost.tsx exports both:

    a React component
    a non-component function (action)

    Fast Refresh expects component modules to have compatible exports so it can preserve component state during HMR. Your action export causes:

    Could not Fast Refresh ("action" export is incompatible)
 *
 * solution: create a seprate for action with .ts extension
 */
export async function action({ request }: ActionFunctionArgs) {
  // typescript for action
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);

  await fetch("http://localhost:8080/posts/", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("..");
}
