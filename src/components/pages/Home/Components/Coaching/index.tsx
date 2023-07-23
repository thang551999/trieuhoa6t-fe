import Link from "next/link";
import React from "react";

const CoachingItems = [
  {
    name: "Bất động sản",
    description:
      "Dành cho đối tượng muốn tìm hiểu để mua nhà ở hoặc muốn tham gia đầu tư bất động sản với vốn đầu tư nhỏ.",
    url: "",
  },
  {
    name: "Tài chính cá nhân",
    description:
      "Giúp học viên quản lý tốt dòng tiền và hướng tới mục tiêu tự do tài chính",
    url: "",
  },
  {
    name: "Phát triển bản thân",
    description:
      "Ngoài Bất động sản và tài chính cá nhân 6T Academy tổ chức nhiều lớp phát triển bản thân với nội dung phong phú. Đặc biệt là các lớp hướng dẫn khai phá tiềm năng,gia tăng năng lực cá nhân trên cơ sở khoa học của Ngành tâm lý học và các môn Huyền học như tử vi,thần số học,chiêm tinh,tarot...",
    url: "",
  },
];

const CoachingSection = () => {
  return (
    <div className="m-[100px] max-w-[1120px] mx-auto h-full lg:px-0 px-6">
      <h2 className="text-3xl font-medium leading-5 text-center pb-5 border-b-4 w-fit mx-auto border-gray-300">
        Đào tạo
      </h2>
      <p className="text-1xl text-center w-full mt-4">
        Các nội dung Đào tạo thuộc thế mạnh của Trieu Hoa
      </p>

      <div className="mt-12 flex items-stretch justify-between lg:gap-7 gap-12 lg:flex-nowrap flex-wrap">
        {CoachingItems.map((item, idx: number) => (
          <div key={idx} className="px-5 py-12 rounded-2xl shadow-xl">
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
