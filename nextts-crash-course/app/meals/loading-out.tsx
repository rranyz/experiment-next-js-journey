import classes from "./loading.module.css";

function MealsLoadingPage() {
  return (
    <div className={classes.loading}>
      <h1>Fetching data....</h1>
    </div>
  );
}

export default MealsLoadingPage;
