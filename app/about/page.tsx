import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>Contact Us | LT-CONTROLS</title>
        <meta
          name="description"
          content="Get in touch with LT-CONTROLS for 24/7 technical support, automation solutions, and business inquiries. Visit us or call our hotline for assistance."
        />
        <meta
          name="keywords"
          content="Contact LT-CONTROLS, Automation Support, 24/7 Technical Support, Automation Solutions, Business Hours"
        />
        <meta property="og:title" content="Contact Us | LT-CONTROLS" />
        <meta
          property="og:description"
          content="Get in touch with LT-CONTROLS for 24/7 technical support, automation solutions, and business inquiries."
        />
        <meta property="og:image" content="/favico.svg" />
        <meta property="og:url" content="https://www.lt-controls.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/favico.svg" />
        <link rel="canonical" href="https://www.lt-controls.com/contact" />
      </Head>

      <div className="min-h-screen bg-[var(--background)] text-gray-900 font-sans">
        {/* Main Content */}
        <main className="px-6 sm:px-12 py-12">
          {/* Welcome Section */}
          <section className="mb-12 text-center">
            <h2 className="text-4xl font-extrabold mb-6 text-[var(--primary)]">
              Welcome to LT Controls Pty Ltd
            </h2>
          </section>

          {/* About Us Section */}
          <section id="about" className="mb-12">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-4">
              LT-Controls was founded in 2018, and since then has strived to
              deliver high-quality effective solutions to our clients and
              projects.
            </p>
            <p className="text-lg mb-4">
              Across South-East Queensland, LT-Controls has been involved in
              greenfield and brownfield projects and is always looking for ways
              to satisfy the client’s requests. One of the ways we look to stand
              out among others is in the nature of our automation solutions.
              While many companies may provide a stand-alone solution to the
              client, LT makes an effort to integrate the provided system and
              solution into existing systems on site. This provides more ease of
              use and ensures efficiency in processes across the site.
            </p>
            <p className="text-lg">
              The employees of LT-Controls all place high value on the client’s
              requests and thoughts and will seek to provide the best solution
              for you. It is through this customer-centered approach that LT has
              been able to grow its client base and expand further into multiple
              industries.
            </p>
          </section>

          {/* Vision Section */}
          <section id="vision" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">
              Our vision at LT is to be a leader in providing Automation
              solutions across all industries including Food and Beverage, Oil
              and Gas, Water, Refrigeration, Mining, and Renewable Energy. This
              is achieved through high-quality design, efficiency in delivery,
              and quality of our service.
            </p>
          </section>

          {/* Mission Section */}
          <section id="mission" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              LT will continue to provide solutions and support to the growing
              Food and Beverage industry across Queensland with the desire to
              expand into the water, mining, oil & gas, and renewable energy
              sectors. We will ensure the happiness of our customers through
              hard work and problem-solving to guarantee an effective and
              optimal solution is achieved.
            </p>
          </section>

          {/* Values Section */}
          <section id="values" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>QUALITY:</strong> We strive to deliver the highest
                quality work with every job no matter the size. Our goal is to
                ensure the customer is satisfied with every aspect of our
                solutions.
              </li>
              <li>
                <strong>INTEGRATION:</strong> LT strives to integrate our
                solutions into the existing systems to ensure efficiency and
                optimization of processes.
              </li>
              <li>
                <strong>SAFETY:</strong> At LT, safety is a large part of how we
                approach any job, and we will always be looking for ways to
                improve the safety of every system we are involved with.
              </li>
              <li>
                <strong>FLEXIBILITY:</strong> We will approach each job with
                flexibility and are able to adapt to any unexpected changes that
                may occur throughout the project.
              </li>
              <li>
                <strong>COMMUNICATION:</strong> LT takes pride in communicating
                with our clients to ensure awareness of the current status of
                the work we are undertaking.
              </li>
            </ul>
          </section>

          {/* Services Section */}
          <section id="services" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our Services
            </h2>
            <p className="text-lg mb-6 text-center">
              LT has been providing automation services to multiple industries
              since 2018. We deliver high-quality electrical, instrumentation,
              control systems, and SCADA solutions for both greenfield and
              brownfield projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-6 rounded-lg shadow-lg bg-[var(--foreground)] text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  PLC Systems
                </h3>
                <img
                  src="/PLC.webp"
                  alt="PLC Systems"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Rockwell, Schneider, GuardLogix, Pilz, GE Fanuc, Mitsubishi,
                    Modicon, Panasonic, Hitachi IFM, Beckhoff and Omron, etc.
                  </li>
                  <li>Siemens Simatic Manager / Siemens TIA 15 - 17.</li>
                </ul>
              </div>
              {/* Card 2 */}
              <div className="p-6 rounded-lg shadow-lg bg-[var(--foreground)] text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  SCADA Systems
                </h3>
                <img
                  src="/SCADA.webp"
                  alt="SCADA Systems"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>CitectSCADA 7.1 / 7.2 / 2018 / PlantSCADA 2022.</li>
                  <li>ClearSCADA, RSView FT / Plant PAX, Experion.</li>
                  <li>Win CC, Adroit, Ignition and Wonderware.</li>
                </ul>
              </div>
              {/* Card 3 */}
              <div className="p-6 rounded-lg shadow-lg bg-[var(--foreground)] text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">HMI</h3>
                <img
                  src="/HMI.webp"
                  alt="HMI"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    RSView ME-Panel View, Adroit, Beijer, Cmore, Exor and
                    Weintek , Red Lion, etc.
                  </li>
                </ul>
              </div>
              {/* Card 4 */}
              <div className="p-6 rounded-lg shadow-lg bg-[var(--foreground)] hover:shadow-2xl text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  DCS Systems
                </h3>
                <img
                  src="/DCS.webp"
                  alt="DCS Systems"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Yokogawa , Honeywell , Foxboro.</li>
                </ul>
              </div>
              {/* Card 5 */}
              <div className="p-6 rounded-lg shadow-lg bg-[var(--foreground)] text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Other Services
                </h3>
                <img
                  src="/OTHERs.webp"
                  alt="Other Services"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    VSD drives (SEW Movi-kit/Movi-B/Movi-trak, PowerFlex, Omron,
                    Danfoss).
                  </li>
                  <li>SQL and OSIsoft PI Database.</li>
                  <li>
                    Modbus / ProfiBus / Fieldbus / IEC 61850and other convertors
                    and Gateways.
                  </li>
                  <li>Onsite Testing and Commissioning.</li>
                  <li>
                    Integration of stand-alone machinery into main plant system.
                  </li>
                  <li>
                    PLC and SCADA conversions (upgrades or between different
                    brands).
                  </li>
                </ul>
              </div>

              {/* Card 6 */}
              <div className="p-6 rounded-lg shadow-lg bg-[var(--foreground)] text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Network / Safety / Electrical
                </h3>
                <img
                  src="/NetworkSafetyElectrical.webp"
                  alt="Network / Safety / Electrical"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Networking (Layer 1 / Layer 2 / Layer 3 ( Cisco, Stratix),
                    Cyber security.
                  </li>
                  <li>Functional Safety design and verification.</li>
                  <li>
                    Electrical Design / LV Panels / Control Panels / Design
                    Drawings.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
