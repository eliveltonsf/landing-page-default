import Gallery from "./gallery";

export default function PhotoAlbum() {
  return (
    <section className="h-auto w-svw bg-fixed bg-[url('/images/gallery.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="mx-auto bg-black bg-opacity-30">
        {/* Section header */}
        <div className="max-w-6xl px-4 sm:px-6 mx-auto text-center pb-12 md:pb-16">
          <h2 className="h2 p-12 text-white" data-aos="fade-up">
            Titulo para gallery
          </h2>

          <Gallery />
        </div>
      </div>
    </section>
  );
}
