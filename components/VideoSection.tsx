export function VideoSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto px-4 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
          🎥 Watch Ashissh Kumaar in Action
        </h2>
        <div className="mx-auto mt-6 max-w-[320px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-gold/25">
          <iframe
            src="https://www.youtube.com/embed/sDYnadeJl38?autoplay=0&rel=0&modestbranding=1"
            title="Ashissh Kumaar - Astro Vastu Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full rounded-2xl"
            style={{ aspectRatio: "9/16", maxWidth: "320px", margin: "0 auto", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
