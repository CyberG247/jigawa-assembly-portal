
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title pb-4">Mission & Vision</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Card className="border-l-4 border-l-assembly-green shadow-md overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-serif font-bold text-assembly-green mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To legislate for the peace, order and good governance of Jigawa State through effective 
                  representation, oversight and constituency service. We are committed to enacting laws 
                  that address the needs and aspirations of our people while ensuring accountability 
                  in the use of public resources.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-assembly-deep-green shadow-md overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-serif font-bold text-assembly-deep-green mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be a model legislative institution that delivers quality representation, 
                  effective lawmaking, and responsive oversight that advances the socio-economic 
                  development of Jigawa State while upholding the highest standards of integrity, 
                  transparency and democratic values.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ManagementTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Ibrahim Ahmed",
      title: "Clerk of the House",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374",
      description: "Oversees the administrative functions of the House and provides procedural guidance."
    },
    {
      name: "Hajiya Fatima Usman",
      title: "Deputy Clerk (Legislative)",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376",
      description: "Manages all legislative processes and documentation for the House."
    },
    {
      name: "Mallam Suleiman Bello",
      title: "Director of Finance",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374",
      description: "Responsible for financial management and budgeting of the Assembly."
    },
    {
      name: "Mr. John Musa",
      title: "Director of Information",
      image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1470",
      description: "Handles public relations and media engagements for the House."
    },
  ];

  return (
    <section className="py-16 bg-assembly-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title pb-4">Management Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden shadow-md card-hover">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-lg text-assembly-deep-green">{member.name}</h3>
                <h4 className="text-assembly-green font-medium text-sm mb-2">{member.title}</h4>
                <p className="text-sm text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <Layout>
      <div className="bg-assembly-light-gray py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-assembly-deep-green mb-6">About</h1>
          <p className="text-lg max-w-3xl">
            The Jigawa State House of Assembly is the legislative arm of the Jigawa State Government, 
            established under Section 90 of the Constitution of the Federal Republic of Nigeria 1999 
            (as amended). It is responsible for making laws for the peace, order, and good governance 
            of the state.
          </p>
        </div>
      </div>
      
      <MissionVisionSection />
      <ManagementTeam />
    </Layout>
  );
};

export default About;
