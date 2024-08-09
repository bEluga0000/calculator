export interface HistoryTextProps{
    num1?:string,
    num2?:string,
    symbol?:string,
    ans?:string
}
const HistoryText:React.FC<HistoryTextProps> = ({
    num1="68686868",
    num2="9669696",
    symbol="+",
    ans="Error"
})=>{
    return <div>
        <p className="text-lg">{`${num1} ${symbol} ${num2} = ${ans}`}</p>
    </div>
}
export default HistoryText