import Image from "next/image";
import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";
import ModalBackDrop from "@/components/modal-backdrop";

interface News {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

async function InterceptImagePreviewPage({
  params,
}: PageProps<"/news/[newsId]/image">) {
  const { newsId } = await params;

  const newsDetail = DUMMY_NEWS.find(
    (context: News) => context.slug === newsId,
  );

  if (!newsDetail) notFound();

  return (
    <>
      <ModalBackDrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <Image
            src={`/images/news/${newsDetail.image}`}
            alt={newsDetail.title}
            width={740}
            height={740}
          />
        </div>
      </dialog>
    </>
  );
}

export default InterceptImagePreviewPage;
