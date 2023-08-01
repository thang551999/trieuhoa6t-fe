import Image from "next/image";

const exampleData = [
  {
    img: "https://trieuhoa.s3.ap-southeast-1.amazonaws.com/trieu-hoa-logo.png",
    title:
      "[Kênh 14] Chuyện chưa kể của admin Nghiện nhà: Công ty bố bị phá sản nhưng lấy đó làm động lực để trở thành bà chủ của loạt nhà hàng lớn nhỏ",
    author: "Admin",
    description:
      "Bài viết gốc được đăng tải trên Kênh 14Để đạt được những thành công như ngày hôm nay",
  },
  {
    img: "https://trieuhoa.s3.ap-southeast-1.amazonaws.com/trieu-hoa-logo.png",
    title: "[Fnbvietnam.vn] Phỏng vấn CEO chuỗi nhà hàng Koh Yam",
    author: "Admin",
    description:
      "Bài viết gốc được đăng tải trên fnbvietnam.vnTheo CEO chuỗi Bếp Thái Koh Ya",
  },
  {
    img: "https://trieuhoa.s3.ap-southeast-1.amazonaws.com/trieu-hoa-logo.png",
    title: "[Fnbvietnam.vn] Phỏng vấn CEO chuỗi nhà hàng Koh Yam",
    author: "Admin",
    description:
      "Bài viết gốc được đăng tải trên fnbvietnam.vnTheo CEO chuỗi Bếp Thái Koh Ya",
  },
  {
    img: "https://trieuhoa.s3.ap-southeast-1.amazonaws.com/trieu-hoa-logo.png",
    title:
      "[Kênh 14] Chuyện chưa kể của admin Nghiện nhà: Công ty bố bị phá sản nhưng lấy đó làm động lực để trở thành bà chủ của loạt nhà hàng lớn nhỏ",
    author: "Admin",
    description:
      "Bài viết gốc được đăng tải trên Kênh 14Để đạt được những thành công như ngày hôm nay",
  },
];

const BlogList = () => {
  return (
    <div className="w-full mx-auto">
      <div className="title">Trên Báo Chí</div>

      <div className="mt-6 flex flex-wrap items-stretch gap-2">
        {exampleData.map((data, idx: number) => (
          <div
            className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={idx}
          >
            <a href="#">
              <Image
                className="rounded-t-lg"
                src={data.img}
                alt={data.title}
                width={750}
                height={550}
                objectFit="cover"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>
              </a>
              <div className="mt-2 font-normal text-black-200">
                {data.author}
              </div>
              <p className="my-2 font-normal text-gray-700 dark:text-gray-400">
                {data.description}
              </p>
              <button
                type="button"
                className="w-full justify-center mt-5 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
              >
                Xem thêm
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
