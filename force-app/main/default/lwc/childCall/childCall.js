import { api, LightningElement } from 'lwc';

export default class ChildCall extends LightningElement {

    @api countvalue1 =0;

    @api maximimizecounter()
    {
this.countvalue1 = this.countvalue1 + 100;

    }


    hanelsubtract()

    {
this.dispatchEvent(new CustomEvent('subtract'));

    }

    haneladd()

    {

this.dispatchEvent(new CustomEvent('add'));
    }
    handelmul(event)
    {
const fetchrecord = event.target.value;
this.dispatchEvent(new CustomEvent('multiply',{

    detail : fetchrecord 
} ))

    }
}