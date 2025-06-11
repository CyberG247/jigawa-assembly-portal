
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const LegislatorCard = ({ 
  name, 
  constituency, 
  party, 
  phone, 
  email, 
  image 
}: { 
  name: string; 
  constituency: string; 
  party: string; 
  phone: string; 
  email: string; 
  image: string;
}) => {
  return (
    <Card className="overflow-hidden shadow-md card-hover">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={`${name}`}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-serif font-bold text-lg text-assembly-deep-green">{name}</h3>
        <div className="flex items-center mt-1">
          <span className="bg-assembly-green text-white px-2 py-0.5 rounded text-xs font-medium">
            {party}
          </span>
          <span className="text-sm text-gray-600 ml-2">
            {constituency}
          </span>
        </div>
        <div className="mt-3 space-y-1 text-sm">
          <p className="text-gray-700">Phone: {phone}</p>
          <p className="text-gray-700">Email: {email}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const CommitteeCard = ({
  name,
  chairman,
  description,
  image
}: {
  name: string;
  chairman: string;
  description: string;
  image: string;
}) => {
  return (
    <Card className="flex flex-col md:flex-row overflow-hidden shadow-md card-hover">
      <div className="md:w-1/3">
        <div className="h-full">
          <img 
            src={image} 
            alt={`${name} Committee`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <CardContent className="p-6 md:w-2/3">
        <h3 className="font-serif font-bold text-xl text-assembly-deep-green">{name} Committee</h3>
        <p className="text-assembly-green font-medium">Chairman: {chairman}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};

const Legislators = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for legislators
  const legislators = [
    {
      name: "Hon. Ibrahim Suleiman",
      constituency: "Dutse Constituency",
      party: "APC",
      phone: "080-1234-5678",
      email: "ibrahim.suleiman@jgsha.gov.ng",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1374"
    },
    {
      name: "Hon. Aisha Mohammed",
      constituency: "Ringim Constituency",
      party: "APC",
      phone: "080-2345-6789",
      email: "aisha.mohammed@jgsha.gov.ng",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376"
    },
    {
      name: "Hon. Umar Danladi",
      constituency: "Hadejia Constituency",
      party: "PDP",
      phone: "080-3456-7890",
      email: "umar.danladi@jgsha.gov.ng",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374"
    },
    {
      name: "Hon. Yusuf Ibrahim",
      constituency: "Kazaure Constituency",
      party: "APC",
      phone: "080-4567-8901",
      email: "yusuf.ibrahim@jgsha.gov.ng",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470"
    },
    {
      name: "Hon. Fatima Usman",
      constituency: "Gumel Constituency",
      party: "APC",
      phone: "080-5678-9012",
      email: "fatima.usman@jgsha.gov.ng",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1398"
    },
    {
      name: "Hon. Ahmed Garba",
      constituency: "Birnin Kudu Constituency",
      party: "PDP",
      phone: "080-6789-0123",
      email: "ahmed.garba@jgsha.gov.ng",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374"
    }
  ];

  // Mock data for committees
  const committees = [
    {
      name: "Finance and Appropriations",
      chairman: "Hon. Ibrahim Suleiman",
      description: "Oversees the state budget, financial policies, and expenditure monitoring.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1469"
    },
    {
      name: "Health",
      chairman: "Hon. Aisha Mohammed",
      description: "Responsible for legislation and oversight of healthcare delivery, health facilities, and medical education in the state.",
      image: "https://images.unsplash.com/photo-1631815585553-a8710e35c691?q=80&w=1470"
    },
    {
      name: "Education",
      chairman: "Hon. Yusuf Ibrahim",
      description: "Handles matters related to education policies, schools, universities and educational infrastructure development.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422"
    },
    {
      name: "Agriculture",
      chairman: "Hon. Ahmed Garba",
      description: "Focuses on agricultural development, irrigation, farming subsidies and food security initiatives.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1469"
    }
  ];

  const filteredLegislators = legislators.filter(legislator => 
    legislator.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    legislator.constituency.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="bg-assembly-light-gray py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-assembly-deep-green mb-6">Legislators</h1>
          <p className="text-lg max-w-3xl">
            Meet the distinguished members of the 8th Assembly of Jigawa State House of Assembly, 
            representing various constituencies across the state.
          </p>
        </div>
      </div>
      
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="legislators" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="legislators">Know Your Legislator</TabsTrigger>
              <TabsTrigger value="committees">House Committees</TabsTrigger>
            </TabsList>
            
            <TabsContent value="legislators">
              <div className="mb-8 relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by name or constituency..."
                  className="pl-10 border-assembly-green"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {filteredLegislators.map((legislator, index) => (
                  <LegislatorCard
                    key={index}
                    name={legislator.name}
                    constituency={legislator.constituency}
                    party={legislator.party}
                    phone={legislator.phone}
                    email={legislator.email}
                    image={legislator.image}
                  />
                ))}
              </div>
              
              {filteredLegislators.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600">No legislators found matching your search.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="committees">
              <div className="space-y-6">
                {committees.map((committee, index) => (
                  <CommitteeCard
                    key={index}
                    name={committee.name}
                    chairman={committee.chairman}
                    description={committee.description}
                    image={committee.image}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Legislators;
