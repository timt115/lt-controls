import Head from "next/head";
import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">

      {/* Main Content */}
      <main className="px-6 sm:px-12 py-12">
        {/* Company Summary Section */}
        <section
          id="company-summary"
          className="flex justify-center mb-16"
        >
          <div className="p-0 border rounded-lg shadow-2xl max-w-5xl flex flex-col sm:flex-row items-stretch gap-0">
            {/* Image Section */}
            <div className="flex-shrink-0 w-full sm:w-3/5">
              <Image
                src="/summary.png"
                alt="Overview of LT-Controls' automation services"
                width={600}
                height={600}
                className="rounded-l-lg object-cover w-full h-full"
              />
            </div>

            {/* Text Section */}
            <div className="p-8 flex flex-col justify-center">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center sm:text-left">
                Welcome to 
              </h1>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center sm:text-left">
                LT-CONTROLS
              </h1>
              <h4 className="text-2xl font-bold text-gray-700 mb-6 text-center sm:text-left">
                Your Automation Partner
              </h4>
              <ul className="list-disc pl-6 space-y-4 text-lg">
                <li>
                  <p className="text-gray-600 font-semibold">
                    Offers professional service from PLC programming, HMI, and SCADA design.
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 font-semibold">
                    Over 20 years of experience.
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 font-semibold">
                    Emergency breakdown support.
                  </p>
                </li>
              </ul>
              {/* Call to Action */}
              <Link
                href="/about"
                className="mt-10 bg-blue-600 text-white px-4 py-2 text-center self-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="services"
          className="flex flex-col gap-5 items-center text-center px-6 sm:px-12 mb-12"
        >
          <h2 className="text-4xl font-extrabold text-[var(--text)] mb-6">
            About LT-CONTROLS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Card 1 */}
            <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-[var(--foreground)] hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-[var(--text)]">
                Our Team
              </h3>
              <p className="text-[var(--muted)]">
                We have a team of experienced software developers and designers who are passionate about creating user-friendly software solutions.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-[var(--foreground)] hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-[var(--text)]">
                Our Services
              </h3>
              <p className="text-[var(--muted)]">
                We offer a range of software development services including web development, mobile app development, and custom software development.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-[var(--foreground)] hover:shadow-2xl hover:scale-105 transition-transform duration-300">
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
            className="bg-blue-600 text-white px-4 py-2 rounded-lg  "
          >
            Contact Us
          </Link>
        </section>

      </main>

    </div>
  );
}
