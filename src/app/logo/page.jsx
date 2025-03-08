import SectionTitle from "@/components/common/section-title";
import Image from "next/image";

const Page = ({}) => {
  return (
    <div className="mt-24 flex items-center justify-center mb-24">
      <div className="container">
        <div className="flex items-center justify-center flex-col">
          <div className="w-full">
            <SectionTitle title={"Arti Logo"} />
          </div>

          <Image
            src={"/images/logo/logo.png"}
            width={500}
            height={500}
            alt="logo"
          />
        </div>
        <div className="bg-[#A1E3F937] rounded-lg p-10 mt-5">
          <p>Bintang Bersudut Tiga.</p>
          <p>
            Bintang adalah salah satu benda alam ciptaan Tuhan Yang Maha Esa
            yang tinggi letaknya dan memancarkan cahaya abadi. Sedangkan jumlah
            tiga buah merupakan pantulan dari Trapsila Adhyaksa sebagai landasan
            kejiwaan warga Adyaksa yang harus dihayati dan diamalkan.
          </p>
          <p>Pedang.</p>
          <p>
            Senjata pedang melambangkan kebenaran, senjata untuk membasmi
            kemungkaran/kebathilan dan kejahatan.
          </p>
          <p>Timbangan.</p>
          <p>
            Timbangan adalah lambang keadilan, keadilan yang diperoleh melalui
            keseimbangan antara suratan dan siratan rasa.
          </p>
          <p>Padi dan Kapas.</p>
          <p>
            Padi dan kapas melambangkan kesejahteraan dan kemakmuran yang
            menjadi dambaan masyarakat.
          </p>
          <p>Seloka ”Satya Adi Wicaksana”,</p>
          <p>
            Merupakan Trapsila Adhyaksa yang menjadi landasan jiwa dan raihan
            cita-cita setiap warga Adhyaksa dan mempunyai arti serta makna:
          </p>
          <ol className="list-decimal ml-4">
            <li>
              Satya Kesetiaan yang bersumber pada rasa jujur, baik terhadap
              Tuhan Yang Maha Esa, terhadap diri pribadi dan keluarga maupun
              kepada sesama manusia
            </li>
            <li>
              Adi kesempurnaan dalam bertugas dan yang berunsur utama,
              bertanggungjawab baik terhadap Tuhan Yang Maha Esa, terhadap
              keluarga dan terhadap sesama manusia;
            </li>
            <li>
              Wicaksana Bijaksana dalam tutur-kata dan tingkah laku, khususnya
              dalam penerapan kekuasaan dan kewenangannya.
            </li>
          </ol>
          <p>Makna Tata Warna</p>
          <ol className="list-decimal ml-4">
            <li>
              Warna kuning diartikan luhur, keluhuran makna yang dikandung dalam
              gambar/lukisan, keluhuran yang dijadikan cita-cita.
            </li>
            <li>
              Warna hijau diberi arti tekun, ketekunan yang menjadi landasan
              pengejaran/pengraihan cita-cita.
            </li>
          </ol>
          <p>Sumber : Kepja No. 074/1978 dan Perja No. 018/A/J.A/08/2008</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
