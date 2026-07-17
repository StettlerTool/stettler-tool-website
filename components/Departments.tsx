const departments = [
  {
    title: "Professional Tools",
    description: "Power tools, hand tools, air tools and accessories.",
    icon: "🛠️",
  },
  {
    title: "Hardware & Fasteners",
    description: "Nuts, bolts, screws, anchors and everyday hardware.",
    icon: "🔩",
  },
  {
    title: "Farm & Ranch",
    description: "Fence posts, barb-wire, feed, hay and more.",
    icon: "🚜",
  },
  {
    title: "Electrical",
    description: "Wire, switches, breakers, lighting and electrical supplies.",
    icon: "⚡",
  },
  {
    title: "Plumbing",
    description: "PEX, ABS, PVC, fittings, valves and repair parts.",
    icon: "🚿",
  },
];

export default function Departments() {
  return (
    <section id="departments" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-center text-4xl font-bold text-gray-900">
        What You'll Find In Store
      </h2>

      <p className="mt-4 text-center text-lg text-gray-600">
        Thousands of products for farms, contractors, businesses and homeowners.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((department) => (
          <div
            key={department.title}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="text-5xl">{department.icon}</div>

            <h3 className="mt-6 text-2xl font-bold">
              {department.title}
            </h3>

            <p className="mt-4 text-gray-600">
              {department.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}