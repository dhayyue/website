import BeritaCard from "@/components/common/berita-card";
import SectionTitle from "@/components/common/section-title";
import SwiperKegiatan from "@/components/home/swiper-kegiatan";
import { beritaConstants } from "@/constants/berita-constants";
import { layananPublicConstants } from "@/constants/layanan-publik-constants";
import Image from "next/image";
import Link from "next/link";

const Page = ({}) => {
  return (
    <section className="relative w-full flex items-center justify-center flex-col">
      <Image
        src={"/images/beranda/gedung-kejari.png"}
        width={1920}
        height={1200}
        alt="Gedung Kejari"
        className="w-full h-auto"
      />
      <div className="container px-5">
        {/* Berita */}
        <div>
          <SectionTitle title={"Berita"} />
          <div className="grid grid-cols-3 gap-4">
            {beritaConstants.map((berita, index) => (
              <BeritaCard berita={berita} key={index} />
            ))}
          </div>
          <div className="w-full flex items-center justify-center py-20">
            <button className="px-5 font-medium py-1 bg-[#C0DFDE] hover:bg-[#8afffb]">
              Selengkapnya
            </button>
          </div>
        </div>

        {/* Informasi Kegiatan */}
        <div>
          <SectionTitle title={"Informasi Kegiatan"} />
          <SwiperKegiatan />
        </div>
      </div>
      {/* Layanan Publik */}
      <div className="w-full">
        <div className="flex items-center justify-center flex-col">
          <div className="container px-5">
            <SectionTitle title={"Layanan Publik"} />
          </div>
          <div className="bg-[#2F659D] w-full mb-10 py-10 flex items-center justify-center">
            <div className="container px-5 grid grid-cols-3">
            {layananPublicConstants.map((layanan, index) => (
              <div key={index}>
              <Link href={layanan.link} target="_blank" className="col-span-1 flex items-center justify-center flex-col hover:bg-[#3d82cc] p-5 transition-colors">
                <div className="bg-[#D9D9D9] rounded-full p-5 aspect-square w-24 h-24 flex items-center justify-center">
                  <Image src={layanan.image} width={70} height={70}/>
                </div>
                <h1 className="font-medium text-white">{layanan.layanan}</h1>
              </Link>

              </div>
            ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
