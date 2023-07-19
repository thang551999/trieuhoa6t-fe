import type { FC, PropsWithChildren } from "react";

import AppSeo, { LinkTag } from "@/components/AppSeo";
import Header from "@/components/AppHeader";
import Content from "@/components/AppContent";
import Footer from "@/components/AppFooter";
import classNames from "classnames";

const AppLayout: FC<
  PropsWithChildren<{
    title?: string;
    className?: string;
    notShowFooter?: boolean;
    notShowHeader?: boolean;
    socialImageUrl?: string;
    metaDescription?: string;
    faviconImageUrl?: string;
    additionalLinkTags?: LinkTag[];
  }>
> = ({
  children,
  title = "",
  className,
  socialImageUrl,
  faviconImageUrl,
  metaDescription,
  additionalLinkTags,
}) => (
  <>
    <AppSeo
      title={title}
      socialImageUrl={socialImageUrl}
      faviconImageUrl={faviconImageUrl}
      metaDescription={metaDescription}
      additionalLinkTags={additionalLinkTags}
    />
    <div className={classNames("layout-container", className)}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  </>
);

export default AppLayout;
