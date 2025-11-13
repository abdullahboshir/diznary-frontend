import {
  PenLine,
  MoveUpRight,
  PenTool,
  Code,
  Smartphone,
  ShoppingCart,
  Search,
  Palette,
  Megaphone,
  Cloud,
  Layout,
  BarChart3,
  Server,
  Zap,
  Users,
  Shield,
} from "lucide-react";
import ProductCard from "@/components/cards/ProductCard";

const serviceCards = [
  {
    id: 1,
    iconStart: PenLine,
    iconEnd: MoveUpRight,
    title: "Brand Identity & Logo Design",
    description: "Building brand with strong visual identities that stand out.",
    stats: "500+ Projects Done",
    statsIcon: PenTool,
  },
  {
    id: 2,
    iconStart: Code,
    iconEnd: MoveUpRight,
    title: "Web Development",
    description:
      "Creating responsive and high-performance websites and applications.",
    stats: "300+ Projects Done",
    statsIcon: Code,
  },
  {
    id: 3,
    iconStart: Smartphone,
    iconEnd: MoveUpRight,
    title: "Mobile App Development",
    description: "Building native and cross-platform mobile applications.",
    stats: "200+ Projects Done",
    statsIcon: Smartphone,
  },
  {
    id: 4,
    iconStart: ShoppingCart,
    iconEnd: MoveUpRight,
    title: "E-commerce Solutions",
    description:
      "Developing complete online store solutions with secure payment systems.",
    stats: "150+ Projects Done",
    statsIcon: ShoppingCart,
  },
  {
    id: 5,
    iconStart: Search,
    iconEnd: MoveUpRight,
    title: "SEO Optimization",
    description:
      "Improving search engine rankings and driving organic traffic.",
    stats: "400+ Projects Done",
    statsIcon: BarChart3,
  },
];

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="py-12 md:py-24 lg:py-32 flex justify-center items-center"
    >
      <div className="container px-4 md:px-6">
        <h1 className="text-center text-5xl font-bold mb-8">Our Expertise</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {serviceCards.slice(0, 2).map((card) => (
            <ProductCard
              key={card.id}
              title={card.title}
              description={card.description}
              iconStart={card.iconStart}
              iconEnd={card.iconEnd}
              stats={card.stats}
              statsIcon={card.statsIcon}
            />
          ))}
        </div>

        {/* Second Row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.slice(2, 5).map((card) => (
            <ProductCard
              key={card.id}
              title={card.title}
              description={card.description}
              iconStart={card.iconStart}
              iconEnd={card.iconEnd}
              stats={card.stats}
              statsIcon={card.statsIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
