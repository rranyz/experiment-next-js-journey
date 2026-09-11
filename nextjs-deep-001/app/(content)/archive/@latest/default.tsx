import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news-list";

function LatestPage() {
  const newLatestList = getLatestNews();

  return (
    <>
      <h2>Latest New</h2>
      <NewsList news={newLatestList} />
    </>
  );
}

export default LatestPage;
