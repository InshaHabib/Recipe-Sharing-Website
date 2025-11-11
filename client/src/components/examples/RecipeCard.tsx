import { RecipeCard } from "../RecipeCard";
import lunchImage from "@assets/generated_images/Lunch_recipe_image_9345fd45.png";

export default function RecipeCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <RecipeCard
        id="1"
        title="Homemade Pasta Carbonara"
        image={lunchImage}
        description="Classic Italian pasta with creamy sauce, pancetta, and fresh parmesan cheese"
        rating={4.8}
        category="Lunch"
        difficulty="Medium"
        cookingTime={35}
      />
    </div>
  );
}
