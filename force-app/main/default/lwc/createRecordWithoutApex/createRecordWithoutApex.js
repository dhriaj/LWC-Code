import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import Account_OBJECT from '@salesforce/schema/Account';
import Field_Name from '@salesforce/schema/Account.Name';
export default class CreateRecordWithoutApex extends LightningElement {

    accountid;
    name='';
    handelchange(event)
    {

        this.name=event.target.value;
        
    }


    handelclick()
    {
const fields ={};
fields[Field_Name.fieldApiName]=this.name;
console.log('Fileds----------->' + JSON.stringify(fields));
const recordinput={apiName :Account_OBJECT.objectApiName,fields};

createRecord(recordinput)
.then(account1=>{

    this.accountid=account1.id;

    });
    
    } 

}