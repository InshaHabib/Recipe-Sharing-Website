import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { FilterSidebar } from "@/components/FilterSidebar";
import { RecipeCard } from "@/components/RecipeCard";

import breakfastImage from "@assets/generated_images/Breakfast_category_image_ad41fcd5.png";
import veganImage from "@assets/generated_images/Vegan_category_image_9a729e43.png";
import dessertImage from "@assets/generated_images/Dessert_category_image_ff36616e.png";
import lunchImage from "@assets/generated_images/Lunch_recipe_image_9345fd45.png";
import dinnerImage from "@assets/generated_images/Dinner_recipe_image_f0db2b50.png";

export default function BrowseRecipes() {
  const recipes = [
    {
      id: "1",
      title: "Homemade Pasta Carbonara",
      image: lunchImage,
      description: "Classic Italian pasta with creamy sauce and pancetta",
      rating: 4.8,
      category: "Lunch",
      difficulty: "Medium" as const,
      cookingTime: 35,
    },
    {
      id: "2",
      title: "Grilled Chicken & Vegetables",
      image: dinnerImage,
      description: "Perfectly seasoned grilled chicken with roasted vegetables",
      rating: 4.6,
      category: "Dinner",
      difficulty: "Easy" as const,
      cookingTime: 45,
    },
    {
      id: "3",
      title: "Fluffy Pancakes",
      image: breakfastImage,
      description: "Light and fluffy pancakes with maple syrup",
      rating: 4.9,
      category: "Breakfast",
      difficulty: "Easy" as const,
      cookingTime: 20,
    },
    {
      id: "4",
      title: "Vegan Buddha Bowl",
      image: veganImage,
      description: "Nutritious bowl with quinoa, chickpeas, and fresh vegetables",
      rating: 4.7,
      category: "Vegan",
      difficulty: "Easy" as const,
      cookingTime: 30,
    },
    {
      id: "5",
      title: "Chocolate Lava Cake",
      image: dessertImage,
      description: "Decadent chocolate cake with molten center",
      rating: 4.9,
      category: "Desserts",
      difficulty: "Hard" as const,
      cookingTime: 25,
    },
    {
      id: "6",
      title: "Mediterranean Salad",
      image: veganImage,
      description: "Fresh salad with feta, olives, and lemon dressing",
      rating: 4.5,
      category: "Lunch",
      difficulty: "Easy" as const,
      cookingTime: 15,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold mb-4">Browse Recipes</h1>
          <SearchBar />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          <main className="flex-1">
            <div className="mb-4 text-sm text-muted-foreground">
              Showing {recipes.length} recipes
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} {...recipe} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
