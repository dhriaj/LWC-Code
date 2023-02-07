import { LightningElement, wire , track } from 'lwc';
import getlist from '@salesforce/apex/Wireclassdemo.getlist';

const columns = [{label : 'name' , fieldName : 'Name'},
    { label : "id" , fieldName : 'Id'},
];

export default class Wire_record_testing extends LightningElement {

@track columns = columns;   
@track data = [];

@wire(getlist)

getplayerrecord({data, error})
{
    if(data)
    {
    this.data = data;
    }
    else if(error)
    {

        console.log("Error occure");
    }
}

}