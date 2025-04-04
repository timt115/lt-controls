export default function Management() {
    return (
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
                                Young is the founder of LT, graduated from UQ with a Bachelor of Engineering in Electrical and Electronics Engineering and holds the Master of Project Management qualifications.
                            </p>
                            <p className="text-[var(--text)]">
                                He is a principal engineer with 25 years of experience in control automation and electrical design, with a key focus on project delivery and project management. He has worked in multiple industries over the years and has built promising relationships with clients who look forward to working with LT to ensure the success of their plants. His vision is to build LT into a leading automation service provider for Australia.
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
                                Info
                            </p>
                            <p className="text-[var(--text)]">
                                Info
                            </p>
                        </div>
                    </div>
                    
                </section>
            </main>

        </div>
    );
}