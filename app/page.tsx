import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/contactform";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* Global Metadata */}
      <Head>
        <title>LT Controls | Your Automation Partner in Brisbane, Australia</title>
        <meta
          name="description"
          content="LT Controls specializes in delivering cutting-edge automation solutions, including PLC programming, HMI design, and SCADA systems. Located in Brisbane, Australia."
        />
        <meta
          name="keywords"
          content="LT Controls, LTControls, LT Control,ltcontrols, ltcontrol, Brisbane, Australia, Automation, PLC programming, HMI design, SCADA systems, Industrial Automation"
        />
        <meta
          property="og:title"
          content="LT Controls | Your Automation Partner"
        />
        <meta
          property="og:description"
          content="LT Controls specializes in delivering cutting-edge automation solutions."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/favico.ico" />
        <meta property="og:url" content="https://www.lt-controls.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/favico.ico" />
        <link rel="canonical" href="https://www.lt-controls.com" />
      </Head>

      <script type="application/ld+json">
  {`{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LT Controls",
    "url": "https://www.lt-controls.com",
    "logo": "https://www.lt-controls.com/favico.ico",
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brisbane",
      "addressCountry": "AU"
    }
  }`}
</script>

      <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative bg-cover bg-center text-white py-20 px-6 sm:px-12"
          style={{ backgroundImage: "url('/bghero.png')" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold letter-spacing-widest mb-4 sm-text-l ">
              LT CONTROLS
            </h1>
            <p className="text-lg mb-6">
              Your trusted partner in delivering cutting-edge automation
              solutions.
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
        <main className="px-6 sm:px-12 py-12 bg-white">
          {/* Company Summary Section */}
          <section
            id="company-summary"
            className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16"
          >
            {/* Image Section */}
            <div className="flex-shrink-0 w-full sm:w-1/2">
              <Image
                src="/summary.png"
                alt="Overview of LT Controls' automation services"
                width={600}
                height={600}
                className="rounded-lg object-cover w-full h-full loading-lazy"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center text-center sm:text-left">
              <h2 className="text-3xl text-[var(--primary)] font-extrabold mb-4">
                Welcome to LT CONTROLS
              </h2>
              <h4 className="text-2xl font-bold text-[var(--secondary)] mb-6">
                Your Automation Partner
              </h4>
              <ul className="list-disc pl-6 space-y-4 text-lg">
                <li>
                  <p className="text-gray-600 font-semibold">
                    Offers professional service from PLC programming, HMI, and
                    SCADA design.
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
            <h2 className="text-4xl font-extrabold text-[var(--primary)] mb-6">
              About LT Controls
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {/* Card 1 */}
              <div className="p-0 rounded-lg shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-[200px]">
                  <Image
                    src="/team.webp"
                    alt="Our Team"
                    fill
                    className="rounded-t-lg object-cover loading-lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900">
                    Our Team
                  </h3>
                  <p className="text-gray-600">
                    With over 20 years of experience, we bring unparalleled
                    knowledge and skill to every project, ensuring reliable and
                    efficient solutions.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="p-0 rounded-lg shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-[200px]">
                  <Image
                    src="/services.webp"
                    alt="Our Services"
                    fill
                    className="rounded-t-lg object-cover loading-lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900">
                    Our Services
                  </h3>
                  <p className="text-gray-600">
                    We specialise in PLC programming, HMI design, and SCADA
                    solutions, delivering high-quality automation solutions
                    tailored to your needs.
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="p-0 rounded-lg shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-[200px]">
                  <Image
                    src="/process.webp"
                    alt="Our Process"
                    fill
                    className="rounded-t-lg object-cover loading-lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900">
                    Our Process
                  </h3>
                  <p className="text-gray-600">
                    We follow a structured and agile process to deliver
                    automation solutions. From initial consultation to final
                    implementation, we ensure collaboration, flexibility, and
                    efficiency at every step.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trustedby Section */}
          <section id="clients" className="py-12 text-center">
            <h2 className="text-4xl font-extrabold text-[var(--primary)] mb-6">
              Trusted By
            </h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-5 justify-items-center gap-8 bg-white p-6 rounded-lg shadow-lg m-auto max-w-4xl sm:grid-cols-3">
                <Image
                  src="/acc-logo.jpg"
                  alt="Client 1"
                  width={100}
                  height={50}
                  className="loading-lazy"
                />
                <Image
                  src="/jbs-logo.png"
                  alt="Client 2"
                  width={100}
                  height={50}
                  className="loading-lazy"
                />
                <Image
                  src="/rpf-logo.avif"
                  alt="Client 3"
                  width={100}
                  height={50}
                  className="loading-lazy"
                />
                <Image
                  src="/kpc-logo.avif"
                  alt="Client 4"
                  width={100}
                  height={50}
                  className="loading-lazy"
                />
                <Image
                  src="/primo-logo.png"
                  alt="Client 5"
                  width={100}
                  height={50}
                  className="loading-lazy"
                />
                <Image
                  src="/teys-logo.png"
                  alt="Client 6"
                  width={100}
                  height={50}
                  className="loading-lazy"
                />
                <Image
                  src="/dexion-logo.png"
                  alt="Client 7"
                  width={200}
                  height={100}
                  className="justify-self-center align-self-center loading-lazy"
                />
                <Image
                  src="/norco-logo.jpg"
                  alt="Client 8"
                  width={100}
                  height={50}
                  className="loading-lazy"
                />
                <Image
                  src="/grove-logo.svg"
                  alt="Client 9"
                  width={100}
                  height={50}
                  className="loading-lazy"
                />
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="flex flex-col gap-8 items-center text-center px-6 sm:px-12 mb-12"
          >
            <h2 className="text-4xl font-extrabold text-[var(--primary)]">
              Get in Touch
            </h2>
            <p className="text-lg text-[var(--secondary)] max-w-2xl">
              If you have any questions or would like to learn more about our
              services, please feel free to contact us. We’re here to help!
            </p>
            <div className="w-full max-w-4xl ">
              <ContactForm />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
