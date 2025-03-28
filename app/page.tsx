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
          <div className="p-0 border rounded-lg shadow-lg bg-white dark:bg-[var(--foreground)] max-w-4xl flex flex-col sm:flex-row items-stretch gap-0">
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
              <h3 className="text-2xl font-extrabold text-[var(--text)] mb-4 text-center sm:text-left">
                Welcome to LT-Controls
              </h3>
              <h4 className="text-1xl font-bold text-[var(--text)] mb-4 text-center sm:text-left">
                Your Automation Partner
              </h4>
              <p className="text-lg text-[var(--text)] text-center sm:text-left">
                At LT-Controls, we specialize in delivering cutting-edge software solutions tailored to meet the unique needs of our clients. With a focus on innovation, quality, and customer satisfaction, we aim to empower businesses with technology that drives success.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="services"
          className="flex flex-col gap-5 items-center sm:items-start text-center sm:text-left ml-20 mr-20 mb-12"
        >
          <h2 className="text-4xl font-extrabold text-[var(--text)] ">
            About LT-Controls
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white dark:bg-[var(--foreground)] hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-[var(--text)]">
                Our Team
              </h3>
              <p className="text-[var(--muted)]">
                We have a team of experienced software developers and designers who are passionate about creating user-friendly software solutions.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white dark:bg-[var(--foreground)] hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-[var(--text)]">
                Our Services
              </h3>
              <p className="text-[var(--muted)]">
                We offer a range of software development services including web development, mobile app development, and custom software development.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-6 border rounded-lg shadow-lg bg-white dark:bg-[var(--foreground)] hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-[var(--text)]">
                Our Process
              </h3>
              <p className="text-[var(--muted)]">
                We follow an agile software development process that emphasizes collaboration, flexibility, and rapid prototyping to ensure that our clients are satisfied with the final product.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex flex-col gap-5 items-center sm:items-start text-center sm:text-left ml-20 mr-20 mb-12"
        >
          <h2 className="text-4xl font-extrabold text-[var(--text)] ">
            Get in Touch
          </h2>
          <p className="text-lg text-[var(--muted)] mb-4">
            If you have any questions or would like to learn more about our services, please feel free to contact us.
          </p>
          <Link
            href="/contact"
            className="bg-[var(--foreground)] text-[var(--text)] px-4 py-2 rounded-lg hover:bg-[var(--primary)] hover:text-[var(--text)]transition-colors "
          >
            Contact Us
          </Link>
        </section>
        
      </main>

      {/* Footer */}
    </div>
  );
}
