// components/sections/ClientReviewsSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechStart Inc",
    role: "CEO",
    rating: 5,
    comment:
      "Working with this team was exceptional. They delivered beyond our expectations and the website has increased our conversions by 40%.",
    avatar:
      "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1763201686~exp=1763205286~hmac=3dacd0fbf997c8c56e166b1471c4c9f587481d284c7c56247cfbbd72c0e36010&w=1480",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "DesignStudio",
    role: "Creative Director",
    rating: 5,
    comment:
      "Professional, creative, and incredibly efficient. The branding they created perfectly captures our company's vision.",
    avatar:
      "https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?t=st=1763204219~exp=1763207819~hmac=0717af7ba09d574a58173743e75f4a6bd14da25604914501dd5e2b7b5359aeea&w=1480",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "GrowthMetrics",
    role: "Marketing Head",
    rating: 5,
    comment:
      "Outstanding service from start to finish. Their attention to detail and communication throughout the project was impressive.",
    avatar: "/api/placeholder/100/100",
  },
  {
    id: 4,
    name: "David Kim",
    company: "InnovateLabs",
    role: "Product Manager",
    rating: 5,
    comment:
      "The mobile app they developed is flawless. User feedback has been incredibly positive and engagement is through the roof.",
    avatar: "/api/placeholder/100/100",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    company: "EduTech Solutions",
    role: "Founder",
    rating: 5,
    comment:
      "They transformed our complex requirements into a beautiful, user-friendly platform. Couldn't be happier with the results!",
    avatar: "/api/placeholder/100/100",
  },
  {
    id: 6,
    name: "Alex Martinez",
    company: "GreenLife Co",
    role: "Operations Director",
    rating: 5,
    comment:
      "Fast, reliable, and incredibly talented. The e-commerce site they built has doubled our online sales in just three months.",
    avatar: "/api/placeholder/100/100",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 ">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-3 h-3 ${
            index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const ClientReviewsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className=" px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="flex gap-6 overflow-auto content-center">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="flex flex-col items-center hover:shadow-lg transition-shadow duration-300 mt-20"
            >
              <Avatar className="flex justify-center items-center -mt-14 w-20 h-20 bg-gray-300 border-3 border-white rounded-full overflow-hidden relative">
                <AvatarImage
                  src={review.avatar}
                  className="object-cover w-full h-full"
                />
                <AvatarFallback className="text-xl font-semibold">
                  {review.name[0]}
                </AvatarFallback>
              </Avatar>

              {/* Client Info */}
              <div className="flex items-center -mt-3">
                <div>
                  <div className="font-semibold text-gray-900 text-center text-2xl">
                    {review.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {review.role}, {review.company}
                  </div>
                </div>
              </div>
              <CardContent className=" w-96">
                {/* Rating */}

                {/* Comment */}
                <p className="text-gray-700 my-4 leading-relaxed">
                  "{review.comment}"
                </p>
                <StarRating rating={review.rating} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600">Projects Done</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewsSection;
