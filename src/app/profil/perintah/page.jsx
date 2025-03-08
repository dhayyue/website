import SectionTitle from "@/components/common/section-title";
import Image from "next/image";

const Page = ({}) => {
  return (
    <div className="mt-24 flex items-center justify-center mb-24">
          <div className="container">
            <div className="flex items-center justify-center flex-col">
              <div className="w-full">
                <SectionTitle title={"Perintah Harian Jaksa Agung RI"} />
              </div>
            </div>
            <div className="bg-[#A1E3F937] rounded-lg p-10 mt-5">
          <h1 className="text-center font-bold text-lg mb-2">JAKSA AGUNG</h1>
          <h2 className="text-center font-bold text-lg mb-2">
            REPUBLIK INDONESIA
          </h2>
          <h3 className="text-center font-semibold mb-2">Perintah Harian</h3>
          <h4 className="text-center font-semibold mb-4">
            Jaksa Agung Republik Indonesia
            <br />
            Pada Tanggal 22 Juli 2018
          </h4>

          <ol className="list-decimal list-outside space-y-3 text-justify text-sm leading-relaxed text-gray-800">
            <li>
              TINGKATKAN SENSITIFITAS DAN INTENSITAS KEPEKAAN DALAM MELAKSANAKAN
              TUGAS DAN TANGGUNGJAWAB PENEGAKKAN HUKUM DENGAN CERDAS, LUGAS DAN
              BERINTEGRITAS;
            </li>
            <li>
              POSISIKAN DIRI SECARA PERSONAL, FUNGSIONAL DAN INSTANSIONAL YANG
              KUKUH MENGGENGGAM SERTA MENJUNJUNG TINGGI HARKAT DAN KEHORMATAN
              PROFESI SELAKU INSAN ADHYAKSA, AGAR PANTAS DIPUJI DAN DIHARGAI;
            </li>
            <li>
              MENYADARI DAN MENJAGA DIRI SEBAGAI PENDAMPING, AKSELERATOR,
              PENGAWAL DAN PENGAMAN JALANNYA PEMERINTAHAN DAN PEMBANGUNAN YANG
              DAPAT DIPERCAYA DAN DIANDALKAN;
            </li>
            <li>
              BEKERJA DAN BERKARYA TANPA PAMRIH DENGAN BAIK SEPENUH HATI,
              MENIADAKAN PERBEDAAN PERLAKUAN DAN PELAYANAN AGAR MEMBERI MANFAAT,
              MEMENUHI HARAPAN KUAT DARI MASYARAKAT;
            </li>
            <li>
              PUPUK DAN TUMBUH KEMBANGKAN SEMANGAT BEKERJA BERSAMA SEMUA PIHAK,
              DALAM BINGKAI HUBUNGAN YANG SOLID DAN SINERGIS, DEMI UPAYA MERAWAT
              KEBERAGAMAN DAN KEBHINEKAAN, BAGI KEBESARAN BANGSA DAN KEUTUHAN
              NEGARA KESATUAN REPUBLIK INDONESIA YANG HARMONIS.
            </li>
          </ol>

          <div className="text-center mt-8">
            <p className="text-sm">JAKARTA, 22 JULI 2018</p>
            <p className="text-sm">JAKSA AGUNG REPUBLIK INDONESIA</p>
            <p className="mt-6 font-semibold">H.M Prasetyo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;