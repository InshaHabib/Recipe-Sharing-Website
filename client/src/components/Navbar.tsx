import { Link, useLocation } from "wouter";
import { Search, User, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export function Navbar({ onSearch }: NavbarProps) {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 cursor-pointer">
            <ChefHat className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl font-semibold">RecipeShare</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <Link href="/" data-testid="link-nav-home">
            <Button
              variant={location === "/" ? "default" : "ghost"}
              size="sm"
              className="min-h-9"
            >
              Home
            </Button>
          </Link>
          <Link href="/browse" data-testid="link-browse">
            <Button
              variant={location === "/browse" ? "default" : "ghost"}
              size="sm"
              className="min-h-9"
            >
              Browse Recipes
            </Button>
          </Link>
          <Link href="/submit" data-testid="link-submit">
            <Button
              variant={location === "/submit" ? "default" : "ghost"}
              size="sm"
              className="min-h-9"
            >
              Submit Recipe
            </Button>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/profile" data-testid="link-profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
