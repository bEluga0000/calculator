import Calculator from "@/components/Calculator";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <div>
        <div className="flex min-h-screen flex-col sm:flex-row">
          <div className="sm:flex-1 flex sm:items-center justify-center">
            hello
          </div>
          <div className="sm:flex-1 relative">
            <Calculator />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}
