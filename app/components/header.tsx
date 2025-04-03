import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky z-50 w-full flex flex-col justify-center p-4 bg-[var(--foreground)] shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center gap-4 justify-center">
        <Image src="/LTControlsLogoCol.png" alt="LT-Controls Logo" width={200} height={0} />
      </div>

      {/* Navigation Section */}
      <nav className="top-0 mt-4 flex justify-center sm-justify-between items-center w-50% px-8 sm:px-4">
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="text-[var(--text)] hover:text-[var(--primary)] transition-colors font-medium text-sm sm:text-base"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-[var(--text)] hover:text-[var(--primary)] transition-colors font-medium text-sm sm:text-base"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-[var(--text)] hover:text-[var(--primary)] transition-colors font-medium text-sm sm:text-base"
            >
              Our Projects
            </Link>
          </li>
          <li>
            <Link
              href="/management"
              className="text-[var(--text)] hover:text-[var(--primary)] transition-colors font-medium text-sm sm:text-base"
            >
              Management Team
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-[var(--text)] hover:text-[var(--primary)] transition-colors font-medium text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}