import Button from "./Buttons"
const OrangeButton = ({ value, textSize, onclick, disable, bg, color }: { value: string, textSize?: string, onclick?: () => void,disable?:boolean,bg?:string,color?:string}) => {
    return <div>
        <Button bg={bg? bg:"bg-amber-400"} color={color? color:"text-white"} value={value} textSize={textSize} onClick={onclick} disable={disable}/>
    </div>
}
export default OrangeButton