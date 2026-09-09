import Link from "next/link";

function BlogPage() {
  return (
    <>
      <h2>this is Blog Page</h2>
      <Link href="/blog/post-1">More Details for Post one</Link>
    </>
  );
}

export default BlogPage;
