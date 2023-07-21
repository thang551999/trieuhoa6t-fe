import Link from "next/link";
import type { FC } from "react";

type FooterProps = Record<string, never>;

const AppFooterNavigationItems = [
  {
    text: "Trang Chủ",
    url: "/",
  },
  {
    text: "Liên Lạc",
    url: "",
  },
];
const Footer: FC<FooterProps> = () => {
  return (
    <div className="footer-container">
      <footer className="bg-gray-800 py-8 text-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/">
                <p className="text-lg font-bold cursor-pointer hover:opacity-70">
                  Logo
                </p>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col md:flex-row gap-5">
              {AppFooterNavigationItems.map((item, idx: number) => (
                <Link
                  href={item.url}
                  key={idx}
                  className="cursor-pointer hover:opacity-70"
                >
                  {item.text}
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-300">
                <span className="font-bold">Địa chỉ:</span> Hà Nội, Việt Nam
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-bold">Phone:</span> (+84) 123-456-789
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
