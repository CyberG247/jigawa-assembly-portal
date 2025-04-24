
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/home/HeroBanner";
import LeadershipSection from "@/components/home/LeadershipSection";
import QuickLinks from "@/components/home/QuickLinks";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <LeadershipSection />
      <QuickLinks />
    </Layout>
  );
};

export default Index;
