import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { RecipeCard } from "@/components/RecipeCard";
import { SearchBar } from "@/components/SearchBar";

import breakfastImage from "@assets/generated_images/Breakfast_category_image_ad41fcd5.png";
import veganImage from "@assets/generated_images/Vegan_category_image_9a729e43.png";
import dessertImage from "@assets/generated_images/Dessert_category_image_ff36616e.png";
import lunchImage from "@assets/generated_images/Lunch_recipe_image_9345fd45.png";
import dinnerImage from "@assets/generated_images/Dinner_recipe_image_f0db2b50.png";

export default function Home() {
  const categories = [
    { name: "Breakfast", image: breakfastImage, count: 45, href: "/browse?category=breakfast" },
    { name: "Vegan", image: veganImage, count: 32, href: "/browse?category=vegan" },
    { name: "Desserts", image: dessertImage, count: 28, href: "/browse?category=desserts" },
  ];

  const featuredRecipes = [
    {
      id: "1",
      title: "Homemade Pasta Carbonara",
      image: lunchImage,
      description: "Classic Italian pasta with creamy sauce, pancetta, and fresh parmesan",
      rating: 4.8,
      category: "Lunch",
      difficulty: "Medium" as const,
      cookingTime: 35,
    },
    {
      id: "2",
      title: "Grilled Chicken & Vegetables",
      image: dinnerImage,
      description: "Perfectly seasoned grilled chicken with roasted seasonal vegetables",
      rating: 4.6,
      category: "Dinner",
      difficulty: "Easy" as const,
      cookingTime: 45,
    },
    {
      id: "3",
      title: "Fluffy Pancakes",
      image: breakfastImage,
      description: "Light and fluffy pancakes with maple syrup and fresh berries",
      rating: 4.9,
      category: "Breakfast",
      difficulty: "Easy" as const,
      cookingTime: 20,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <div className="container py-12">
        <div className="flex flex-col items-center mb-8 gap-4">
          <h2 className="font-serif text-3xl font-semibold text-center">Search Recipes</h2>
          <SearchBar />
        </div>

        <section className="mb-16">
          <h2 className="font-serif text-3xl font-semibold mb-6">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl font-semibold mb-6">Popular Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
