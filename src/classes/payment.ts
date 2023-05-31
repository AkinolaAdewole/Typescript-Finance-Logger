import { Hasformatter } from "../interfaces/HasFormatter.js";

export class Payment implements Hasformatter{
    constructor(
        readonly recipient:string,
        private  details:string,
        public amount:number
    ){}
    format(){
        return`${this.recipient} pays ${this.amount} for ${this.details}`      
    }
}