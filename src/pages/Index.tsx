import { Hero } from "@/components/Hero";
import { Discover } from "@/components/Discover";
import { Culture } from "@/components/Culture";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Discover />
      <Culture />
      <Contact />
    </main>
  );
};

export default Index;