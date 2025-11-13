// components/sections/PricingSection.tsx
import { PenTool, Brush, Zap, Crown } from "lucide-react";
import PricingCard from "@/components/cards/PricingCard";

const brandingPackages = [
  {
    title: "Starter Logo",
    description: "Perfect for startups and small businesses",
    price: "299",
    originalPrice: "399",
    duration: "one-time",
    icon: PenTool,
    features: [
      { text: "2 Initial Logo Concepts", included: true },
      { text: "2 Revision Rounds", included: true },
      { text: "Source File (AI, EPS)", included: true },
      { text: "PNG & JPEG Files", included: true },
      { text: "Social Media Kit", included: false },
      { text: "Brand Guidelines", included: false },
      { text: "Stationery Design", included: false },
      { text: "Priority Support", included: false },
    ],
    buttonText: "Start Project",
  },
  {
    title: "Brand Identity",
    description: "Complete branding solution for growing businesses",
    price: "799",
    originalPrice: "999",
    duration: "one-time",
    icon: Crown,
    popular: true,
    features: [
      { text: "4 Initial Logo Concepts", included: true },
      { text: "Unlimited Revisions", included: true },
      { text: "Source File (AI, EPS)", included: true },
      { text: "PNG & JPEG Files", included: true },
      { text: "Social Media Kit", included: true },
      { text: "Basic Brand Guidelines", included: true },
      { text: "Business Card Design", included: true },
      { text: "Priority Support", included: true },
    ],
    buttonText: "Get Brand Identity",
  },
  {
    title: "Enterprise Branding",
    description: "Full-scale branding for established companies",
    price: "1499",
    originalPrice: "1899",
    duration: "one-time",
    icon: Zap,
    features: [
      { text: "6+ Initial Logo Concepts", included: true },
      { text: "Unlimited Revisions", included: true },
      { text: "Source File (AI, EPS)", included: true },
      { text: "PNG & JPEG Files", included: true },
      { text: "Complete Social Media Kit", included: true },
      { text: "Comprehensive Brand Guidelines", included: true },
      { text: "Full Stationery Suite", included: true },
      { text: "24/7 Priority Support", included: true },
    ],
    buttonText: "Contact Sales",
  },
];

const PricingSection = () => {
  const handleSelectPackage = (packageTitle: string) => {
    console.log(`Selected package: ${packageTitle}`);
    // Add your selection logic here
  };

  return (
    <section className="flex justify-center items-center py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Logo & Branding Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package to build your brand identity. 
            All packages include source files and commercial usage rights.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {brandingPackages.map((pkg, index) => (
            <PricingCard
              key={index}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
              originalPrice={pkg.originalPrice}
              duration={pkg.duration}
              features={pkg.features}
              popular={pkg.popular}
              icon={pkg.icon}
              buttonText={pkg.buttonText}
              onSelect={() => handleSelectPackage(pkg.title)}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Need a custom package?{" "}
            <a href="#contact" className="text-primary font-medium hover:underline">
              Contact us for a tailored solution
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;