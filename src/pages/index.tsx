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
      title="Trieu Hoa"
      metaDescription="trieuhoa triệu hoa trieuhoa6t đào tạo khoá học 6t Bussiness trainer-Social activist"
      socialImageUrl="https://trieuhoa.s3.ap-southeast-1.amazonaws.com/trieu-hoa-logo.png"
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
