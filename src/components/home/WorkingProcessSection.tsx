import { CirclePercent } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { MessageCircleMore } from 'lucide-react';
import { Rocket } from 'lucide-react';

const WorkingProcessSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10 bg-white">
      <div className="flex justify-center items-center gap-20 mb-10">
        <h3 className="scroll-m-20 text-center text-5xl font-extrabold tracking-tight text-balance my-10">
          Our Working Process
        </h3>

        <p className="w-[40%]">
          From first idea to final delivery - our process is simple,
          collaborativ, and client.
          From first idea to final delivery - our process is simple,
          collaborativ, and client.
        </p>
      </div>

      <div className="flex gap-0 mt-5 h-52">
        <div className="flex flex-col justify-center items-center px-5 bg-white rounded-lg p-5 h-42 w-66 border border-gray-500">
          <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
            <CirclePercent size={32} className="text-chart-4"/>
          </div>
          <h3 className="text-xl font-bold mt-4">Discovery & Briefing</h3>
        </div>

        <div className="flex flex-col justify-center items-center px-5 bg-white rounded-lg p-5 h-42 w-66 mt-5  border border-gray-500">
          <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
            <Lightbulb size={32} className="text-chart-4"/>
          </div>
          <h3 className="text-xl font-bold mt-4">Concept & Design</h3>
        </div>

        <div className="flex flex-col justify-center items-center px-5 bg-white rounded-lg p-5 h-42 w-66 -mt-5  border border-gray-500">
          <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
            <MessageCircleMore size={32} className="text-chart-4"/>
          </div>
          <h3 className="text-xl font-bold mt-4">Feedback & Rivisions</h3>
        </div>

        <div className="flex flex-col justify-center items-center px-5 bg-white rounded-lg p-5 h-42 w-66 border border-gray-500">
          <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center">
            <Rocket size={32} className="text-chart-4"/>
          </div>
          <h3 className="text-xl font-bold mt-4">Final Delivary</h3>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcessSection;
