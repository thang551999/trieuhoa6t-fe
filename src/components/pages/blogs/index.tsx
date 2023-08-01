import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import BlogList from "./components/BlogList";
import { Col, Row } from "antd";

const blogBreadcrumbsItems = [
  {
    key: "home",
    title: <Link href="/">Trang Chủ</Link>,
  },
  {
    key: "blogs",
    title: <Link href="/blogs">Blogs</Link>,
  },
];

const BlogsPage = () => {
  return (
    <div className="w-full">
      <Breadcrumbs
        BreadcrumbItems={blogBreadcrumbsItems}
        className="md:max-w-[1120px] w-full mx-auto py-8"
      />

      <Row className="py-10 md:max-w-[1120px] w-full mx-auto flex">
        <Col span={18}>
          <BlogList />
        </Col>

        <Col span={6}>Bài Viết Mới Nhất</Col>
      </Row>
    </div>
  );
};

export default BlogsPage;
