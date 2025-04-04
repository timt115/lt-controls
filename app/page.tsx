import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/contactform";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-cover bg-center text-white py-20 px-6 sm:px-12"
        style={{ backgroundImage: "url('/automationhero.png')" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to LT-CONTROLS</h1>
          <p className="text-lg mb-6">
            Your trusted partner in delivering cutting-edge automation solutions.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-6 sm:px-12 py-12">
        {/* Company Summary Section */}
        <section
          id="company-summary"
          className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16"
        >
          {/* Image Section */}
          <div className="flex-shrink-0 w-full sm:w-1/2">
            <Image
              src="/summary.png"
              alt="Overview of LT-Controls' automation services"
              width={600}
              height={600}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Welcome to LT-CONTROLS
            </h2>
            <h4 className="text-2xl font-bold text-gray-700 mb-6">
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
            <div className="mt-6 flex gap-4 justify-center sm:justify-start">
              <Link
                href="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-lg font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex flex-col gap-5 items-center text-center px-6 sm:px-12 mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            About LT-CONTROLS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Card 1 */}
            <div className="p-6 rounded-lg shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Our Team</h3>
              <p className="text-gray-600">
                With over 20 years of experience, we bring unparalleled knowledge and skill to every project, ensuring reliable and efficient solutions.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-6 rounded-lg shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Our Services</h3>
              <p className="text-gray-600">
                We specialise in PLC programming, HMI design, and SCADA solutions, delivering high-quality automation solutions tailored to your needs.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-6 rounded-lg shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Our Process</h3>
              <p className="text-gray-600">
                We follow a structured and agile process to deliver automation solutions. From initial consultation to final implementation, we ensure collaboration, flexibility, and efficiency at every step.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex flex-col gap-8 items-center text-center px-6 sm:px-12 mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            If you have any questions or would like to learn more about our services, please feel free to contact us. We’re here to help!
          </p>
          <div className="w-full max-w-4xl">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}