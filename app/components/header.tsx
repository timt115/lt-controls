import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky z-50 w-full flex flex-col justify-center p-4 bg-gray-100 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center gap-4 justify-center">
        <Image src="/LTControlsLogoCol.png" alt="LT-Controls Logo" width={200} height={0} />
      </div>

      {/* Navigation Section */}
      <nav className="mt-4 flex justify-center">
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
            >
              Our Projects
            </Link>
          </li>
          <li>
            <Link
              href="/management"
              className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
            >
              Management Team
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}