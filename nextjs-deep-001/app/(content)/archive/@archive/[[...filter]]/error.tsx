"use client";

import Error from "next/error";

interface ErrorProps {
  error: Error & { digest?: string; message: string };
}

function FilterError({ error }: ErrorProps) {
  return (
    <div className="error">
      <h2>an error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default FilterError;
