
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const BillItem = ({
  title,
  status,
  date,
  description
}: {
  title: string;
  status: "passed" | "proposed" | "rejected";
  date: string;
  description: string;
}) => {
  const statusColors = {
    passed: "bg-green-100 text-green-800",
    proposed: "bg-blue-100 text-blue-800",
    rejected: "bg-red-100 text-red-800"
  };

  const statusLabels = {
    passed: "Passed",
    proposed: "Proposed",
    rejected: "Rejected"
  };

  return (
    <Card className="shadow-sm border-l-4 border-l-assembly-green">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-serif font-bold text-lg text-assembly-deep-green">{title}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {statusLabels[status]}
          </span>
        </div>
        <p className="mt-3 text-gray-700">{description}</p>
        <div className="mt-4 flex justify-end">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const MagazineItem = ({
  title,
  edition,
  date,
  cover
}: {
  title: string;
  edition: string;
  date: string;
  cover: string;
}) => {
  return (
    <Card className="overflow-hidden shadow-md card-hover">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={cover} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-serif font-bold text-lg text-assembly-deep-green">{title}</h3>
        <p className="text-sm text-gray-700">{edition}</p>
        <p className="text-sm text-gray-500">{date}</p>
        <Button variant="default" size="sm" className="mt-4 w-full bg-assembly-green hover:bg-assembly-deep-green flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download
        </Button>
      </CardContent>
    </Card>
  );
};

const ProceedingItem = ({
  title,
  date,
  size
}: {
  title: string;
  date: string;
  size: string;
}) => {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <h3 className="font-medium text-assembly-deep-green">{title}</h3>
          <p className="text-sm text-gray-500">{date} • {size}</p>
        </div>
        <Button variant="ghost" size="sm" className="text-assembly-green hover:text-assembly-deep-green hover:bg-assembly-light-gray flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download
        </Button>
      </CardContent>
    </Card>
  );
};

const Resources = () => {
  // Mock data for bills
  const bills = [
    {
      title: "Jigawa State Education Reform Bill",
      status: "passed" as const,
      date: "March 25, 2025",
      description: "A bill to reform the education sector and improve educational standards across Jigawa State."
    },
    {
      title: "Local Government Autonomy Bill",
      status: "proposed" as const,
      date: "April 15, 2025",
      description: "A bill to grant greater autonomy and financial independence to local government councils in Jigawa State."
    },
    {
      title: "Healthcare Access Improvement Bill",
      status: "proposed" as const,
      date: "April 10, 2025",
      description: "A bill to improve access to healthcare services for all residents of Jigawa State."
    },
    {
      title: "State Security Trust Fund Bill",
      status: "rejected" as const,
      date: "February 28, 2025",
      description: "A bill to establish a security trust fund for enhancing security operations in the state."
    }
  ];

  // Mock data for magazines
  const magazines = [
    {
      title: "The Legislator",
      edition: "Volume 8, Issue 1",
      date: "January 2025",
      cover: "https://images.unsplash.com/photo-1571867424488-4565932edb41?q=80&w=1374"
    },
    {
      title: "Assembly Quarterly",
      edition: "Volume 3, Issue 2",
      date: "April 2025",
      cover: "https://images.unsplash.com/photo-1549122728-f519709caa9c?q=80&w=1470"
    },
    {
      title: "Jigawa Progress Report",
      edition: "2025 Special Edition",
      date: "March 2025",
      cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1376"
    },
    {
      title: "Legislative Digest",
      edition: "Issue 24",
      date: "April 2025",
      cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1374"
    }
  ];

  // Mock data for proceedings
  const proceedings = [
    {
      title: "Votes and Proceedings - April 20, 2025",
      date: "April 20, 2025",
      size: "2.4 MB"
    },
    {
      title: "Votes and Proceedings - April 18, 2025",
      date: "April 18, 2025",
      size: "1.8 MB"
    },
    {
      title: "Votes and Proceedings - April 15, 2025",
      date: "April 15, 2025",
      size: "3.2 MB"
    },
    {
      title: "Votes and Proceedings - April 12, 2025",
      date: "April 12, 2025",
      size: "2.1 MB"
    },
    {
      title: "Votes and Proceedings - April 10, 2025",
      date: "April 10, 2025",
      size: "2.6 MB"
    },
    {
      title: "Votes and Proceedings - April 8, 2025",
      date: "April 8, 2025",
      size: "1.9 MB"
    }
  ];

  return (
    <Layout>
      <div className="bg-assembly-light-gray py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-assembly-deep-green mb-6">Resources</h1>
          <p className="text-lg max-w-3xl">
            Access official documents, publications, and records of the Jigawa State House of Assembly.
          </p>
        </div>
      </div>
      
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="bills" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="bills">Bills</TabsTrigger>
              <TabsTrigger value="magazines">Magazines</TabsTrigger>
              <TabsTrigger value="proceedings">Votes & Proceedings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bills">
              <div className="space-y-4 mt-4">
                {bills.map((bill, index) => (
                  <BillItem
                    key={index}
                    title={bill.title}
                    status={bill.status}
                    date={bill.date}
                    description={bill.description}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="magazines">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {magazines.map((magazine, index) => (
                  <MagazineItem
                    key={index}
                    title={magazine.title}
                    edition={magazine.edition}
                    date={magazine.date}
                    cover={magazine.cover}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="proceedings">
              <div className="space-y-2 mt-4">
                {proceedings.map((proceeding, index) => (
                  <ProceedingItem
                    key={index}
                    title={proceeding.title}
                    date={proceeding.date}
                    size={proceeding.size}
                  />
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-assembly-green text-assembly-green hover:bg-assembly-green hover:text-white">
                  View Older Proceedings
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
