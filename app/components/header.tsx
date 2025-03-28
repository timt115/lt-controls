import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" sticky z-50 w-full flex-direction:column justify-content:center p-4 bg-[var(--foreground)] shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center gap-4 justify-center">
        <Image src="/Logo with Name Final CMYK.png" alt="LT-Controls Logo" width={200} height={0} />
      </div>

      {/* Navigation Section */}
      <nav className="top-0 mt-4 flex justify-center">
        <ul className="flex gap-6 justify-content:center">
          <li>
            <Link href="/" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
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