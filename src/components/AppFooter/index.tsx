import type { FC } from "react";

type FooterProps = Record<string, never>;

const Footer: FC<FooterProps> = () => {
  return (
    <div className="footer-container">
      <footer className="bg-gray-800 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-lg font-bold">Logo</p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col md:flex-row">
              <a
                href="#/"
                className="text-sm text-gray-300 hover:text-white px-4 py-2"
              >
                Home
              </a>
              <a
                href="#/"
                className="text-sm text-gray-300 hover:text-white px-4 py-2"
              >
                About
              </a>
              <a
                href="#/"
                className="text-sm text-gray-300 hover:text-white px-4 py-2"
              >
                Services
              </a>
              <a
                href="#/"
                className="text-sm text-gray-300 hover:text-white px-4 py-2"
              >
                Contact
              </a>
            </nav>

            {/* Contact Info */}
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-300">
                <span className="font-bold">Location:</span> Your Address, City,
                Country
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-bold">Phone:</span> +1 (123) 456-7890
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your Website. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
