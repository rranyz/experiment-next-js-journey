import React from "react";

interface NewsDetailLayoutProps {
  modal: React.ReactNode;
}

function NewsDetailLayout({
  modal,
  children,
}: NewsDetailLayoutProps & LayoutProps<"/news/[newsId]">) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

export default NewsDetailLayout;
