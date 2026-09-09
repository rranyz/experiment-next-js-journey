import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";

interface News {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

function NewsPage() {
  return (
    <>
      <h1> This is news pages</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((news: News) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <Image
                src={`/images/news/${news.image}`}
                alt={news.title}
                width={600}
                height={600}
              />

              <p>{news.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NewsPage;
