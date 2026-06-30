export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo & Store Name */}
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-[#7A1F1F]">
            STETTLER TOOL & HARDWARE
          </h1>

          <p className="text-sm text-gray-600">
            Serving Central Alberta
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-8 font-medium text-gray-700 md:flex">
          <a href="#" className="hover:text-[#7A1F1F]">Home</a>
          <a href="#departments" className="hover:text-[#7A1F1F]">Departments</a>
          <a href="#about" className="hover:text-[#7A1F1F]">About</a>
          <a href="#contact" className="hover:text-[#7A1F1F]">Contact</a>
        </nav>

        {/* Phone & Button */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="text-right">
            <p className="font-bold text-lg">
              403-740-1430
            </p>

            <p className="text-sm text-gray-500">
              Mon–Fri 7:30–5:30 | Sat 9–2
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=19453+Highway+12+Stettler+AB"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#7A1F1F] px-5 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Get Directions
          </a>
        </div>

      </div>
    </header>
  );
}