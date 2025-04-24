
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

const AdminVideos = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Manage Videos</h2>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Video
        </Button>
      </div>
      <Card>
        <CardContent className="p-6">
          <p className="text-muted-foreground">No videos uploaded yet.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminVideos;
