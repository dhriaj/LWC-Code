import { LightningElement } from 'lwc';

export default class LWC extends LightningElement {
mytest="Salesforce Noob";

connectedCallback()

{


if(this.mytest)
{
    var name1 = "this is my first Page";
    window.alert("This is test of the page"+name1);
}


}
    
}