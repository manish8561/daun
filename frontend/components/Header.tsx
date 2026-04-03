import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xl">ਖ</span>
            </div>
            <h1 className="text-xl font-bold">Gurudwara Daun Sahib</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link
              href="/#history"
              className="hover:text-blue-200 transition-colors"
            >
              History
            </Link>
            <Link
              href="/#daily-routine"
              className="hover:text-blue-200 transition-colors"
            >
              Daily Routine
            </Link>
            <Link
              href="/duties-of-khalsa"
              className="hover:text-blue-200 transition-colors"
            >
              Duties of Khalsa
            </Link>
            <Link
              href="/donations"
              className="hover:text-blue-200 transition-colors"
            >
              Donations
            </Link>
            <Link
              href="/#contact"
              className="hover:text-blue-200 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
