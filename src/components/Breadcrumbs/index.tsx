import { Breadcrumb } from "antd";
import React, { ReactNode } from "react";

type Breadcrumb = {
  key?: React.Key | string;
  href?: string;
  className?: string;
  title: ReactNode | string;
  path?: string;
}[];

interface BreadcrumbInterface {
  BreadcrumbItems: Breadcrumb;
  separator?: ReactNode;
  className?: string;
}

const Breadcrumbs = ({ BreadcrumbItems, ...props }: BreadcrumbInterface) => {
  return (
    <Breadcrumb {...props}>
      {BreadcrumbItems.map((item) => (
        <Breadcrumb.Item
          key={item.key}
          href={item.href}
          className={item.className}
        >
          <span className="text-white-500 text-base">{item.title}</span>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
