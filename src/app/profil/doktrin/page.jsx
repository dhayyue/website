"use client";
import SectionTitle from "@/components/common/section-title";
import Image from "next/image";

const Page = ({}) => {
  return (
    <div className="mt-24 flex items-center justify-center mb-24">
      <div className="container">
        <div className="flex items-center justify-center flex-col">
          <div className="w-full">
            <SectionTitle title={"Doktrin Kejaksaan RI"} />
          </div>
        </div>
        <div className="bg-[#A1E3F937] rounded-lg p-10 mt-5">
          <p className="font-semibold text-center">DOKTRIN KEJAKSAAN</p>
          <p className="font-semibold text-center mb-6">TRI KRAMA ADHYAKSA</p>
          
          <div className="space-y-6">
            <div>
              <p className="font-semibold">SATYA</p>
              <p className="text-justify italic">
                “Kesetiaan yang bersumber pada rasa jujur, baik terhadap Tuhan Yang Maha Esa, terhadap diri pribadi dan keluarga maupun kepada sesama manusia”
              </p>
            </div>

            <div>
              <p className="font-semibold">ADHI</p>
              <p className="text-justify italic">
                “Kesempurnaan dalam bertugas dan berunsur utama kepemilikan rasa tanggung jawab, bertanggung jawab baik terhadap Tuhan Yang Maha Esa, terhadap keluarga dan terhadap sesama manusia.”
              </p>
            </div>

            <div>
              <p className="font-semibold">WICAKSANA</p>
              <p className="text-justify italic">
                “Bijaksana dalam tutur kata dan tingkah laku, khususnya dalam penerapan kekuasaan dan kewenangannya”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page