/** details page is a async? */
/**
 * Typescript PageProps<"/blog/[postId]">
 * {
 *  params : Promise<{postId: string}>
 * }
 *
 * @param params
 * @returns JSX Elements
 */
async function BlogDetailsPage({ params }: PageProps<"/blog/[postId]">) {
  const { postId } = await params;

  return (
    <>
      <h2>this is blog details page: {postId}</h2>
    </>
  );
}

export default BlogDetailsPage;
