"use client";

import { useFormStatus } from "react-dom";

function MealSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share meal"}
    </button>
  );
}

export default MealSubmit;
