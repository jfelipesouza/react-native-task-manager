
export type DateProps = {
  buttonText:string
  label:string,
  mode:'date'|'time',
  setDate:(value:string,type:string,date:Date)=>void,
  type:'date'|'alert',
  display:'spinner'|'default'|'calendar'|'clock'
 

}