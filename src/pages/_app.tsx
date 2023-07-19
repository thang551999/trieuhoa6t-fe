import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{}> & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout | any) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <main>
      {/* <main className={poppin.className}>  */}
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
};

export default MyApp;
