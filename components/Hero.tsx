import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,#7A1F1F,transparent_50%)]"></div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

        <Image
          src="/images/logo.jpg"
          alt="Stettler Tool & Hardware"
          width={220}
          height={220}
          priority
          className="mb-8"
        />

        <p className="mb-3 text-lg font-semibold uppercase tracking-[0.35em] text-[#D4A373]">
          Family Owned • Serving Central Alberta
        </p>

        <h1 className="max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">
          Your Trusted Tool & Hardware Store
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">
          From professional contractors and farmers to homeowners and industry,
          we're proud to supply quality tools, hardware, plumbing, electrical,
          paint, fasteners, and farm supplies.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <a
            href="#departments"
            className="rounded-lg bg-[#7A1F1F] px-8 py-4 font-semibold text-white transition hover:bg-[#5f1818]"
          >
            Explore Departments
          </a>

          <a
            href="https://maps.google.com/?q=19453+Highway+12+Stettler+AB"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-gray-900"
          >
            Visit Our Store
          </a>

        </div>

      </div>

    </section>
  );
}