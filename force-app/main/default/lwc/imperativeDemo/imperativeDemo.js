import { LightningElement, track } from 'lwc';
import getaccount from '@salesforce/apex/Imperativedemoclass.getaccount';

const columns = [{ label : "Name of the record", fieldName: 'Name'},
{label : "RecordID", fieldName: 'Id'},]

export default class ImperativeDemo extends LightningElement {

@track columns = columns;
@track Data =[];


connectedCallback()
{
    getaccount()
    .then(result => {
this.Data=result;

    })

}

}