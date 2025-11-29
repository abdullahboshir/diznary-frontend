// components/sections/TeamSection.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import TeamCard from "@/components/cards/TeamCard";

const creativeTeam = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Creative Director",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1763024244~exp=1763027844~hmac=702414b4aaf7e43a66365c4169f07041ffb60abe3f254b5d8938d176e2538a1c&w=1480",
    bio: "Award-winning creative director with 8+ years of experience in brand strategy and visual design across multiple industries and global brands.",
    skills: [
      "Brand Strategy",
      "Art Direction",
      "UI/UX",
      "Team Leadership",
      "Client Relations",
    ],
    projects: 150,
    experience: "8+ years",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Senior Designer",
    image:
      "https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?t=st=1763035105~exp=1763038705~hmac=e98421e8eea88a3e1256e332dc798c33e77ae52d238d218136fb8155d8a41dcc&w=1480",

    bio: "Specialized in logo design and brand identity systems that tell compelling stories and create lasting impressions for startups and enterprises.",
    skills: [
      "Logo Design",
      "Typography",
      "Illustration",
      "Brand Identity",
      "Print Design",
    ],
    projects: 89,
    experience: "6+ years",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "UI/UX Designer",
    image:
      "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?ga=GA1.1.862679258.1757229836&semt=ais_hybrid&w=740&q=80",
    bio: "Passionate about creating intuitive user experiences and beautiful interfaces that solve real user problems and drive business growth.",
    skills: [
      "Figma",
      "Prototyping",
      "User Research",
      "Web Design",
      "Mobile Design",
    ],
    projects: 67,
    experience: "5+ years",
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "Motion Designer",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1763024244~exp=1763027844~hmac=702414b4aaf7e43a66365c4169f07041ffb60abe3f254b5d8938d176e2538a1c&w=1480",
    bio: "Bringing brands to life through captivating animations and motion graphics that engage and inspire audiences across digital platforms.",
    skills: [
      "After Effects",
      "3D Animation",
      "Video Editing",
      "Visual Effects",
      "Cinema 4D",
    ],
    projects: 42,
    experience: "4+ years",
  }
];

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerView = 2; // Show 2 cards at a time
  const totalSlides = Math.ceil(creativeTeam.length / cardsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleTeamMembers = () => {
    const start = currentSlide * cardsPerView;
    return creativeTeam.slice(start, start + cardsPerView);
  };

  return (
    <section
      id="team"
      className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 flex items-center justify-center"
    >
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-1 items-center">
          {/* Left Content - 2/5 width */}
          <div className="lg:col-span-2 space-y-8 items-center">
            <div>
              <div className="flex justify-center mb-4 px-4 py-1 text-5xl font-bold">
                <Sparkles className="mr-2" strokeWidth={2} size={42} />
                Meet The Our Creattive Team
              </div>
              {/* <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Creative <span className="text-primary">Minds</span> Behind The
                Magic
              </h2> */}
            </div>

            <div className="lg:col-span-3 space-y-6 flex flex-col items-center justify-center">
              {/* Team Cards */}
              <div className="flex gap-0 justify-center items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex gap-4">
                  {getVisibleTeamMembers().map((member) => (
                    <TeamCard key={member.id} member={member} />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides - 1}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile Indicators */}
              <div className="flex justify-center lg:hidden">
                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-8 h-1 rounded-full transition-all ${
                        index === currentSlide ? "bg-primary" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-6 w-full mb-10 px-9">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Avg.</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>

            {/* desktop Indicators  */}
            <div className="flex gap-2 justify-center mb-10">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                <Users className="mr-2 h-4 w-4" />
                View All Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
