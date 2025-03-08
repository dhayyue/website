"use client";

import Image from "next/image";

const BeritaCard = ({ berita }) => {
  return (
    <div className="bg-[#578FCA] aspect-[16/20] w-full rounded-xl px-5 pb-5">
      <Image alt={berita.poster} src={berita.poster} className="w-full object-cover aspect-[16/20] mb-5" width={200} height={400}/>
      <h1 className="underline text-sm text-center">{berita.title}</h1>
    </div>
  );
};

export default BeritaCard;
