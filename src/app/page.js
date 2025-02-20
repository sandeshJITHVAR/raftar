import Bollywood from "@/section/home/Bollywood";
import Categaroy from "@/section/home/Categaroy";
import CityNews from "@/section/home/CityNews";
import HeroSection from "@/section/home/HeroSection";
import MoreStories from "@/section/home/MoreStories";
import VideoNews2 from "@/section/home/VideoNews2";
import VideosNew1 from "@/section/home/VideosNew1";
import WebStories from "@/section/home/WebStories";

export default function Home() {
  return (
    <main className="">
       <HeroSection />
      <WebStories />
      <Categaroy />
      <VideosNew1 />
      <Bollywood />
      <VideoNews2 />

      
      <CityNews /> 


      <MoreStories/>
    </main>
  );
}
