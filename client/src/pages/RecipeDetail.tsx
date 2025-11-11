import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, ChefHat } from "lucide-react";
import { useRoute } from "wouter";

import lunchImage from "@assets/generated_images/Lunch_recipe_image_9345fd45.png";

export default function RecipeDetail() {
  const [, params] = useRoute("/recipe/:id");
  const recipeId = params?.id;

  const recipe = {
    id: recipeId || "1",
    title: "Homemade Pasta Carbonara",
    image: lunchImage,
    description: "Classic Italian pasta dish with a creamy sauce made from eggs, cheese, pancetta, and black pepper. This authentic recipe delivers restaurant-quality results at home.",
    rating: 4.8,
    reviews: 124,
    category: "Lunch",
    difficulty: "Medium",
    cookingTime: 35,
    servings: 4,
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Black pepper, freshly ground",
      "Salt for pasta water",
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, Pecorino Romano, Parmesan, and plenty of black pepper.",
      "Reserve 1 cup of pasta water, then drain pasta. Add hot pasta to the skillet with pancetta.",
      "Remove from heat and quickly stir in the egg mixture, adding reserved pasta water gradually until creamy.",
      "Serve immediately with extra cheese and black pepper on top.",
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8 max-w-5xl">
        <div className="mb-8">
          <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="secondary">{recipe.category}</Badge>
            <Badge variant="outline">{recipe.difficulty}</Badge>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4" data-testid="text-recipe-title">
            {recipe.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm mb-6">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{recipe.rating}</span>
              <span className="text-muted-foreground">({recipe.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>{recipe.cookingTime} min</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            {recipe.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <h2 className="font-serif text-2xl font-semibold mb-4 flex items-center gap-2">
                <ChefHat className="h-6 w-6" />
                Ingredients
              </h2>
              <ul className="space-y-2" data-testid="list-ingredients">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl font-semibold mb-4">Instructions</h2>
            <ol className="space-y-6" data-testid="list-instructions">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </span>
                  <p className="pt-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
