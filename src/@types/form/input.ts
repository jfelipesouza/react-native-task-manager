import { TextInputProps } from "react-native"
import { DivisorProps } from "../../components/divisor"


export type InputProps = TextInputProps & DivisorProps & {  
  value?:string
}