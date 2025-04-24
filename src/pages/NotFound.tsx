
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-assembly-light-gray p-4">
      <div className="text-center max-w-md">
        <img 
          src="/public/lovable-uploads/50807795-a69e-4f31-8b03-73021ad509c9.png" 
          alt="Jigawa State House of Assembly Logo" 
          className="h-24 mx-auto mb-6"
        />
        <h1 className="text-5xl font-serif font-bold mb-4 text-assembly-deep-green">404</h1>
        <p className="text-xl text-gray-700 mb-8">The page you are looking for cannot be found.</p>
        <Button asChild size="lg" className="bg-assembly-green hover:bg-assembly-deep-green">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
