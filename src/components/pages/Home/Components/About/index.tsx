import Image from "next/image";
import Link from "next/link";
import React from "react";

const authorAchivement = [
  "- Founder 6T Academy",
  "- Founder AV luxury homestay",
  "- Sáng lập và điều hành 6T Dự án tặng cơm cho bệnh nhân chạy thận.",
];

const AboutAuthorSection = () => {
  return (
    <div className="mt-[100px] max-w-[1120px] mx-auto h-full">
      <h2 className="text-3xl font-medium leading-5 text-center pb-5 border-b-4 w-fit mx-auto border-gray-300">
        Về Trieu Hoa
      </h2>
      <p className="text-1xl text-center w-full mt-4">
        Bussiness trainer-Social activist
      </p>

      <div className="flex flex-wrap-reverse xl:flex-nowrap gap-10 justify-center xl:justify-between w-full px-6 mt-0 md:mt-12">
        <div className="w-full xl:w-2/4 px-5 md:px-[40px] py-10 md:py-[55px] bg-slate-700 h-fit">
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

        <div className="relative h-[434px] w-full xl:w-2/4 mt-10 md:mt-20">
          <Image
            src="/images/avatar2.jpg"
            alt="banner about author"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="object-scale-down"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutAuthorSection;
