import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBannerImage from "@assets/generated_images/Hero_banner_food_photography_c080935d.png";

export function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBannerImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4" data-testid="text-hero-title">
          Discover & Share Amazing Recipes
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Join our community of food lovers. Browse thousands of recipes or share your own culinary creations.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/browse">
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white border-white/30 min-h-10"
              data-testid="button-browse-recipes"
            >
              Browse Recipes
            </Button>
          </Link>
          <Link href="/submit">
            <Button
              size="lg"
              className="min-h-10"
              data-testid="button-submit-recipe"
            >
              Submit a Recipe
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
