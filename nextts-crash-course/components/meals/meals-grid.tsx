import MealItem from "./meal-item";
import classses from "./meals-grid.module.css";

type Meals = {
  id: Number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};

interface MealsGridProps {
  meals: Array<Meals>;
}

function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={classses.meals}>
      {meals.map((meal) => (
        <li key={`${meal.id}` + 1}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
