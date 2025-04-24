
import Layout from "@/components/layout/Layout";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { FileVideo, Book, Upload, Settings } from "lucide-react";
import AdminDashboard from "@/components/admin/AdminDashboard";
import AdminResources from "@/components/admin/AdminResources";
import AdminVideos from "@/components/admin/AdminVideos";
import { useState } from "react";

const Admin = () => {
  const [currentSection, setCurrentSection] = useState<'dashboard' | 'videos' | 'resources'>('dashboard');

  const renderContent = () => {
    switch (currentSection) {
      case 'videos':
        return <AdminVideos />;
      case 'resources':
        return <AdminResources />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-assembly-deep-green mb-6">Admin Panel</h1>
        <SidebarProvider>
          <div className="flex min-h-[600px] w-full gap-4 rounded-lg border">
            <Sidebar className="w-[240px] border-r">
              <SidebarHeader className="border-b px-4 py-2">
                <h2 className="font-semibold">Management</h2>
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setCurrentSection('dashboard')}
                      isActive={currentSection === 'dashboard'}
                    >
                      <Settings />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setCurrentSection('videos')}
                      isActive={currentSection === 'videos'}
                    >
                      <FileVideo />
                      <span>Videos</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setCurrentSection('resources')}
                      isActive={currentSection === 'resources'}
                    >
                      <Book />
                      <span>Resources</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
            <div className="flex-1 p-6">
              {renderContent()}
            </div>
          </div>
        </SidebarProvider>
      </div>
    </Layout>
  );
};

export default Admin;
