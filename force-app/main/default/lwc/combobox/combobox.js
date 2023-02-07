import { LightningElement , track } from 'lwc';
import getlist from '@salesforce/apex/Combobox.getlist';

export default class Combobox extends LightningElement {

value ='';
@track acclist=[];

get options()
{

// return [{ label :'New', value: 'New Value'},{ label : 'SF Record', value : 'SF Value'},];
return this.acclist;

}
connectedCallback()
{

    getlist()
    .then(result =>{
        let arr=[];
for(var i=0; i< result.length; i++)
{arr.push({ label :result[i].Name , value : result[i].Id }) }
this.acclist=arr;
    })
}

handlechnage(event)
{

    this.value=event.detail.value;
}
}