import { ValueState } from "@/atoms/value";
import { useRecoilValue, useSetRecoilState } from "recoil";

interface ButtonProps {
    color?: string;
    bg?: string;
    value: string;
    textSize?: string;
    onClick?: () => void;
    disable?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    color = 'text-white',
    bg = 'bg-gray-800',
    value,
    textSize = 'text-4xl',
    onClick,
    disable = false
}) => {
    const setValue = useSetRecoilState(ValueState);
    const inVal = useRecoilValue(ValueState);

    return (
        <button
            className={`${color} ${bg} w-20 h-20 flex items-center justify-center rounded-full sm:w-16 sm:h-16 ${textSize} font-medium 
            ${disable ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer'} `}
            disabled={disable}
            onClick={disable ? undefined : onClick ? onClick : () => {
                console.log(inVal.length)
                if (inVal.length > 5) {
                    alert("Cannot enter more than 6 digit")
                }
                else {
                    if (inVal.includes("Error")) {
                        setValue(value);
                    } else {
                        let strVal = inVal + value;
                        setValue(strVal);
                    }
                }
            }}
        >
            {value}
        </button>
    );
}

export default Button;
