"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { informasiKegiatanConstants } from "@/constants/informasi-kegiatan-constants";
import "swiper/css";
import { useState } from "react";
import Image from "next/image";
const SwiperKegiatan = ({}) => {
  const [position, setPosition] = useState(3);

  const handleSlideChange = (e) => {
    setPosition(e.realIndex);
  };
  return (
    <Swiper
      onSlideChange={handleSlideChange}
      spaceBetween={50}
      slidesPerView={1}
      className="bg-[#A1E3F937] rounded-xl"
      pagination={true}
    >
      {informasiKegiatanConstants.map((info, index) => (
        <SwiperSlide className="" key={index}>
          <div className="grid grid-cols-2 mt-10 ml-10 mr-10 bg-[#3674B560]">
            <div className="col-span-1">
              <Image alt={info.title} src={info.image} width={658} height={483} alt={info.title}/>
            </div>
            <div className="col-span-1 flex justify-center flex-col h-full px-14">
              <h1 className="underline font-medium mb-10">{info.title}</h1>
              <p className="underline">{info.content}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="!flex items-center justify-center h-5 my-5">
        {informasiKegiatanConstants.map((_, index) => (
          <div
            key={index}
            className={`rounded-full w-2 h-2 z-20 mx-[2px]`}
            style={{
              backgroundColor: index === position ? "#969191" : "#D9D9D9",
            }}
          />
        ))}
      </div>
    </Swiper>
  );
};

export default SwiperKegiatan;
