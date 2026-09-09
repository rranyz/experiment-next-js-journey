"use server";

import { saveMeal } from "@/lib/meals";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function inValidText(textInput: FormDataEntryValue | string | null) {
  return !textInput || textInput === "";
}

type MealFormType = FormDataEntryValue | null;

export async function shareMeal(prevState: any, formData: FormData) {
  const meal: {
    title: MealFormType;
    summary: MealFormType;
    instructions: MealFormType;
    image: File;
    creator_email: string;
    creator: MealFormType;
  } = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image") as File,
    creator_email: formData.get("email") as string,
    creator: formData.get("name"),
  };

  if (
    inValidText(meal.title) ||
    inValidText(meal.instructions) ||
    inValidText(meal.summary) ||
    inValidText(meal.creator) ||
    inValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("Invalid");
    return { message: "Invalid Input" };
  }

  // meal.js with sqlite 3
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
