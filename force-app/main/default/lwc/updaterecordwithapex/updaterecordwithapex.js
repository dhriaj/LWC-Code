import { LightningElement } from 'lwc';
import ID_field from '@salesforce/schema/Account.Id';
import Name_field from '@salesforce/schema/Account.Name';
import { updateRecord } from 'lightning/uiRecordApi';
export default class Updaterecordwithapex extends LightningElement {

    idvaalue;
    namevalue;

    inputvalue(event)
    {
this.idvaalue=event.target.value;

    }

    namechange(event)
    {

        this.namevalue=event.target.value;
    }

    hndelclick()
    {

        const fields={};
        fields[ID_field.fieldApiName]=this.idvaalue;
        fields[Name_field.fieldApiName]=this.namevalue;

        const recordupdate ={fields};
        updateRecord(recordupdate)
        .then(result=>{
comsole.log(JOSN.stringify(result));



        }); 


    }


}