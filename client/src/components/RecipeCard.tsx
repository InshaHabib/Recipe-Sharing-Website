import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock } from "lucide-react";
import { Link } from "wouter";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  rating: number;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  cookingTime: number;
}

export function RecipeCard({
  id,
  title,
  image,
  description,
  rating,
  category,
  difficulty,
  cookingTime,
}: RecipeCardProps) {
  const difficultyColor = {
    Easy: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    Medium: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
    Hard: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
  };

  return (
    <Link href={`/recipe/${id}`}>
      <Card className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer h-full" data-testid={`card-recipe-${id}`}>
        <div className="aspect-[4/3] relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader className="space-y-0 pb-3">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl font-semibold line-clamp-2" data-testid={`text-recipe-title-${id}`}>
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <Badge variant="outline" className={`text-xs ${difficultyColor[difficulty]}`}>
              {difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {description}
          </p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{cookingTime} min</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
