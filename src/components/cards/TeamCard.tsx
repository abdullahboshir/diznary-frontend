// components/cards/TeamCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Award, Zap } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  projects: number;
  experience: string;
}

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="group overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-primary/20 bg-white rounded-2xl">
      <CardContent className="p-2">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side - Content */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              {/* Name & Role */}
              <div className="mb-3">
                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {member.skills.slice(0, 3).map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-xs bg-primary/10 text-primary border-0"
                  >
                    {skill}
                  </Badge>
                ))}
                {member.skills.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{member.skills.length - 3} more
                  </Badge>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-4 text-sm text-muted-foreground pt-4 border-t">
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                <span>{member.projects}+ projects</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                <span>{member.experience}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-2/5 relative">
            <div className="relative h-48 md:h-full overflow-hidden rounded-lg">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </CardContent>
    </div>
  );
};

export default TeamCard;