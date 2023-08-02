/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel, Grid } from "antd";
import Image from "next/image";
import Link from "next/link";

const settings = {
  dots: false,
  draggable: true,
  infinite: true,
  speed: 500,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: true,
  nextArrow: <div>Next</div>,
  prevArrow: <div>Previous</div>,
};

const fakeDataBanner = [
  {
    url: "/",
    src: "/images/trieu-hoa-logo.png",
    altImage: "trieu-hoa-logo",
    text: "Bussiness trainer | Social activist",
    secondImage: "/images/newavatar1.jpg",
    secondImageAlt: "avatar banner",
    mainBackground: null,
    mobileBackground: null,
  },
  {
    url: "/",
    src: "/images/trieu-hoa-logo.png",
    altImage: "trieu-hoa-logo",
    text: "Bussiness trainer | Social activist",
    secondImage: "/images/newavatar1.jpg",
    secondImageAlt: "avatar banner",
    banner: "/images/main-banner.jpg",
    mainBackground: "/images/banner01-desktop.jpg",
    mobileBackground: "/images/banner01-mobile.jpg",
  },
];

const { useBreakpoint } = Grid;

const HomeBannerSection = () => {
  const { xs } = useBreakpoint();

  return (
    <div className="home-page-container__banner">
      <Carousel {...settings} className="h-full">
        {fakeDataBanner.map((banner, idx: number) => (
          <div
            key={idx}
            className="flex flex-nowrap flex-auto align-middle justify-between bg-white 
              relative md:w-full w-full h-full"
          >
            {banner.mainBackground ? (
              <Image
                src={xs ? banner.mobileBackground : banner.mainBackground}
                alt={banner.altImage}
                width={xs ? 390 : 1620}
                height={xs ? 354 : 354}
                objectFit="cover"
                quality={100}
                className="object-cover mx-auto"
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

                  <p className="hidden md:block text-center font-serif text-base antialiased font-medium tracking-wide text-orange-400">
                    {banner.text}
                  </p>

                  <p className="block: md:hidden text-center font-serif text-base antialiased font-medium tracking-wide text-orange-400">
                    Bussiness trainer <br /> Social activist
                  </p>
                </div>

                <div className="relative h-[354px] md:h-[554px] w-2/4">
                  <Image
                    src="/images/newavatar1.jpg"
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
