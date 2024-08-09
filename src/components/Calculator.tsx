import { useRecoilValue, useSetRecoilState } from "recoil";
import BlackButton from "./BlackButtons";
import GrayButton from "./GrayButtons";
import OrangeButton from "./OrangeButtons";
import { HistoryState, Num1State, PointState, SymbolClickState, SymbolState, ValueState } from "@/atoms/value";
import { useEffect, useState } from "react";

const Calculator = () => {
    const inVal = useRecoilValue(ValueState)
    const setInVal = useSetRecoilState(ValueState)
    let setPointState = useSetRecoilState(PointState)
    const pointState = useRecoilValue(PointState)
    const symbolClick = useRecoilValue(SymbolClickState)
    const setSymbolClickState = useSetRecoilState(SymbolClickState)
    const symbol = useRecoilValue(SymbolState)
    const num1 = useRecoilValue(Num1State)
    const setNum1 = useSetRecoilState(Num1State)
    const setSymbol = useSetRecoilState(SymbolState)
    const [minClick, setMinClick] = useState(false)
    const [addClick, setAddClick] = useState(false)
    const [divClick, setDivClick] = useState(false)
    const [mulClick, setMulClick] = useState(false)
    const setHistory = useSetRecoilState(HistoryState)
    useEffect(() => {
        if (symbol == '-')
            setMinClick(true)
        if (symbol == '+')
            setAddClick(true)
        if (symbol == '*')
            setMulClick(true)
        if (symbol == '/')
            setDivClick(true)
        if (!symbolClick) {
            setMulClick(false)
            setAddClick(false)
            setMulClick(false)
            setDivClick(false)
        }
    }, [symbol, symbolClick])
    const handelBackSpace = () => {
        if (inVal[inVal.length - 1] == ".")
            setPointState(false)
        let str = inVal.slice(0, -1)
        setInVal(str)
    }
    const handelPoint = () => {
        if (inVal.length > 5) {
            alert("Cannot able to add at place 6")
        }else{
            let strVal = inVal + ".";
            setInVal(strVal);
            setPointState(true)
        }
    }
    const handelSymbolButton = (s: string) => {
        if(inVal.length>6)
        {
            alert("Only 6 digit numbers ar accepted")
        }
        else
        {
            let i = parseFloat(inVal)
            setNum1(i)
            setInVal("")
            setSymbolClickState(true)
            setSymbol(s)
        }
    }
    const handelEqualSymbol = () => {
        const n2 = parseFloat(inVal);
        console.log(n2)
        let ans: number | string = 0;

        switch (symbol) {
            case '-':
                ans = num1 - n2;
                if (!Number.isInteger(ans)) {
                    ans = ans.toFixed(2)
                } 
                break;
            case '+':
                ans = num1 + n2;
                if (!Number.isInteger(ans)) {
                    ans = ans.toFixed(2)
                } 
                break;
            case '*':
                ans = num1 * n2;
                if (!Number.isInteger(ans)) {
                    ans = ans.toFixed(2)
                } 
                break;
            case '/':
                if (n2 === 0) {
                    ans = "Error"
                    setInVal("Error");
                } else {
                    ans = num1 / n2;
                    if (!Number.isInteger(ans)) {
                        ans = ans.toFixed(2)
                    } 
                }
                break;
            default:
                console.log('Invalid symbol');
                return;
        }
        setInVal("" + ans);
        setHistory(prevHistory => [{ ans: "" + ans, num1: "" + num1, num2: "" + n2, symbol }, ...prevHistory]);
        setSymbol(undefined);
        setSymbolClickState(false);
    };
    const handelClearButton = ()=>{
        setInVal("")
        setSymbol(undefined)
        setHistory([])
        setPointState(false)
        setSymbolClickState(false)
    }
    return (
        <div className="fixed bottom-0 p-4">
            <div className="mb-4">
                <input
                    type="text"
                    className="w-full bg-black text-right text-white border border-white text-7xl p-2 rounded-md focus:outline-none overflow-x-auto"
                    style={{
                        appearance: 'none',
                        MozAppearance: 'textfield',
                        WebkitAppearance: 'none',
                        whiteSpace: 'nowrap'
                    }}
                    onChange={(e) => {
                        if(e.target.value.length > 6 )
                        {
                            alert("Cannot enter more than 6 digit")
                        }else{
                            const newValue = e.target.value;
                            console.log(newValue)
                            if (newValue.includes("Error")) {
                                setInVal(newValue.replace("Error", ""));
                            } else {
                                setInVal(newValue);
                            }
                        }
                        
                    }}
                    value={inVal}
                    placeholder="0"
                />
            </div>
            <div className="grid grid-cols-4 gap-1 place-items-center">
                <div className="flex flex-col gap-1">
                    <GrayButton value="AC"  onclick={handelClearButton}/>
                    <BlackButton value="7" />
                    <BlackButton value="4" />
                    <BlackButton value="1" />
                    <BlackButton value="0" />
                </div>
                <div className="flex flex-col gap-1">
                    <GrayButton value="+/-" disable={true} />
                    <BlackButton value="8" />
                    <BlackButton value="5" />
                    <BlackButton value="2" />
                    <BlackButton value="00" />
                </div>
                <div className="flex flex-col gap-1">
                    <GrayButton value="<-" onclick={handelBackSpace} disable={inVal.length == 0} />
                    <BlackButton value="9" />
                    <BlackButton value="6" />
                    <BlackButton value="3" />
                    <BlackButton value="." disable={pointState || inVal.length == 0} onclick={handelPoint} />
                </div>
                <div className="flex flex-col gap-1">
                    <OrangeButton value="/" bg={divClick && symbolClick ? "bg-white" : ""} color={divClick && symbolClick ? "text-amber-400" : ""} disable={symbolClick || inVal.length == 0} onclick={() => handelSymbolButton("/")} />
                    <OrangeButton value="*" bg={mulClick && symbolClick ? "bg-white" : ""} color={mulClick && symbolClick ? "text-amber-400" : ""} disable={symbolClick || inVal.length == 0} onclick={() => handelSymbolButton("*")} />
                    <OrangeButton value="-" bg={minClick && symbolClick ? "bg-white" : ""} color={minClick && symbolClick ? "text-amber-400" : ""} disable={symbolClick || inVal.length == 0} onclick={() => handelSymbolButton("-")} />
                    <OrangeButton value="+" bg={addClick && symbolClick ? "bg-white" : ""} color={addClick && symbolClick ? "text-amber-400" : ""} disable={symbolClick || inVal.length == 0} onclick={() => handelSymbolButton("+")} />
                    <OrangeButton value="=" onclick={handelEqualSymbol} disable={!symbolClick || inVal.length == 0} />
                </div>
            </div>
        </div>
    );
};

export default Calculator;
