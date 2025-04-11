import Head from "next/head";

export default function Management() {
  return (
    <>
      <Head>
        <title>Our Management Team | LT Controls</title>
        <meta
          name="description"
          content="Meet the leadership team at LT Controls, including Young Tran and Clifford Leung, who drive innovation and success in automation solutions."
        />
        <meta
          name="keywords"
          content="LT Controls Management Team, Leadership, Young Tran, Clifford Leung, Automation Experts, Managing Directors, Project Management, Automation Solutions"
        />
        <meta property="og:title" content="Our Management Team | LT Controls" />
        <meta
          property="og:description"
          content="Discover the leaders behind LT Controls' success, including Young Tran and Clifford Leung, with expertise in automation and project management."
        />
        <meta property="og:image" content="/favico.svg" />
        <meta
          property="og:url"
          content="https://www.lt-controls.com/management"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Management Team | LT Controls"
        />
        <meta
          name="twitter:description"
          content="Meet the leadership team at LT Controls, including Young Tran and Clifford Leung, who drive innovation and success in automation solutions."
        />
        <meta name="twitter:image" content="/favico.svg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.lt-controls.com/management" />
      </Head>

      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
        {/* Header */}
        <header className="py-8 text-center">
          <h1 className="text-4xl font-extrabold text-[var(--primary)]">
            Our Management Team
          </h1>
          <p className="text-lg text-[var(--muted)] mt-4">
            Meet the leaders driving LT's success and innovation.
          </p>
        </header>

        {/* Main Content */}
        <main className="px-6 sm:px-12 py-12">
          <section className="max-w-4xl mx-auto space-y-8">
            {/* Young Tran */}
            <div className="flex flex-col gap-4 p-6 bg-[var(--foreground)] shadow-md rounded-lg sm:flex-row sm:items-center sm:gap-6 hover:shadow-lg transition-shadow">
              <img
                className="mx-auto block h-24 w-40 sm:mx-0 sm:shrink-0"
                src="/LTControlsLogoCol.png"
                alt="Young Tran Profile Image"
              />
              <div className="space-y-2 text-center sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-2xl font-bold text-[var(--primary)]">
                    Young Tran
                  </p>
                  <p className="text-lg text-[var(--secondary)] font-semibold">
                    Managing Director / State Manager
                  </p>
                </div>
                <p className="text-[var(--text)]">
                  Young is a founder of LT Controls, graduated from UQ with a Bachelor
                  of Engineering in Electrical and Electronics Engineering and
                  holds the Master of Project Management qualifications.
                </p>
                <p className="text-[var(--text)]">
                  He is a principal engineer with 25 years of experience in
                  control automation and electrical design, with a key focus on
                  project delivery and project management. He has worked in
                  multiple industries over the years and has built promising
                  relationships with clients who look forward to working with LT
                  to ensure the success of their plants. His vision is to build
                  LT into a leading automation service provider for Australia.
                </p>
              </div>
            </div>

            {/* Clifford Leung */}
            <div className="flex flex-col gap-4 p-6 bg-[var(--foreground)] shadow-md rounded-lg sm:flex-row sm:items-center sm:gap-6 hover:shadow-lg transition-shadow">
              <img
                className="mx-auto block h-24 w-40 sm:mx-0 sm:shrink-0"
                src="/LTControlsLogoCol.png"
                alt="Young Tran Profile Image"
              />
              <div className="space-y-2 text-center sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-2xl font-bold text-[var(--primary)]">
                    Clifford Leung
                  </p>
                  <p className="text-lg text-[var(--secondary)] font-semibold">
                    Managing Director / State Manager
                  </p>
                </div>
                <p className="text-[var(--text)]">
                  Clifford is a founder of LT Controls, graduated from UQ with a Bachelor
                  of Engineering in Computer Systems and biomedical engineering.
                </p>
                <p className="text-[var(--text)]">
                  Clifford is a competent control systems engineer with in-depth experience
                  in PLC, SCADA and HMI design, programming and commissioning,
                  and broad experience in other fields such as safety, variable
                  speed drives, communications networks, training and quoting
                  projects. Consistent track record of successfully completing
                  projects to required specifications, on time and within budget
                  from design through to commissioning, with projects ranging
                  from programming a HMI for a single OEM machine through to
                  automating entire factories.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
