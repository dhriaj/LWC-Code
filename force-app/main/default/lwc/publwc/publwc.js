import { LightningElement , wire } from 'lwc';
import { publish , MessageContext   } from 'lightning/messageService';
import Counting_Updated from '@salesforce/messageChannel/Counting_Update__c';
export default class Publwc extends LightningElement {

@wire(MessageContext)
messageContext;

handelincrement()
{
const playload = {

    operator : 'Add',
    Constant : 1  };
    publish(this.messageContext,Counting_Updated, playload);
    console.log(playload);
}

handeldecrement()
{
    const playload = {

        operator : 'Sub',
        Constant : 1  };
        publish(this.messageContext,Counting_Updated, playload);
        console.log(playload);

}

handelmulti()
{

    const playload = {

        operator : 'Mul',
        Constant : 2  };
        publish(this.messageContext,Counting_Updated, playload);
}

}