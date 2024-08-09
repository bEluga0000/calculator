import { HistoryTextProps } from '@/components/HistoryText'
import {atom} from 'recoil'
export const ValueState = atom<string>({
    key:'ValueState',
    default:""
})
export const PointState = atom<boolean>({
    key:'PointState',
    default:false
})
export const SymbolClickState = atom<boolean>({
    key:'SymbolClickState',
    default:false
})
export const SymbolState = atom<string|undefined>({
    key:'SymbolState',
    default:undefined
})
export const Num1State = atom<number>({
    key:'Num1State',
    default:0
})

export const HistoryState = atom<HistoryTextProps[]>({
    key: 'HistoryState',
    default: [],
});

