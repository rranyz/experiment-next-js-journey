import Link from "next/link";
import Image from "next/image";

interface News {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

type NewsList = {
  news: Array<News>;
};

function NewsList({ news }: NewsList) {
  return (
    <ul className="news-list">
      {news.map((news: News) => (
        <li key={news.id + "0"}>
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
  );
}

export default NewsList;
