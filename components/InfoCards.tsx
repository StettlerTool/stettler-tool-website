export default function InfoCards() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">

      <div className="grid gap-8 md:grid-cols-3">

        <div className="rounded-2xl border p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">
            📍 Visit Us
          </h3>

          <p>
            19453 Highway 12
            <br />
            Stettler, Alberta
            <br />
            T0C 2L0
          </p>
        </div>

        <div className="rounded-2xl border p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">
            🕒 Store Hours
          </h3>

          <p>Mon–Fri: 7:30 AM – 5:30 PM</p>
          <p>Saturday: 9:00 AM – 2:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="rounded-2xl border p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">
            ☎ Contact
          </h3>

          <p>403-740-1430</p>
          <p>frontdesk@stettlertool.ca</p>
        </div>

      </div>

    </section>
  );
}