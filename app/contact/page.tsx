import ContactForm from "../components/contactform";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | LT Controls</title>
        <meta
          name="description"
          content="Get in touch with LT Controls for 24/7 technical support, automation solutions, and business inquiries. Visit us or call our hotline for assistance."
        />
        <meta
          name="keywords"
          content="LT Controls, LTControls, ltcontrol,Contact LT Controls, Automation Support, 24/7 Technical Support, Automation Solutions, Business Hours"
        />
        <meta property="og:title" content="Contact Us | LT Controls" />
        <meta
          property="og:description"
          content="Get in touch with LT-Controls for 24/7 technical support, automation solutions, and business inquiries."
        />
        <meta property="og:image" content="/favico.ico" />
        <meta property="og:url" content="https://www.lt-controls.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/favico.ico" />
        <link rel="canonical" href="https://www.lt-controls.com/contact" />
      </Head>

      <div className="min-h-screen bg-[var(--background)] text-[var(--text)] font-sans">
        {/* Header */}
        <header className="py-8 text-center">
          <h1 className="text-4xl font-extrabold text-[var(--primary)]">
            Contact Us
          </h1>
          <p className="text-lg text-[var(--muted)] mt-4">
            Share your problems with us, we will fix it!
          </p>
        </header>

        {/* Main Content */}
        <main className="px-6 sm:px-12 py-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {/* Urgent Support Section */}
            <section className="bg-[var(--foreground)] shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-3xl font-bold text-[var(--text)] mb-4">
                FOR URGENT BREAKDOWN SUPPORT
              </h2>
              <p className="text-lg text-[var(--text)]">
                <strong>PRODUCTION STOPPED?</strong> We have a team of
                well-experienced engineers and offer 24/7 technical support.
                Call us on our 24 hours support hotline to experience
                first-class automation support services.
              </p>
              <p className="mt-4 text-2xl font-bold text-[var(--danger)]">
                24 HOURS SUPPORT HOTLINE
              </p>
              <p className="text-lg text-[var(--text)]">+61 428 600 686</p>
            </section>

            {/* Contact Form Section */}

            <section>
              <ContactForm />
            </section>

            {/* Business Details Section */}
            <section className="bg-[var(--foreground)] shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-3xl font-bold text-[var(--text)] mb-4">
                Better yet, see us in person!
              </h2>
              <p className="text-lg text-[var(--text)]">
                We love our customers, so feel free to visit during normal
                business hours.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-lg">
                  <strong>LT Controls Pty Ltd</strong>
                </p>
                <p className="text-lg">
                  Unit 8B / 1990 Logan Road, Upper Mount Gravatt Queensland 4122,
                  Australia
                </p>
                <p className="text-lg">
                  <strong>Phone:</strong> +61 428 600 686
                </p>
                <p className="text-lg">
                  <strong>Email:</strong> sales@lt-controls.com
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-[var(--text)]">Hours</h3>
                <ul className="mt-2 text-lg text-[var(--text)]">
                  <li>Mon : 8:30 am – 4:30 pm</li>
                  <li>Tue : 8:30 am – 4:30 pm</li>
                  <li>Wed : 8:30 am – 4:30 pm</li>
                  <li>Thu : 8:30 am – 4:30 pm</li>
                  <li>Fri : 8:30 am – 4:30 pm</li>
                  <li>Sat : Closed</li>
                  <li>Sun : Closed</li>
                </ul>
              </div>
            </section>

            <section className="bg-[var(--foreground)] shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-3xl font-bold text-[var(--text)] mb-4">
                Find Us Here
              </h2>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%", height: 0 }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJQeLQQTRbkWsRhZ100eOzWIA&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                ></iframe>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
