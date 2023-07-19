import type { FC, PropsWithChildren } from "react";

const Content: FC<PropsWithChildren> = ({ children }) => {
  return <div className="content-container h-screen">{children}</div>;
};

export default Content;
