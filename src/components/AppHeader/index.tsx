import { DownOutlined } from "@ant-design/icons";
import { Button, Drawer, Dropdown, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

const HeaderDropdown = () => {
  const menu = (
    <Menu>
      <Menu.SubMenu key="sub1" title="KD 1" />

      <Menu.SubMenu key="sub2" title="KD 2">
        <Menu.Item key="2-1">Đào Tạo 1</Menu.Item>
        <Menu.Item key="2-2">Đào Tạo 2</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a href="#/" onClick={(e) => e.preventDefault()} className="text-white">
        <div className="flex items-center space-x-1">
          <span className="font-semibold">Lĩnh vực kinh doanh</span>
          <DownOutlined className="" />
        </div>
      </a>
    </Dropdown>
  );
};

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="flex-col  bg-white ">
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

        <Button
          type="dashed"
          onClick={toggleMenu}
          className="block md:hidden rounded-xs"
        >
          Menu Icon
        </Button>
      </Link>

      <Drawer
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
      </Drawer>

      <nav className="hidden md:block bg-[#29384D] p-4">
        <ul className="flex space-x-6 max-w-[1120px] mx-auto">
          <Link href="/" className="text-white">
            Trang Chủ
          </Link>
          <Link href="/" className="text-white">
            Đào Tạo
          </Link>

          <li>
            <HeaderDropdown />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
