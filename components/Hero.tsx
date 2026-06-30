import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-6">
      <div className="mx-auto max-w-6xl text-center">

        <Image
          src="/images/logo.jpg"
          alt="Stettler Tool & Hardware"
          width={420}
          height={180}
          className="mx-auto mb-10"
          priority
        />

        <p className="mb-3 text-lg font-semibold uppercase tracking-[0.25em] text-[#8B2323]">
          Proudly Serving Stettler & Central Alberta
        </p>

        <h1 className="text-5xl font-black leading-tight text-gray-900 md:text-7xl">
          Your Local Tool & Hardware Store
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-gray-600">
          Family owned and proudly serving
          <strong> farmers, contractors, homeowners and businesses </strong>
          throughout Central Alberta.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          With over <strong>8,000 products</strong> in stock, we carry quality
          tools, hardware, fasteners, plumbing, electrical supplies,
           farm supplies and much more.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <a
            href="tel:4037401430"
            className="rounded-xl bg-[#7A1F1F] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-red-700"
          >
            📞 Call Us
          </a>

          <a
            href="https://maps.google.com/?q=19453+Highway+12+Stettler+AB"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-gray-900 px-8 py-4 font-semibold transition hover:bg-gray-900 hover:text-white"
          >
            📍 Get Directions
          </a>

        </div>

      </div>
    </section>
  );
}