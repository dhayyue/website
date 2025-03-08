import SectionTitle from "@/components/common/section-title";
import Image from "next/image";

const Page = ({}) => {
  return (
    <div className="mt-24 flex items-center justify-center mb-24">
      <div className="container">
        <div className="flex items-center justify-center flex-col">
          <div className="w-full">
            <SectionTitle title={"Visi & Misi"} />
          </div>
        </div>
        <div className="bg-[#A1E3F937] rounded-lg p-10 mt-5">
          {/* Bagian Visi */}
          <h2 className="text-center font-bold text-lg mb-4">Visi</h2>
          <p className="text-justify text-sm mb-6 leading-relaxed text-gray-800">
            Menjadi lembaga penegak hukum yang modern, berintegritas, profesional, dan akuntabel dalam mewujudkan supremasi hukum di Indonesia.
          </p>

          {/* Bagian Misi */}
          <h2 className="text-center font-bold text-lg mb-4">Misi</h2>
          <ol className="list-decimal list-outside ml-6 space-y-4 text-justify text-sm leading-relaxed text-gray-800">
            <li>
              Meningkatkan pelaksanaan fungsi Kejaksaan RI dalam pelaksanaan tugas dan wewenang, baik dalam segi kualitas dan kuantitas penanganan perkara seluruh tindak pidana, penanganan perkara Perdata dan Tata Usaha Negara, serta meningkatkan kegiatan Intelijen penegakan hukum secara modern, berintegritas, profesional dan akuntabel yang berlandaskan keadilan, kebenaran serta nilai-nilai kepatutan dalam rangka penegakan hukum;
            </li>
            <li>
              Mewujudkan peran Kejaksaan RI dalam hubungan Internasional, kerjasama hukum, dan penyelesaian perkara lintas negara;
            </li>
            <li>
              Mewujudkan aparatur Kejaksaan RI yang modern, berintegritas, profesional dan akuntabel guna menunjang kelancaran pelaksanaan tugas pokok, fungsi dan wewenang, terutama dalam upaya penegakan hukum yang berkeadilan serta tugas-tugas lainnya;
            </li>
            <li>
              Melaksanakan pembenahan dan penataan kembali struktur organisasi Kejaksaan RI, pembenahan informasi manajemen terutama mengimplementasikan program quickwins agar dapat segera diakses masyarakat, penyusunan cetak biru (blue-print) pembangunan aparatur Kejaksaan RI jangka menengah dan jangka panjang tahun 2025, menertibkan dan menata kembali manajemen keuangan, dan peningkatan sarana dan prasarana serta optimalisasi penerapan Teknologi Informasi (TI);
            </li>
          </ol>

          {/* Reformasi Birokrasi */}
          <p className="text-justify text-sm mt-6 leading-relaxed text-gray-800">
            Meningkatkan Reformasi Birokrasi dan Tata Kelola Kejaksaan RI yang bersih dan bebas KKN melalui reformasi mental dalam pelaksanaan tugas dan wewenang.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
