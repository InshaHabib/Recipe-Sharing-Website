import { Navbar } from "@/components/Navbar";
import { RecipeCard } from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "wouter";

import lunchImage from "@assets/generated_images/Lunch_recipe_image_9345fd45.png";
import dinnerImage from "@assets/generated_images/Dinner_recipe_image_f0db2b50.png";

export default function Profile() {
  const userRecipes = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <Avatar className="h-24 w-24">
            <AvatarFallback className="text-2xl">JD</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h1 className="font-serif text-4xl font-bold mb-2" data-testid="text-username">
              John Doe
            </h1>
            <p className="text-muted-foreground mb-4">
              Passionate home chef | {userRecipes.length} recipes shared
            </p>
            <Link href="/submit">
              <Button data-testid="button-new-recipe">
                Submit New Recipe
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-3xl font-semibold mb-6">My Recipes</h2>
          {userRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} {...recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                You haven't submitted any recipes yet.
              </p>
              <Link href="/submit">
                <Button>Submit Your First Recipe</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
