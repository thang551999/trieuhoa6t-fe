import Image from "next/image";
import React from "react";

const feedBackItems = [
  {
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, totam quam! Obcaecati non optio nulla, dignissimos nesciunt maxime reiciendis numquam nostrum sint, repellendus quaerat quasi! Ab voluptate officiis dolorum placeat!",
    avatar: "https://i.pravatar.cc/300",
    name: "Author 1",
    roles: "Đối tác 01",
  },
  {
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, totam quam! Obcaecati non optio nulla, dignissimos nesciunt maxime reiciendis numquam nostrum sint, repellendus quaerat quasi! Ab voluptate officiis dolorum placeat!",
    avatar: "https://i.pravatar.cc/300",
    name: "Author 2",
    roles: "Quản lí VinID",
  },
  {
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, totam quam! Obcaecati non optio nulla, dignissimos nesciunt maxime reiciendis numquam nostrum sint, repellendus quaerat quasi! Ab voluptate officiis dolorum placeat!",
    avatar: "https://i.pravatar.cc/300",
    name: "Author 3",
    roles: "Forbes 2018",
  },
];

const FeedBackSection = () => {
  return (
    <div className="bg-gray-200">
      <div className="px-6 py-[100px] max-w-[1120px] mx-auto h-full ">
        <h2 className="text-3xl font-medium leading-5 text-center pb-5 border-b-4 w-fit mx-auto border-gray-300">
          Feedback
        </h2>
        <p className="text-1xl text-center w-full mt-4">
          Feedback của các đối tác, khách hàng doanh nghiệp đã từng hợp tác với
          Author
        </p>

        <div className="mt-5 flex flex-nowrap justify-between gap-6">
          {feedBackItems.map((item, idx: number) => (
            <div key={idx} className="h-[450px] relative w-1/3 p-5">
              <Image
                src="/icon/flag-shape.svg"
                alt="background"
                layout="fill"
                objectFit="cover"
                className="absolute top-0"
              />

              <div className="relative z-10 text-6xl text-center text-black">
                :
              </div>

              <p className="mt-7 relative z-10 text-base text-black">
                {item.desc}
              </p>

              <div className="absolute bottom-0 left-[50%] rounded-full translate-x-[-50%] translate-y-[-50px] overflow-hidden">
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

              <p className="w-full mt-7 absolute bottom-[-30px] z-10 text-center translate-x-[-24px] text-base text-black">
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
