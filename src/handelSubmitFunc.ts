import {  useRecoilValue, useSetRecoilState } from "recoil"
import { PointState, ValueState } from "./atoms/value"

let inVal = useRecoilValue(ValueState)
let setInVal = useSetRecoilState(ValueState)
let setPointState = useSetRecoilState(PointState)
export const backSpace = () =>{
    if(inVal[inVal.length-1] == ".")
        setPointState(false)
    let str = inVal.slice(0,-1)
    setInVal(str)
}