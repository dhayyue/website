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
          <p>
            Kejaksaan Negeri Sukoharjo mempunyai tugas, wewenang, dan fungsi di
            wilayah hukumnya sesuai dengan peraturan perundang-undangan dan
            kebijaksanaan yang ditetapkan oleh Jaksa Agung, serta tugas-tugas
            lainnya yang ditetapkan oleh Jaksa Agung. Di dalam melaksanakan
            tugas-tugas tersebut Kejaksaan Negeri Sukoharjo melaksanakan fungsi
            :
          </p>
          <ol className="list-disc ml-4">
            <li>
              Perumusan petunjuk pelaksanaan dan petunjuk teknis berupa
              pemberian bimbingan dan pembinaan serta pemberian perizinan sesuai
              dengan tugasnya;
            </li>
            <li>
              Pelaksanaan pembangunan prasarana dan sarana, pembinaan manajemen,
              administrasi, organisasi, dan ketatalaksanaan serta pengelolaan
              atas milik negara yang menjadi tanggung jawabnya;
            </li>
            <li>
              Pelaksanaan dan pengendalian pelaksanaan penegakan hukum baik
              preventif maupun represif yang berintikan keadilan di bidang
              pidana, pelaksanaan intelijen yustisial di bidang ketertiban dan
              ketentraman umum, pemberian bantuan, pertimbangan, pelayanan, dan
              penegakan hukum di bidang perdata dan tata usaha negara serta
              tindakan hukum dan tugas-tugas lain, untuk menjamin kepastian
              hukum, menegakan kewibawaan pemerintah dan penyelamatan kekayaan
              negara, berdasarkan peraturan perundang-undangan dan kebijaksaan
              yang ditetapkan oleh Jaksa Agung;
            </li>
            <li>
              Penempatan seorang tersangka atau terdakwa di rumah sakit atau
              tempat perawatan jiwa atau tempat lain yang layak berdasarkan
              penetapan hakim karena tidak mampu berdiri sendiri atau disebabkan
              hal-hal yang dapat membahayakan orang lain, lingkungan atau
              dirinya sendiri;
            </li>
            <li>
              Pemberian pertimbangan hukum kepada lembaga negara, instansi
              pemerintah, BUMN, BUMD di daerah hukum Kejaksaan Negeri yang
              bersangkutan, penyusunan peraturan perundang-undangan serta
              peningkatan kesadaran hukum masyarakat;
            </li>
            <li>
              Koordinasi, pemberian bimbingan, dan petunjuk teknis serta
              pengawasan baik di dalam maupun dengan instansi terkait atas
              pelaksanaan tugas
            </li>
          </ol>

          <p>
            Selanjutnya di dalam melaksanakan tugas dan wewenang serta fungsi
            kejaksaan, prioritas tugas Kejaksaan Negeri Sukoharjo selama tahun
            2015 difokuskan kepada :
          </p>
          <ol className="list-decimal ml-4">
            <li>
              Pemberdayaan sumber daya manusia yang ada sehingga dengan kualitas
              SDM yang terbatas dapat mendukung kegiatan pembinaan secara
              efektif dan efesien;
            </li>
            <li>
              Peningkatan operasi Intelijen Yustisial khususnya terhadap
              kasus-kasus berindikasi KKN;
            </li>
            <li>
              Peningkatan penyelesaian perkara-perkara tindak pidana umum,
              perdata dan tata usaha negara baik secara kuantitas maupun
              kualitas;
            </li>
            <li>
              Meningkatkan penanganan perkara-perkara korupsi yang sedang
              ditangani baik ditingkat penyelidikan, penyidikan dan penuntutan
              agar segera tuntas;
            </li>
            <li>
              Peningkatan disiplin pegawai yang diikuti juga dengan peningkatan
              kesejahteraan dan kesehatan pegawai;
            </li>
            <li>
              Optimalisasi fungsi pengawasan, baik pengawasan melekat maupun
              pengawasan fungsional.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Page;
