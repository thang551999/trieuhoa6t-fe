import Link from "next/link";
import React from "react";

const CoachingItems = [
  {
    name: "Chiến lược 01",
    description:
      "Kinh nghiệm và bài học từ hành trình khởi nghiệp FnB của Author sẽ giúp bạn có những kiến thức chuyên sâu về ngành rất đặc thù này.",
    url: "",
  },
  {
    name: "Chiến lược 01",
    description:
      "Kinh nghiệm và bài học từ hành trình khởi nghiệp FnB của Author sẽ giúp bạn có những kiến thức chuyên sâu về ngành rất đặc thù này.",
    url: "",
  },
  {
    name: "Chiến lược 03",
    description:
      "Kinh nghiệm và bài học từ hành trình khởi nghiệp FnB của Author sẽ giúp bạn có những kiến thức chuyên sâu về ngành rất đặc thù này.",
    url: "",
  },
  {
    name: "Chiến lược 04",
    description:
      "Kinh nghiệm và bài học từ hành trình khởi nghiệp FnB của Author sẽ giúp bạn có những kiến thức chuyên sâu về ngành rất đặc thù này.",
    url: "",
  },
];

const CoachingSection = () => {
  return (
    <div className="mt-[100px] max-w-[1120px] mx-auto h-full">
      <h2 className="text-3xl font-medium leading-5 text-center pb-5 border-b-4 w-fit mx-auto border-gray-300">
        Đào tạo
      </h2>
      <p className="text-1xl text-center w-full mt-4">
        Các nội dung Đào tạo thuộc thế mạnh của Author
      </p>

      <div className="mt-12 flex flex-nowrap items-stretch justify-between gap-7">
        {CoachingItems.map((item, idx: number) => (
          <div key={idx} className="px-5 py-12 rounded-lg shadow-xl">
            <Link href={item.url}>
              <div className="text-center text-xl font-bold cursor-pointer hover:opacity-70">
                {item.name}
              </div>
            </Link>
            <p className="mt-3 text-center font-normal">{item.description}</p>
            <Link href={item.url}>
              <button
                className="mt-5 border-gray-200 border-2 py-3 px-7 mx-auto flex justify-center
                hover:opacity-60
              "
              >
                Xem Thêm
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachingSection;