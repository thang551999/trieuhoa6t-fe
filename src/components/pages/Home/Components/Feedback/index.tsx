import Image from "next/image";
import React from "react";

const feedBackItems = [
  {
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, totam quam! Obcaecati non optio nulla, dignissimos nesciunt maxime reiciendis numquam nostrum sint, repellendus quaerat quasi! Ab voluptate officiis dolorum placeat!",
    avatar: "https://i.pravatar.cc/300",
    name: "Đối tác 1",
    roles: "Đối tác 01",
  },
  {
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, totam quam! Obcaecati non optio nulla, dignissimos nesciunt maxime reiciendis numquam nostrum sint, repellendus quaerat quasi! Ab voluptate officiis dolorum placeat!",
    avatar: "https://i.pravatar.cc/300",
    name: "Đối tác 2",
    roles: "Quản lí VinID",
  },
  {
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, totam quam! Obcaecati non optio nulla, dignissimos nesciunt maxime reiciendis numquam nostrum sint, repellendus quaerat quasi! Ab voluptate officiis dolorum placeat!",
    avatar: "https://i.pravatar.cc/300",
    name: "Đối tác 3",
    roles: "Forbes 2018",
  },
];

const FeedBackSection = () => {
  return (
    <div className="bg-gray-200">
      <div className="px-6 py-[100px] max-w-[1120px] mx-auto h-full ">
        <h2 className="text-3xl font-medium leading-5 text-center pb-5 border-b-4 w-fit mx-auto border-gray-300">
          Phản hồi
        </h2>
        <p className="text-1xl text-center w-full mt-4">
          Feedback của các đối tác, khách hàng doanh nghiệp đã từng hợp tác với
          Trieu Hoa
        </p>

        <div className="mt-5 flex flex-wrap xl:flex-nowrap justify-center xl:justify-between gap-12 xl:gap-6">
          {feedBackItems.map((item, idx: number) => (
            <div
              key={idx}
              className="h-[450px] relative w-[350px] xl:w-full p-5 rounded-t-xl"
            >
              <Image
                src="/icon/flag-shape.svg"
                alt="background"
                layout="fill"
                objectFit="cover"
                className="absolute top-0"
              />

              <div className="relative z-10 flex justify-center text-center text-black">
                <Image
                  src="/icon/tag-icon.svg"
                  alt="background"
                  width={70}
                  height={70}
                  objectFit="cover"
                />
              </div>

              <p className="mt-2 text-justify relative z-10 text-sm xl:text-base text-black">
                {item.desc}
              </p>

              <div className="absolute bottom-0 left-[50%] rounded-full translate-x-[-50%] translate-y-[-50px] xl:translate-y-[-50px] overflow-hidden">
                <Image
                  src={item.avatar}
                  alt="avatar-author"
                  width={120}
                  height={140}
                  quality={100}
                />
              </div>

              <p className="w-full mt-7 absolute bottom-0 z-10 text-center translate-x-[-24px] text-xl font-bold text-black">
                {item.name}
              </p>

              <p className="w-full mt-7 absolute bottom-[-20px] z-10 text-center translate-x-[-24px] text-base text-black">
                {item.roles}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBackSection;
