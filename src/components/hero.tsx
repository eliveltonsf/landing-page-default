export default function Hero() {
  return (
    <section className="bg-white h-svh w-svw">
      <div className="mx-auto mt-28">
        {/* Section header */}
        <div className="max-w-6xl px-4 sm:px-6 mx-auto text-center pb-12 md:pb-16">
          <h2 className="h2 mb-4" data-aos="fade-up">
            Titulo 1
          </h2>
          <p
            className="text-xl text-gray-400 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Descrição 1 - Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry&apos;s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>

          <h1 className="h1 text-6xl font-love font-normal">Tópico 1</h1>
        </div>
      </div>
    </section>
  );
}
