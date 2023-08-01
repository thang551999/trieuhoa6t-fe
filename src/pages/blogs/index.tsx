import AppLayout from "@/components/Layout/Public";
import BlogsPage from "@/components/pages/blogs";
import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Blogs: NextPageWithLayout = () => {
  return (
    <div className="app-blog-page">
      <BlogsPage />
    </div>
  );
};

Blogs.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout
      title="Bài Viết"
      metaDescription="Các bài viết của TrieuHoa6T"
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

export default Blogs;
