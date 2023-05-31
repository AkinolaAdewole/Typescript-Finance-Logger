import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { Hasformatter } from "./interfaces/HasFormatter.js";
import { listTemplate } from "./classes/listTemplate.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template
const ul= document.querySelector('ul')!;
const list= new listTemplate(ul);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let doc:Hasformatter;

    if (type.value==='Invoice'){
     

        doc=new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
        doc=new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end');

    console.log(
        type.value, 
        tofrom.value, 
        details.value, 
        amount.valueAsNumber,
        doc);
})