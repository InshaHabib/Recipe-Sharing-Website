import { CategoryCard } from "../CategoryCard";
import breakfastImage from "@assets/generated_images/Breakfast_category_image_ad41fcd5.png";

export default function CategoryCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <CategoryCard
        name="Breakfast"
        image={breakfastImage}
        count={45}
        href="/browse?category=breakfast"
      />
    </div>
  );
}
