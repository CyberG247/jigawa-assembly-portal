
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, FileClock, Info, MessageSquare } from "lucide-react";

const QuickLinks = () => {
  const links = [
    {
      title: "About the Assembly",
      description: "Learn about our mission, vision, and the management team behind the House.",
      icon: <Info className="h-10 w-10 text-assembly-green" />,
      link: "/about"
    },
    {
      title: "Bills & Proceedings",
      description: "Access information about current and past bills, votes, and proceedings.",
      icon: <FileClock className="h-10 w-10 text-assembly-green" />,
      link: "/resources"
    },
    {
      title: "House Committees",
      description: "Explore our various committees and their important work for the state.",
      icon: <BookOpen className="h-10 w-10 text-assembly-green" />,
      link: "/legislators"
    },
    {
      title: "Contact Your Legislator",
      description: "Reach out to your constituency representative with your concerns.",
      icon: <MessageSquare className="h-10 w-10 text-assembly-green" />,
      link: "/enquiries"
    }
  ];

  return (
    <section className="py-16 bg-assembly-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title pb-4">Quick Access</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {links.map((link, index) => (
            <Card key={index} className="border-none shadow-md card-hover">
              <CardHeader>
                <div className="mb-2">{link.icon}</div>
                <CardTitle className="text-assembly-deep-green">{link.title}</CardTitle>
                <CardDescription>{link.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="default" className="w-full bg-assembly-green hover:bg-assembly-deep-green">
                  <Link to={link.link}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
