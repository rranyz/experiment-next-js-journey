import Link from "next/link";

import NewsList from "@/components/news-list";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/news";

async function ArchiveYearPage({
  params,
}: PageProps<"/archive/[[...filter]]">) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links: Array<Number> = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  /**
   * ERROR handling
   */
  if (
    (selectedYear &&
      !(getAvailableNewsYears() as Array<number>).includes(+selectedYear)) ||
    (selectedMonth &&
      !(getAvailableNewsMonths() as Array<number>).includes(+selectedMonth))
  ) {
    // to trigger error.js|.tsx fallback page
    throw new Error("Invalid Filter");
  }

  return (
    <>
      <header className="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={`${link}_1`}>
                  <Link href={href}>{`${link}`}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}

export default ArchiveYearPage;

// async function ArchiveYearPage({ params }: PageProps<"/archive/[year]">) {
//   const { year } = await params;
//   const news = getNewsForYear(year);

//   return <NewsList news={news} />;
// }

// export default ArchiveYearPage;
