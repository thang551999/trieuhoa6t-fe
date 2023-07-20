import type { FC, PropsWithChildren } from "react";

const Content: FC<PropsWithChildren> = ({ children }) => {
  return <div className="content-container">{children}</div>;
};

export default Content;
