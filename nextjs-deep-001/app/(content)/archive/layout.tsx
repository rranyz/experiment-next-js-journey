import React from "react";

interface ArchieveLayout {
  archive: React.ReactNode;
  latest: React.ReactNode;
}

async function ArchieveLayout({
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
