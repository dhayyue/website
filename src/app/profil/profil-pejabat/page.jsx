"use-client";
import SectionTitle from "@/components/common/section-title";
import { ProfilConstants } from "@/constants/profil";
import Image from "next/image";

const Page = ({}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="container">
        <SectionTitle title={"Profil Pejabat"} />
        <div className="grid grid-cols-2 gap-4">
          {ProfilConstants.map((profil, index) => (
            <div className=" ">
              <Image src={profil.image} width={214} height={306} />
              <p>{profil.name}</p>
              <p>{profil.jabatan}</p>
              <p>{profil.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Page;
