import { getMeal } from "@/lib/meals";
import Image from "next/image";

import classes from "./page.module.css";
import { notFound } from "next/navigation";

/**
 *
 * Dynamic metadata depends on dynamic information
 */
type Props = {
  params: Promise<{ mealSlug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

interface MealItem {
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export async function generateMetadata({ params }: Props) {
  const { mealSlug } = await params;

  // fetch data
  const meal: MealItem = getMeal(mealSlug);

  return {
    title: meal.title,
    description: meal.summary,
  };
}

async function MealsDetailsPage({ params }: PageProps<"/meals/[mealSlug]">) {
  const { mealSlug } = await params;

  const meal: MealItem = getMeal(mealSlug);

  /**
   * nearest custom not-found page component
   */
  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

export default MealsDetailsPage;
