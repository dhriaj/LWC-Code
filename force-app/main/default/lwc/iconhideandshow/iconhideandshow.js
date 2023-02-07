import { LightningElement, track } from 'lwc';

export default class Iconhideandshow extends LightningElement {

@track onlabel ="Show";
mytitle = "Salesforce Noob";
@track cardvisible= false;
performuser(event)
{

const label = event.target.label;

if(label==="Show")
{

this.onlabel = "Hide";
this.cardvisible=true;
}

else if(label==="Hide")
{

    this.onlabel = "Show";
    this.cardvisible=false;
}
}

}