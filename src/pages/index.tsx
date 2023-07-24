import AppLayout from "@/components/Layout/Public";
import HomePage from "@/components/pages/Home";
import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="app-home-page">
      <HomePage />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout
      title="Trieu Hoa 6T"
      metaDescription="Bussiness trainer-Social activist"
      socialImageUrl="/images/avatar1.jpg"
    >
      {page}
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
