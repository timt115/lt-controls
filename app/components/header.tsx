import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex justify-between items-center p-4 bg-[var(--background)] shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <Image src="/ltdesign.png" alt="LT-Controls Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold text-[var(--foreground)]">
          LT-Controls
        </h1>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/aboutus" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
              Our Projects
            </Link>
          </li>
          <li>
            <Link href="/management" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
              Management Team
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}