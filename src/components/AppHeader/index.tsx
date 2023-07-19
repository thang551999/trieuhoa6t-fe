import React, { FC } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Image from "next/image";

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
    <div className="bg-[#29384D] p-4">
      <div className="relative">
        <Image
          src="/images/trieu-hoa-logo.png"
          alt="trieu-hoa-logo"
          layout="fill"
        />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#/" className="text-white">
              Trang Chủ
            </a>
          </li>
          <li>
            <a href="#/" className="text-white">
              Đào Tạo
            </a>
          </li>
          <li>
            <HeaderDropdown />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
