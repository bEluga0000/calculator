import Button from "./Buttons"
const BlackButton = ({ value, textSize,onclick,disable}: { value: string, textSize?: string ,onclick?:()=>void,disable?:boolean}) => {
    return <div>
        <Button bg="bg-gray-800" color="text-white" value={value} textSize={textSize} onClick={onclick} disable={disable}/>
    </div>
}
export default BlackButton