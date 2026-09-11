import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

function NewsPage() {
  return (
    <>
      <h1> This is news pages</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}

export default NewsPage;
