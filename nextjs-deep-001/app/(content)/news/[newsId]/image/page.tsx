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

/**
 *  not a modal preview
 * @param param0 note
 * @returns
 */
async function ImagePreviewPage({ params }: PageProps<"/news/[newsId]/image">) {
  const { newsId } = await params;

  const newsDetail = DUMMY_NEWS.find(
    (context: News) => context.slug === newsId,
  );

  if (!newsDetail) notFound();

  return (
    <div className="fullscreen-image">
      <Image
        src={`/images/news/${newsDetail.image}`}
        alt={newsDetail.title}
        width={1000}
        height={1000}
      />
    </div>
  );
}

export default ImagePreviewPage;
