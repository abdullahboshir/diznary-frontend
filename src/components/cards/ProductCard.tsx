// components/cards/ProductCard.tsx

import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Eye, Share2 } from "lucide-react"

interface ProductCardProps {
  imageSrc: string | StaticImageData; // Accept both string and StaticImageData
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating?: number;
  isNew?: boolean;
  isHot?: boolean;
  onAddToCart?: () => void;
  onQuickView?: () => void;
}

const ProductCard = ({
  imageSrc,
  name,
  description,
  price,
  originalPrice,
  discount,
  rating = 4.5,
  isNew = false,
  isHot = false,
  onAddToCart,
  onQuickView,
}: ProductCardProps) => {
  return (
    <Card className="group relative w-full max-w-sm rounded-2xl bg-gradient-to-br from-white to-gray-50/80 shadow-lg hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden hover:scale-105">
      
      {/* Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
        {isNew && (
          <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
            NEW
          </span>
        )}
        {isHot && (
          <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
            HOT
          </span>
        )}
        {discount && (
          <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
            -{discount}%
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
        <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-white/90 shadow-lg hover:bg-white hover:scale-110 transition-all">
          <Heart className="w-4 h-4 text-gray-600" />
        </Button>
        <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-white/90 shadow-lg hover:bg-white hover:scale-110 transition-all" onClick={onQuickView}>
          <Eye className="w-4 h-4 text-gray-600" />
        </Button>
        <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-white/90 shadow-lg hover:bg-white hover:scale-110 transition-all">
          <Share2 className="w-4 h-4 text-gray-600" />
        </Button>
      </div>

      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10" />
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={onAddToCart}
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-6 space-y-3 relative z-10 bg-white/80 backdrop-blur-sm">
        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>

        {/* Product Name */}
        {/* <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3> */}

        {/* Description */}
        <p className="text-sm text-gray-600">
          {description.length > 30 ? description.slice(0, 32) + "..." : description}
        </p>

        {/* Price Section */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">
              {price}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {originalPrice}
              </span>
            )}
          </div>
          
          {/* Add to Cart Button */}
          <Button 
            size="sm"
            className="rounded-lg bg-blue-600 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg transition-all duration-300 hover:scale-105"
            onClick={onAddToCart}
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;