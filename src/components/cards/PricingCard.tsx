// components/cards/PricingCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Zap, Crown, Sparkles } from "lucide-react";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  duration?: string;
  features: PricingFeature[];
  popular?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  buttonText?: string;
  onSelect?: () => void;
}

const PricingCard = ({
  title,
  description,
  price,
  originalPrice,
  duration = "one-time",
  features,
  popular = false,
  icon: Icon,
  buttonText = "Get Started",
  onSelect,
}: PricingCardProps) => {
  return (
    <div
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl rounded-2xl p-2 ${
        popular
          ? "border-2 border-primary scale-105 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg"
          : "border border-gray-200"
      }`}
    >
     
      {popular && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-gradient-to-r from-purple-900 to-purple-500 text-white px-3 py-1">
            <Crown className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}

      <div className="bg-black text-white rounded-lg p-3 mb-3">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-1">
            <div
              className={`p-3 rounded-full ${
                popular ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              <Icon className="w-6 h-6" />
            </div>
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <p className="text-gray-400 text-sm mt-2">{description}</p>
        </CardHeader>

        <div className="text-center">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-3xl font-bold text-chart-4">${price}</span>
            {originalPrice && (
              <span className="text-lg text-red-400 line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400 mt-1">{duration}</p>
        </div>
      </div>

      <CardContent className="space-y-6">
        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 text-sm">
              {feature.included ? (
                <Check
                  className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                    popular ? "text-green-600" : "text-gray-600"
                  }`}
                />
              ) : (
                <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400" />
              )}
              <span
                className={
                  feature.included
                    ? "text-gray-700"
                    : "text-gray-400 line-through"
                }
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          className={`w-full ${
            popular
              ? "bg-primary hover:bg-primary/90"
              : "bg-gray-900 hover:bg-gray-800"
          } text-white`}
          size="lg"
          onClick={onSelect}
        >
          {popular && <Zap className="w-4 h-4 mr-2" />}
          {buttonText}
        </Button>

        {/* Guarantee Badge */}
        <div className="text-center">
          <Badge variant="outline" className="text-xs">
            <Sparkles className="w-3 h-3 mr-1" />
            100% Satisfaction Guarantee
          </Badge>
        </div>
      </CardContent>
    </div>
  );
};

export default PricingCard;
