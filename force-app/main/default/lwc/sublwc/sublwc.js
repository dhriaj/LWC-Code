import { LightningElement, wire } from 'lwc';
import { subscribe , MessageContext   } from 'lightning/messageService';
import Counting_Updated from '@salesforce/messageChannel/Counting_Update__c';

export default class Sublwc extends LightningElement {

    count=0;
    subscription=null;
    @wire(MessageContext)
    messagecontext;
    connectedCallback()

    {

        this.gettheallrecord();
    }

    gettheallrecord()
    {

        this.subscription=subscribe(this.messagecontext,Counting_Updated,(message)=>
        
        this.handelchange(message)
        
        );
       
    }
    handelchange(message)
    {

        if(message.operator =='Add')
        {

this.count+=message.Constant;
        }
        else if(message.operator=='Sub')
        {

this.count-=message.Constant;
        }
        else if(message.operator=='Mul')
        {

this.count*=message.Constant;
        }
    }
}