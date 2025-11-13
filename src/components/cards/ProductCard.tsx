// components/cards/ProductCard.tsx

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  iconStart: LucideIcon;
  iconEnd: LucideIcon;
  stats: string;
  statsIcon: LucideIcon;

  imageSrc?: string;
  price?: string;
  originalPrice?: string;
  discount?: string;
  rating?: number;
  isNew?: boolean;
  isHot?: boolean;
  onAddToCart?: () => void;
  onQuickView?: () => void;
  onWishlist?: () => void;
  onShare?: () => void;
}

const ProductCard = ({
  title,
  description,
  iconStart: IconStart,
  iconEnd: IconEnd,
  stats,
  statsIcon: StatsIcon,
}: ProductCardProps) => {
  return (
   <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full group hover:bg-black">
  <CardContent className="h-full flex flex-col group-hover:text-white">
    {/* Icons Header */}
    <div className="flex justify-between items-center mb-4">
      <span className="bg-black group-hover:bg-chart-4 rounded p-2 transition-colors duration-300">
        <IconStart className="text-white group-hover:text-black transition-colors duration-300" size={16} />
      </span>
      <span className="bg-black group-hover:bg-chart-4 rounded p-2 transition-colors duration-300">
        <IconEnd className="text-white group-hover:text-black transition-colors duration-300" size={16} />
      </span>
    </div>

    {/* Rest of your content */}
    <div className="flex-grow">
      <h3 className="font-bold text-lg tracking-tight line-clamp-2 mb-2 group-hover:text-white">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm line-clamp-3 group-hover:text-white/80">
        {description}
      </p>
    </div>

    {/* Stats */}
    <div className="flex items-center justify-center mt-4 pt-3 border-t group-hover:border-white/30">
      <StatsIcon className="mr-2 h-4 w-4 group-hover:text-chart-4" />
      <span className="text-sm font-medium group-hover:text-chart-4">{stats}</span>
    </div>
  </CardContent>
</Card>
  );
};

export default ProductCard;
