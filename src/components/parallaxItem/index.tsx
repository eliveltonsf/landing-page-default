import { IMG1_VALUE, IMG2_VALUE } from "@/constants/imagesMoths";
import CarouselItem from "./CarouselItem";
import ParallaxItem from "./item";

export default function Timeline() {
  return (
    <section>
      <ParallaxItem
        title="Titulo 1"
        descrition="Descrição 1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        directionText="left"
        parallax={
          <div className="h-svh bg-fixed bg-[url('/images/parallax1.jpg')] bg-cover bg-center"></div>
        }
      >
        <CarouselItem slides={IMG1_VALUE} />
      </ParallaxItem>

      <ParallaxItem
        title="Titulo 2"
        descrition="Descrição 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        directionText="right"
        parallax={
          <div className="h-[100svh] bg-fixed bg-[url('/images/parallax2.jpg')] bg-cover bg-center"></div>
        }
      >
        <CarouselItem slides={IMG2_VALUE} />
      </ParallaxItem>
    </section>
  );
}
