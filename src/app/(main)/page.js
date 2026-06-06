import Categories from "@/components/categories/Categories";
import Featured from "@/components/featured/Featured";
import HeroSection from "@/components/hero/Hero";
import ReadyToPlay from "@/components/ready/ReadyToPlay";
import WhySportNest from "@/components/why/WhySportNest";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <Featured></Featured>
      <WhySportNest></WhySportNest>
      <Categories></Categories>
      <ReadyToPlay></ReadyToPlay>
    </div>
  );
}
