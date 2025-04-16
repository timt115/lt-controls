export default function Footer() {
    return (
      <footer className="bg-[var(--foreground)] text-[var(--text)] py-8">
        <div className="container mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LT Controls Pty Ltd</h3>
            <p className="text-sm">
              Delivering cutting-edge automation solutions since 2018. Specializing in PLC programming, HMI design, and SCADA systems.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-[var(--primary)] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:text-[var(--primary)] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="text-sm hover:text-[var(--primary)] transition">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-[var(--primary)] transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/management" className="text-sm hover:text-[var(--primary)] transition">
                  Management Team
                </a>
              </li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-bold">Phone:</span> <a href="tel:+1234567890" className="hover:text-[var(--primary)]">+61 428 600 686</a>
              </li>
              <li>
                <span className="font-bold">Email:</span> <a href="mailto:info@lt-controls.com" className="hover:text-[var(--primary)]">sales@lt-controls.com</a>
              </li>
              <li>
                <span className="font-bold">Address:</span> Unit 8B / 1990 Logan Road, Upper Mount Gravatt Queensland 4122, Australia
              </li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-8 border-t border-[var(--muted)] pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} LT Controls Pty Ltd - All rights reserved.
          </p>
          <p>
            <a href="/terms-of-service" className="hover:text-[var(--primary)]">Terms of Service</a>
          </p>
        </div>
      </footer>
    );
  }