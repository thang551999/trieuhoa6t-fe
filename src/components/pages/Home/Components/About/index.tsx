import Image from "next/image";
import Link from "next/link";
import React from "react";

const authorAchivement = [
  '- Top "30 Under 30" Forbes 2016',
  "- Co-Founder Chuỗi nhà hàng Thái Koh-Yam",
  "- Co-Founder/Admin Group NGHIỆN NHÀ",
  "- Co-Founder TUTA Makeup & Academy",
  "- KOLs của nhiều nhãn hàng lớn",
  "- Giảng viên về Chiến lược Kinh doanh F&B, Xây dựng cộng đồng triệu thành viên, Xây dựng thương hiệu cá nhân...",
];

const AboutAuthorSection = () => {
  return (
    <div className="mt-[100px] max-w-[1120px] mx-auto h-full">
      <h2 className="text-3xl font-medium leading-5 text-center pb-5 border-b-4 w-fit mx-auto border-gray-300">
        Về Trieu Hoa
      </h2>
      <p className="text-1xl text-center w-full mt-4">
        Doanh nhân - Business Coach - KOLs
      </p>

      <div className="flex flex-wrap-reverse xl:flex-nowrap gap-10 justify-center xl:justify-between w-full px-6 mt-12">
        <div className="w-full xl:w-2/4 px-[40px] py-[55px] bg-slate-700 h-fit">
          {authorAchivement.map((item, idx: number) => (
            <div key={idx} className="text-white">
              {item}
            </div>
          ))}

          <Link href="about">
            <p className="mt-6 text-white cursor-pointer hover:opacity-80">
              Xem thêm {">"}
            </p>
          </Link>
        </div>

        <div className="relative h-[334px] w-full xl:w-2/4 mt-20">
          <Image
            src="https://i.pravatar.cc/300"
            alt="banner about author"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutAuthorSection;
