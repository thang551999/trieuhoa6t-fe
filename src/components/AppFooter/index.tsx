import Image from "next/image";
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
                <Image
                  src="/images/trieu-hoa-logo-white.png"
                  alt="trieu-hoa-logo"
                  width={200}
                  height={70}
                />
              </Link>

              <div className="max-w-[240px] mt-4 md:mt-0 mx-auto md:mx-[unset]">
                <p className="text-sm text-gray-300">
                  <span className="font-bold">Địa chỉ:</span> Tầng 7, Số 53 Lãng
                  Yên, Bạch Đằng, Quận Hai Bà Trưng, Hà Nội
                </p>
                <p className="text-sm text-gray-300">
                  <span className="font-bold">Phone:</span> (+84) 0911 749 696
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
              &copy; {new Date().getFullYear()} TrieuHoa6T. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
