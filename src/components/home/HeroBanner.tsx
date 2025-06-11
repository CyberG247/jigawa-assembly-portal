
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative min-h-[70vh] bg-assembly-light-gray flex items-center">
      {/* Background image updated with new uploaded image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/9be85908-09e4-457d-8391-3c56947293d5.png')`,
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-assembly-green/90 to-assembly-deep-green/70"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 drop-shadow-md">
            Welcome to the 8th Assembly
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 drop-shadow-sm">
            Jigawa State House of Assembly
          </h2>
          <p className="text-lg mb-8 max-w-2xl">
            Representing the people of Jigawa State with commitment to legislative excellence, 
            transparency and accountability in governance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-assembly-green hover:bg-assembly-light-gray hover:text-assembly-deep-green">
              <Link to="/legislators">Meet Your Legislators</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-red-600 hover:border-red-600">
              <Link to="/resources">View Our Resources</Link>
            </Button>
          </div>
          
          <div className="mt-16 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-xl">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/50807795-a69e-4f31-8b03-73021ad509c9.png" 
                alt="Assembly Logo" 
                className="w-16 h-16"
              />
              <div>
                <h3 className="font-serif text-assembly-green text-xl font-bold">Our Mission</h3>
                <p className="text-assembly-deep-green mt-2">
                  To legislate for the peace, order and good governance of Jigawa State through 
                  effective representation, oversight and constituency service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
