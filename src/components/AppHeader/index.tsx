import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

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
          <span className="text-white font-semibold">Lĩnh vực kinh doanh</span>
          <DownOutlined className="text-white" />
        </div>
      </a>
    </Dropdown>
  );
};

const Header: FC = () => {
  return (
    <div className="flex-col  bg-white ">
      <Link
        href="/"
        className="flex align-middle relative max-w-[1120px] mx-auto w-full py-8 cursor-pointer"
      >
        <Image
          src="/images/trieu-hoa-logo.png"
          alt="trieu-hoa-logo"
          width={117}
          height={70}
        />
      </Link>
      <nav className="bg-[#29384D] p-4">
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
