import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type LeaderProps = {
  title: string;
  name: string;
  party: string;
  constituency: string;
  bio: string;
  imageSrc: string;
};

const LeaderCard = ({ title, name, party, constituency, bio, imageSrc }: LeaderProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={imageSrc} 
          alt={`${title} - ${name}`}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-assembly-deep-green">{title}</h3>
        <h4 className="text-lg font-bold mt-1">{name}</h4>
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-assembly-light-gray px-2 py-1 rounded text-xs font-medium">
            {party}
          </span>
          <span className="text-sm text-gray-600">
            {constituency}
          </span>
        </div>
        <p className="mt-4 text-gray-700 line-clamp-4">{bio}</p>
        <Button asChild variant="outline" className="w-full mt-4 border-assembly-green text-assembly-green hover:bg-assembly-green hover:text-white">
          <Link to="/legislators">View Profile</Link>
        </Button>
      </div>
    </div>
  );
};

const LeadershipSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title pb-4">8th Assembly Leadership</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <LeaderCard
            title="Right Honourable Speaker"
            name="RT. Hon. QS. Haruna Aliyu Dangyatin"
            party="APC"
            constituency="Miga"
            bio="Respected statesman with over 15 years of public service experience. A distinguished legislator committed to constitutional development and democratic governance in Jigawa State."
            imageSrc="/lovable-uploads/62adb793-4ebb-45e3-8f82-a111c345a797.png"
          />
          
          <LeaderCard
            title="Deputy Speaker"
            name="Hon. Lorem Ipsum Dolor"
            party="APC"
            constituency="Sit Amet"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            imageSrc="/lovable-uploads/1b57d621-6074-4a6b-8e27-47690c6275d5.png"
          />
          
          <LeaderCard
            title="Majority Leader"
            name="Hon. Lawan Mohd Dansure"
            party="APC"
            constituency="Roni"
            bio="Long-standing member of the House with expertise in budgeting and fiscal responsibility. Champions transparency in governance and community development projects."
            imageSrc="/lovable-uploads/8649ae83-1245-4594-8a1b-f65d6b27144f.png"
          />
          
          <LeaderCard
            title="Minority Leader"
            name="Hon. Yahaya Zakari"
            party="PDP"
            constituency="Fagam"
            bio="Experienced parliamentarian focused on providing effective opposition and ensuring accountability. Advocates for balanced representation and inclusive policy development."
            imageSrc="/lovable-uploads/3e5dd972-2d08-4c29-a2d3-764f3df48d44.png"
          />
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-assembly-green hover:bg-assembly-deep-green">
            <Link to="/legislators">View All Members</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
