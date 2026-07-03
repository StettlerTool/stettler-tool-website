import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-4">

          <Image
            src="/images/logo.png"
            alt="Stettler Tool & Hardware"
            width={260}
            height={70}
            priority
            className="h-14 w-auto"
          />

          <div className="hidden lg:block">
            <p className="text-sm text-gray-500">
              Serving Central Alberta Since 1987
            </p>
          </div>

        </a>

        {/* Navigation */}

        <nav className="hidden items-center gap-10 text-[17px] font-medium md:flex">
          <a href="#" className="transition hover:text-[#7A1F1F]">
            Home
          </a>

          <a href="#departments" className="transition hover:text-[#7A1F1F]">
            Departments
          </a>

          <a href="#about" className="transition hover:text-[#7A1F1F]">
            About
          </a>

          <a href="#contact" className="transition hover:text-[#7A1F1F]">
            Contact
          </a>
        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-6 md:flex">

          <div className="text-right">
            <p className="text-2xl font-bold">
              403-740-1430
            </p>

            <p className="text-sm text-gray-500">
              Mon–Fri 7:30–5:30 • Sat 9–2
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=19453+Highway+12+Stettler+AB"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#7A1F1F] px-6 py-3 font-semibold text-white transition hover:bg-[#5f1818]"
          >
            Get Directions
          </a>

        </div>

      </div>
    </header>
  );
}