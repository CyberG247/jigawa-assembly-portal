
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const NewsItem = ({
  title,
  date,
  excerpt,
  image
}: {
  title: string;
  date: string;
  excerpt: string;
  image: string;
}) => {
  return (
    <Card className="overflow-hidden shadow-md card-hover">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <h3 className="font-serif font-bold text-lg text-assembly-deep-green">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-gray-700 line-clamp-3">{excerpt}</p>
        <Button variant="link" className="p-0 mt-2 text-assembly-green hover:text-assembly-deep-green">
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};

const VideoItem = ({
  title,
  date,
  thumbnail
}: {
  title: string;
  date: string;
  thumbnail: string;
}) => {
  return (
    <Card className="overflow-hidden shadow-md card-hover">
      <div className="relative aspect-video overflow-hidden group">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-assembly-green/80 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-serif font-bold text-lg text-assembly-deep-green">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </CardContent>
    </Card>
  );
};

const Media = () => {
  // Mock data for news
  const newsItems = [
    {
      title: "House Passes Local Government Reform Bill",
      date: "April 15, 2025",
      excerpt: "The Jigawa State House of Assembly has passed the Local Government Reform Bill aimed at strengthening governance at the grassroots level.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1470"
    },
    {
      title: "Assembly Approves 2025 Supplementary Budget",
      date: "April 10, 2025",
      excerpt: "The House has approved the 2025 Supplementary Budget of N25 billion, focusing on infrastructure development and healthcare.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1469"
    },
    {
      title: "Speaker Leads Delegation to National Conference",
      date: "April 5, 2025",
      excerpt: "The Right Honorable Speaker led a delegation to the National Conference of State Legislatures in Abuja.",
      image: "https://images.unsplash.com/photo-1560523159-6b681a1e1852?q=80&w=1470"
    },
    {
      title: "House Committee on Education Inspects School Projects",
      date: "April 1, 2025",
      excerpt: "Members of the House Committee on Education have conducted inspection visits to ongoing school renovation projects across the state.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422"
    }
  ];

  // Mock data for videos
  const videoItems = [
    {
      title: "Plenary Session - April 20, 2025",
      date: "April 20, 2025",
      thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1432"
    },
    {
      title: "Public Hearing on Healthcare Bill",
      date: "April 18, 2025",
      thumbnail: "https://images.unsplash.com/photo-1631815585553-a8710e35c691?q=80&w=1470"
    },
    {
      title: "Speaker's Address on State Development",
      date: "April 12, 2025",
      thumbnail: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1470"
    },
    {
      title: "Committee Meeting on Agriculture",
      date: "April 8, 2025",
      thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1469"
    }
  ];

  return (
    <Layout>
      <div className="bg-assembly-light-gray py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-assembly-deep-green mb-6">Media</h1>
          <p className="text-lg max-w-3xl">
            Stay informed with the latest news, updates, and proceedings from the Jigawa State House of Assembly.
          </p>
        </div>
      </div>
      
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="news" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="news">News Updates</TabsTrigger>
              <TabsTrigger value="videos">Live Proceedings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="news">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {newsItems.map((item, index) => (
                  <NewsItem
                    key={index}
                    title={item.title}
                    date={item.date}
                    excerpt={item.excerpt}
                    image={item.image}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos">
              <div className="mb-8 bg-assembly-light-gray rounded-lg p-6">
                <h2 className="font-serif text-2xl font-bold text-assembly-deep-green mb-4">Current Live Stream</h2>
                <div className="aspect-video bg-black/80 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <p className="text-white text-lg mb-4">No live session is currently in progress.</p>
                    <p className="text-white/70">The next plenary session is scheduled for Thursday, April 25, 2025 at 10:00 AM.</p>
                  </div>
                </div>
              </div>
              
              <h2 className="font-serif text-2xl font-bold text-assembly-deep-green mb-4">Recent Proceedings</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {videoItems.map((item, index) => (
                  <VideoItem
                    key={index}
                    title={item.title}
                    date={item.date}
                    thumbnail={item.thumbnail}
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

export default Media;
