import { useRecoilValue } from "recoil";
import HistoryText from "./HistoryText"
import { HistoryState } from "@/atoms/value";

const History = () => {
    const history = useRecoilValue(HistoryState);
    return <div className="ml-4  w-full">
        <div className="text-4xl fixed top-0 h-16  z-100 bg-black w-full  flex justify-evenly">
            <div>
                History
            </div>
            <div>
                Caluclator
            </div>
        </div>
        <div className="mt-18 h-screen overflow-y-auto flex flex-col-reverse w-11/12 md:pl-10 lg:pl-16 pb-6" >
            <style>
                {`
        ::-webkit-scrollbar {
            width: 1px; 
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #888; 
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: #555; 
        }
        `}
            </style>
            {history.length === 0 ? (
                <p className="text-2xl">No calculation done</p>
            ) : (
                history.map((h, index) => (
                    <HistoryText key={index} ans={h.ans} num1={h.num1} num2={h.num2} symbol={h.symbol} />
                ))
            )}
        </div>
    </div>
}
export default History