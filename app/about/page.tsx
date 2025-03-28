
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] font-sans">
      {/* Header */}

      {/* Main Content */}  
      <main className="px-6 sm:px-12 py-12">
        {/* Welcome Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-extrabold text-center mb-6">
            Welcome to LT Controls Pty Ltd
          </h1>
        </section>

        {/* About Us Section */}
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-4">
            LT was founded in 2018, and since then has strived to deliver high-quality effective solutions to our clients and projects.
          </p>
          <p className="text-lg mb-4">
            Across South-East Queensland, LT has been involved in greenfield and brownfield projects and is always looking for ways to satisfy the client’s requests. One of the ways we look to stand out among others is in the nature of our automation solutions. While many companies may provide a stand-alone solution to the client, LT makes an effort to integrate the provided system and solution into existing systems on site. This provides more ease of use and ensures efficiency in processes across the site.
          </p>
          <p className="text-lg">
            The employees of LT all place high value on the client’s requests and thoughts and will seek to provide the best solution for you. It is through this customer-centered approach that LT has been able to grow its client base and expand further into multiple industries.
          </p>
        </section>

        {/* Vision Section */}
        <section id="vision" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">
            Our vision at LT is to be a leader in providing Automation solutions across all industries including Food and Beverage, Oil and Gas, Water, Refrigeration, Mining, and Renewable Energy. This is achieved through high-quality design, efficiency in delivery, and quality of our service.
          </p>
        </section>

        {/* Mission Section */}
        <section id="mission" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            LT will continue to provide solutions and support to the growing Food and Beverage industry across Queensland with the desire to expand into the water, mining, oil & gas, and renewable energy sectors. We will ensure the happiness of our customers through hard work and problem-solving to guarantee an effective and optimal solution is achieved.
          </p>
        </section>

        {/* Values Section */}
        <section id="values" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>QUALITY:</strong> We strive to deliver the highest quality work with every job no matter the size. Our goal is to ensure the customer is satisfied with every aspect of our solutions.
            </li>
            <li>
              <strong>INTEGRATION:</strong> LT strives to integrate our solutions into the existing systems to ensure efficiency and optimization of processes.
            </li>
            <li>
              <strong>SAFETY:</strong> At LT, safety is a large part of how we approach any job, and we will always be looking for ways to improve the safety of every system we are involved with.
            </li>
            <li>
              <strong>FLEXIBILITY:</strong> We will approach each job with flexibility and are able to adapt to any unexpected changes that may occur throughout the project.
            </li>
            <li>
              <strong>COMMUNICATION:</strong> LT takes pride in communicating with our clients to ensure awareness of the current status of the work we are undertaking.
            </li>
          </ul>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg mb-4">
            LT has been providing automation services to multiple industries since 2018. LT has been approached by many leading companies in their industries for automation solutions with a range of different systems.
          </p>
          <p className="text-lg mb-4">
            LT provides high-quality electrical, instrumentation, control systems, and SCADA solutions with greenfield and brownfield projects.
          </p>
          <p className="text-lg mb-4">
            With experience in many different SCADA systems and PLC systems as well as many different industries, LT stands out as being a reliable and promising vendor. Some of our key services can be found below:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>PLC Systems:</strong> Rockwell, Schneider, Siemens, Mitsubishi, and more.
            </li>
            <li>
              <strong>SCADA Systems:</strong> CitectSCADA, ClearSCADA, Ignition, Wonderware, and more.
            </li>
            <li>
              <strong>HMI:</strong> RSView ME-Panel View, Adroit, Beijer, and more.
            </li>
            <li>
              <strong>DCS Systems:</strong> Yokogawa, Honeywell, Foxboro.
            </li>
            <li>
              <strong>Others:</strong> VSD drives, SQL and OSIsoft PI Database, Modbus/ProfiBus/Fieldbus, and more.
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
}