const features = [
  {
    title: "Family Owned",
    text: "Proudly serving Stettler and Central Alberta with friendly, knowledgeable service."
  },
  {
    title: "Over 8,000 Products",
    text: "A large inventory of tools, hardware, plumbing, electrical and farm supplies."
  },
  {
    title: "Built For Farmers & Contractors",
    text: "We stock the products hardworking people depend on every day."
  },
  {
    title: "Expert Advice",
    text: "Our experienced staff can help you find the right product for the job."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Why Choose Stettler Tool & Hardware?
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-300">
          More than a hardware store—we're your local partner for projects,
          repairs and the work that keeps Central Alberta moving.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-gray-800 p-8 transition duration-300 hover:-translate-y-2 hover:bg-[#7A1F1F]"
            >
              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {feature.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}