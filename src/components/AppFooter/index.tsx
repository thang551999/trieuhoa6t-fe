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
  {
    text: "Lĩnh vực kinh doanh",
    url: "",
  },
];
const Footer: FC<FooterProps> = () => {
  return (
    <div className="footer-container">
      <footer className="bg-gray-800 py-8 text-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col px-10 items-center justify-center">
            <div className="flex md:flex-row flex-col mb-4 md:mb-0 justify-between w-full">
              <Link href="/" className="mx-auto md:mx-[unset]">
                <p className="text-lg font-bold cursor-pointer hover:opacity-70">
                  Logo
                </p>
              </Link>

              <div className="mt-4 md:mt-0 mx-auto md:mx-[unset]">
                <p className="text-sm text-gray-300">
                  <span className="font-bold">Địa chỉ:</span> Hà Nội, Việt Nam
                </p>
                <p className="text-sm text-gray-300">
                  <span className="font-bold">Phone:</span> (+84) 123-456-789
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10">
              {AppFooterNavigationItems.map((item, idx: number) => (
                <Link
                  href={item.url}
                  key={idx}
                  className="cursor-pointer hover:opacity-70 xl:text-center"
                >
                  {item.text}
                </Link>
              ))}
            </nav>
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
