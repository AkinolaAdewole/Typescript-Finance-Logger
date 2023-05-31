import { Hasformatter } from "../interfaces/HasFormatter.js";

/*
1. Register a list container (ul) in a constructor
2. Create a render method to render a new list (li) to the container
 -- Accept arguments : Invoice or Payment, a heading and a postion
 -- create html template (li,h4,p)
 -- Add the list (li) to the start/end of the list  
*/

export class listTemplate{
    constructor(private container:HTMLUListElement){}
    render(item:Hasformatter, header:string, position:'start'|'end'){
        const li=document.createElement('li')
        const h4=document.createElement('h4');
        //set the innertext of h4 to heading that I am passing
        h4.innerText=header;
        //Append the h4 to the li that I created
        li.append(h4);

        // create a paragraph tag for the li
        const p= document.createElement('p');
        p.innerText=item.format();
        li.append(p);
         

        if(position === 'start'){
            this.container.prepend(li);
        } else{
            this.container.append(li);
        }
    }

}