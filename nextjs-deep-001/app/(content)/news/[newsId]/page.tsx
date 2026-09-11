import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

interface News {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

async function NewsPageDetails({ params }: PageProps<"/news/[newsId]">) {
  const { newsId } = await params;

  const newsDetail = DUMMY_NEWS.find(
    (context: News) => context.slug === newsId,
  );

  if (!newsDetail) notFound();

  return (
    <>
      {newsDetail && (
        <article className="news-article">
          <header>
            <Link href={`/news/${newsId}/image`}>
              <Image
                src={`/images/news/${newsDetail.image}`}
                alt={newsDetail.title}
                width={112}
                height={112}
              />
            </Link>
            <h1>{newsDetail?.title}</h1>
            <time dateTime={newsDetail.date}>{newsDetail.date}</time>
          </header>
          <p>{newsDetail.content}</p>
        </article>
      )}
    </>
  );
}

export default NewsPageDetails;
