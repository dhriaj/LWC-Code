import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, track,wire } from 'lwc';

const fieldarray=["Account.BillingStreet","Account.BillingCity","Account.BillingState","Account.BillingPostalCode","Account.BillingCountry","Account.Name"];

export default class Googlemapccomponent extends LightningElement {

@api recordId;

@track mapmarkers=[];
BillingStreet;
BillingCity;
BillingState;
BillingPostalCode;
BillingCountry;
Accountname;
@wire(getRecord,{recordId : '$recordId', fields : fieldarray})
wireRecord({data,error})
{

if(data)
{
    console.log("Google MapRecord ----------------->",JSON.stringify(data));
this.BillingState=data.fields.BillingState.value;
this.BillingStreet=data.fields.BillingStreet.value;
this.BillingCity=data.fields.BillingCity.value;
this.BillingCountry=data.fields.BillingCountry.value;
this.BillingPostalCode=data.fields.BillingPostalCode.value;
this.Accountname=data.fields.Name.value;
const marker=[{


   location : {
        Street : this.BillingStreet ? this.BillingStreet :"",
City : this.BillingCity ? this.BillingCity :"",
State : this.BillingState ? this.BillingState :"",
PostalCode: this.BillingPostalCode ? this.BillingPostalCode : "",
Country : this.BillingCountry ? this.BillingCountry : "",
    },
   
  title : this.Accountname ? this.Accountname:"",
  description : "this is test record for testing pruporose",


}];
console.log("Location Data ger",marker);
this.mapmarkers =marker;
console.log("Market get the record",mapmarkers);
this.error=undefined;
}
else  if(error)
{
this.mapmarkers=undefined;
this.error=error;
}
}




}