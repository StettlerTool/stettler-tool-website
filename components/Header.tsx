export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-bold">
            STETTLER TOOL & HARDWARE
          </h1>
          <p className="text-sm text-gray-600">
            Serving Central Alberta
          </p>
        </div>

        <div className="text-right">
          <p className="font-semibold">403-740-1430</p>
          <p className="text-sm text-gray-600">
            Mon–Fri 7:30–5:30
            Sat 9:00-2:00
          </p>
        </div>
      </div>
    </header>
  );
}