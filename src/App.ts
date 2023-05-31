import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { Hasformatter } from "./interfaces/HasFormatter.js";
import { listTemplate } from "./classes/listTemplate.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template
const ul