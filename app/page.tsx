import Head from "next/head";
import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">

      {/* Main Content */}
      <main className="px-6 sm:px-12 py-12">
        {/* Company Summary Section */}
        <section
          id="company-summary"
          className="flex justify-center mb-12"
        >
          <div className="p-0 border rounded-lg shadow-lg bg-white dark:bg-[var(--background)] max-w-4xl flex flex-col sm:flex-row items-stretch gap-0">
            {/* Image Section */}
            <div className="flex-shrink-0 w-full sm:w-1/2">
              <Image
                src="/summary.png" // Replace with your image path
                alt="Company Overview"
                width={500}
                height={500}
                className="rounded-l-lg object-cover w-full h-full"
              />
            </div>

            {/* Text Section */}
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-extrabold text-[var(--foreground)] mb-4 text-center sm:text-left">
                Welcome to LT-Controls
              </h3>
              <h4 className="text-1xl font-bold text-[var(--foreground)] mb-4 text-center sm:text-left">
                Your Automation Partner
              </h4>
              <p className="text-lg text-[var(--muted)] text-center sm:text-left">
                At LT-Controls, we specialize in delivering cutting-edge software solutions tailored to meet the unique needs of our clients. With a focus on innovation, quality, and customer satisfaction, we aim to empower businesses with technology that drives success.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="services"
          className="flex flex-col gap-12 items-center sm:items-start text-center sm:text-left"
        >
          <h2 className="text-4xl font-extrabold text-[var(--foreground)]">
            About LT-Controls
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white dark:bg-[var(--background)] hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">
                Our Team
              </h3>
              <p className="text-[var(--muted)]">
                We have a team of experienced software developers and designers who are passionate about creating user-friendly software solutions.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white dark:bg-[var(--background)] hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">
                Our Services
              </h3>
              <p className="text-[var(--muted)]">
                We offer a range of software development services including web development, mobile app development, and custom software development.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white dark:bg-[var(--background)] hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">
                Our Process
              </h3>
              <p className="text-[var(--muted)]">
                We follow an agile software development process that emphasizes collaboration, flexibility, and rapid prototyping to ensure that our clients are satisfied with the final product.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[var(--background)] py-6 text-center text-[var(--muted)]">
        <p className="text-sm">&copy; 2025 LT-Controls. All rights reserved.</p>
      </footer>
    </div>
  );
}