export default function Contact() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
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
                {/* Urgent Support Section */}
                <section className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">
                        FOR URGENT BREAKDOWN SUPPORT
                    </h2>
                    <p className="text-lg text-[var(--foreground)]">
                        <strong>PRODUCTION STOPPED?</strong> We have a team of well-experienced engineers and offer 24/7 technical support. Call us on our 24 hours support hotline to experience first-class automation support services.
                    </p>
                    <p className="mt-4 text-2xl font-bold text-[var(--secondary)]">
                        24 HOURS SUPPORT HOTLINE
                    </p>
                    <p className="text-lg text-[var(--foreground)]">+61 428 600 686</p>
                </section>

                {/* Contact Form Section */}
                <section className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">
                        Contact Us
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-lg font-semibold">
                                Name*
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border border-[var(--muted)] rounded-lg p-2"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold">
                                Email*
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-[var(--muted)] rounded-lg p-2"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg font-semibold">
                                Message*
                            </label>
                            <textarea
                                id="message"
                                className="w-full border border-[var(--muted)] rounded-lg p-2"
                                placeholder="Your Message"
                                rows={4}
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="file" className="block text-lg font-semibold">
                                Attach Files
                            </label>
                            <input
                                type="file"
                                id="file"
                                className="w-full border border-[var(--muted)] rounded-lg p-2"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[var(--primary)] text-white font-bold py-2 px-4 rounded-lg hover:bg-[var(--secondary)] transition-colors"
                        >
                            Submit
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-[var(--muted)]">
                        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                    </p>
                </section>

                {/* Business Details Section */}
                <section className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">
                        Better yet, see us in person!
                    </h2>
                    <p className="text-lg text-[var(--foreground)]">
                        We love our customers, so feel free to visit during normal business hours.
                    </p>
                    <div className="mt-4 space-y-2">
                        <p className="text-lg">
                            <strong>Startek Automation Controls Pty Ltd</strong>
                        </p>
                        <p className="text-lg">1990 Logan Road, Upper Mount Gravatt Queensland 4122, Australia</p>
                        <p className="text-lg">
                            <strong>Phone:</strong> +61 428 600 686
                        </p>
                        <p className="text-lg">
                            <strong>Email:</strong> sales@startekautomation.com
                        </p>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-2xl font-bold text-[var(--primary)]">Hours</h3>
                        <ul className="mt-2 text-lg text-[var(--foreground)]">
                            <li>Mon - Fri: 08:30 am – 04:30 pm</li>
                            <li>Sat - Sun: Closed</li>
                        </ul>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full bg-[var(--background)] py-6 text-center text-[var(--muted)]">
                <p className="text-sm">
                    Copyright © 2025 Startek Automation Controls Pty Ltd - All Rights Reserved.
                </p>
                <p className="text-sm">Powered by GoDaddy</p>
            </footer>
        </div>
    );
}