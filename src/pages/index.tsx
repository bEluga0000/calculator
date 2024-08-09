import Calculator from "@/components/Calculator";
import History from "@/components/History";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <div className="sm:grid sm:grid-cols-12 h-screen">
        <div className="sm:col-span-6 sm:block hidden ">
          <History />
        </div>
        <div className="sm:col-span-6 flex items-center justify-center">
          <Calculator />
        </div>
      </div>
    </RecoilRoot>
  );
}
