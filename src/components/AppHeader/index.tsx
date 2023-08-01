import { Button, Drawer, Dropdown, MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/">Đào Tạo 1</Link>,
  },
  {
    key: "2",
    label: <Link href="/">Đào Tạo 2</Link>,
  },
  {
    key: "3",
    label: <Link href="/">Đào Tạo 3</Link>,
  },
];

const MetaHeader = () => (
  <Link href="/" className="text-white">
    Đào Tạo
  </Link>
);

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="flex-col bg-white ">
      <Link
        href="/"
        className="flex align-middle items-center
        relative max-w-[1120px] mx-auto w-full py-8 cursor-pointer
        px-6 sm:px-0 justify-between"
      >
        <Image
          src="/images/trieu-hoa-logo.png"
          alt="trieu-hoa-logo"
          width={117}
          height={70}
        />

        {/* <Button
          type="dashed"
          onClick={toggleMenu}
          className="block md:hidden rounded-xs"
        >
          Menu
        </Button> */}
      </Link>

      {/* <Drawer
        title={null}
        placement="right"
        onClose={toggleMenu}
        open={isMenuOpen}
      >
        <ul className="flex flex-col gap-3 mx-auto">
          <Link href="/" className="text-base font-medium text-black mx-0">
            Trang Chủ
          </Link>
          <Link href="/" className="text-base font-medium text-black mx-0">
            Đào Tạo
          </Link>
          <Link href="/" className="text-base font-medium text-black mx-0">
            Lĩnh Vực Kinh Doanh
          </Link>
        </ul>
      </Drawer> */}

      <nav className="bg-[#29384D] p-4">
        <ul className="flex gap-6 max-w-[1120px] mx-auto justify-start flex-wrap">
          <Link href="/" className="text-white">
            Trang Chủ
          </Link>
          <Link href="/blogs" className="text-white">
            Bài viết
          </Link>

          <Dropdown menu={{ items }}>
            <span className="cursor-pointer text-white">Đào Tạo</span>
          </Dropdown>
          <Link href="/" className="text-white">
            Thiện nguyện
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
