/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "antd";
import Link from "next/link";
import Image from "next/image";

const settings = {
  dots: false,
  draggable: true,
  infinite: true,
  speed: 500,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  nextArrow: <div>Next</div>,
  prevArrow: <div>Previous</div>,
};

const fakeDataBanner = [
  {
    url: "/",
    src: "/images/trieu-hoa-logo.png",
    altImage: "trieu-hoa-logo",
    text: "Enterpreneur | Bussiness trainer | Social activist",
    secondImage: "/images/avatar1.jpg",
    secondImageAlt: "avatar banner",
    mainBackground: null,
  },
  {
    url: "/",
    src: "/images/trieu-hoa-logo.png",
    altImage: "trieu-hoa-logo",
    text: "Text 1 | Text 2 | Text 3",
    secondImage: "/images/avatar1.jpg",
    secondImageAlt: "avatar banner",
    mainBackground: "/images/main-banner.jpg",
  },
];

const HomeBannerSection = () => {
  return (
    <div className="home-page-container__banner">
      <Carousel {...settings} className="h-full">
        {fakeDataBanner.map((banner, idx: number) => (
          <div
            key={idx}
            className="flex flex-nowrap flex-auto align-middle justify-between bg-white 
              relative md:w-full h-[700px]
            "
          >
            {banner.mainBackground ? (
              <Image
                src={banner.mainBackground}
                alt={banner.altImage}
                layout="fill"
                // width={1620}
                // height={1}
                objectFit="cover"
                quality={100}
                className="object-cover"
              />
            ) : (
              <>
                <div className="w-2/4 left cursor-pointer flex flex-col align-middle items-center justify-center">
                  <Link href={banner.url} className="p-4">
                    <Image
                      src={banner.src}
                      alt={banner.altImage}
                      width={334}
                      height={240}
                      objectFit="cover"
                      quality={100}
                    />
                  </Link>

                  <p className="text-center font-serif text-base antialiased font-medium tracking-wide text-orange-400">
                    {banner.text}
                  </p>
                </div>

                <div className="relative h-[354px] md:h-[554px] w-2/4">
                  <Image
                    src="/images/avatar1.jpg"
                    alt={banner.secondImageAlt}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="object-scale-down"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeBannerSection;
