import { Card } from "@/components/ui/card";
import { Link } from "wouter";

interface CategoryCardProps {
  name: string;
  image: string;
  count: number;
  href: string;
}

export function CategoryCard({ name, image, count, href }: CategoryCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer h-full" data-testid={`card-category-${name.toLowerCase()}`}>
        <div className="aspect-[4/3] relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-serif text-2xl font-semibold text-white mb-1" data-testid={`text-category-${name.toLowerCase()}`}>
              {name}
            </h3>
            <p className="text-sm text-white/90">{count} recipes</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
