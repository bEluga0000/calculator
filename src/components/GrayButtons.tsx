import Button from "./Buttons" 
const GrayButton = ({value,textSize,onclick,disable}:{value:string,textSize?:string,onclick?:()=>void,disable?:boolean})=>{
    return <div>
        <Button bg="bg-gray-500" color="text-black" value={value}  textSize={textSize} onClick={onclick} disable={disable}/>
    </div>
}
export default GrayButton