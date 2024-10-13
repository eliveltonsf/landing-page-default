import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Interaction from "@/components/interaction";
import Parallax from "@/components/parallaxItem";
import PhotoAlbum from "@/components/photoAlbum";
import PlayMusic from "@/components/playMusic";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      <Banner />
      <Hero />
      <Parallax />
      <PhotoAlbum />
      <Interaction />
      <Footer />
      <PlayMusic />
    </div>
  );
}
