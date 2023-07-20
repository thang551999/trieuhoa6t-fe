import Image from "next/image";
import React from "react";

const FeedBackItems = [
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
    <div className="mt-[100px] max-w-[1120px] mx-auto h-full">
      <h2 className="text-3xl font-medium leading-5 text-center pb-5 border-b-4 w-fit mx-auto border-gray-300">
        Feedback
      </h2>
      <p className="text-1xl text-center w-full mt-4">
        Feedback của các đối tác, khách hàng doanh nghiệp đã từng hợp tác với
        Author
      </p>

      <div>
        {FeedBackItems.map((item, idx: number) => (
          <div key={idx}>
            <div className="relative">
              <Image
                src="/icon/flag-shave.svg"
                alt="background"
                layout="fill"
              />
            </div>

            <p>{item.desc}</p>

            <div className="relative">
              <Image
                src={item.avatar}
                alt="avatar-author"
                layout="fill"
                quality={100}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBackSection;
