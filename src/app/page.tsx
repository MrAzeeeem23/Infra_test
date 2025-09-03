import CommunityCulture from "@/components/sections/CommunityCulture";
import ConsultingSection from "@/components/sections/ConsultingSection ";
import CoursesSection from "@/components/sections/CoursesSection";
import FinalCTAs from "@/components/sections/FinalCTAs";
import HeroSection from "@/components/sections/HeroSection";
import KnowledgeGrowth from "@/components/sections/KnowledgeGrowth";
import MentorshipSection from "@/components/sections/MentorshipSection";
import MissionSection from "@/components/sections/MissionSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import UpcomingAssets from "@/components/sections/UpcomingAssets";
import Footer from "@/components/ui/footer/Footer";
import NavBar from "@/components/ui/header/NavBar";


export default function Home() {
  return (
    <div className="bg-black">
      <NavBar />
      <HeroSection />
      <CoursesSection />
      <MentorshipSection />
      <KnowledgeGrowth />
      <NewsletterSection />
      <UpcomingAssets />
      <ConsultingSection />
      <CommunityCulture />
      <MissionSection />
      <FinalCTAs />
      <Footer />
    </div>
  );
}
