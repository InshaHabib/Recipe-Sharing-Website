import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const categories = ["Breakfast", "Lunch", "Dinner", "Vegan", "Desserts", "Snacks"];
const difficulties = ["Easy", "Medium", "Hard"];

interface FilterSidebarProps {
  onFilterChange?: (filters: any) => void;
}

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string>("all");
  const [maxTime, setMaxTime] = useState<number[]>([120]);

  const handleCategoryToggle = (category: string) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updated);
    onFilterChange?.({ categories: updated, difficulty, maxTime: maxTime[0] });
    console.log("Categories filter:", updated);
  };

  const handleDifficultyChange = (value: string) => {
    setDifficulty(value);
    onFilterChange?.({ categories: selectedCategories, difficulty: value, maxTime: maxTime[0] });
    console.log("Difficulty filter:", value);
  };

  const handleTimeChange = (value: number[]) => {
    setMaxTime(value);
    onFilterChange?.({ categories: selectedCategories, difficulty, maxTime: value[0] });
    console.log("Time filter:", value[0]);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
                data-testid={`checkbox-category-${category.toLowerCase()}`}
              />
              <Label
                htmlFor={`category-${category}`}
                className="text-sm font-normal cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Difficulty</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={difficulty} onValueChange={handleDifficultyChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="diff-all" />
              <Label htmlFor="diff-all" className="text-sm font-normal cursor-pointer">All</Label>
            </div>
            {difficulties.map((diff) => (
              <div key={diff} className="flex items-center space-x-2">
                <RadioGroupItem value={diff.toLowerCase()} id={`diff-${diff}`} data-testid={`radio-difficulty-${diff.toLowerCase()}`} />
                <Label htmlFor={`diff-${diff}`} className="text-sm font-normal cursor-pointer">{diff}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Cooking Time</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={maxTime}
            onValueChange={handleTimeChange}
            max={180}
            min={15}
            step={15}
            data-testid="slider-time"
          />
          <div className="text-sm text-muted-foreground text-center">
            Up to {maxTime[0]} minutes
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
