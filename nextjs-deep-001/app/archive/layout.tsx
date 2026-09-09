import React from "react";

interface ArchieveLayout {
  archieve: React.ReactNode;
  latest: React.ReactNode;
}

function ArchieveLayout({
  archive,
  latest,
}: ArchieveLayout & LayoutProps<"/archive">) {
  return (
    <div>
      <h1>News Archive</h1>
      <section className="archive-filter">{archive}</section>
      <section className="archive-filter">{latest}</section>
    </div>
  );
}

export default ArchieveLayout;
