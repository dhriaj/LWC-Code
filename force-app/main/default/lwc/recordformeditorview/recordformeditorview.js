import { LightningElement, track } from 'lwc';
import Account_OBJECT from '@salesforce/schema/Account';
import Account_Name_OBJECT from '@salesforce/schema/Account.Name';
import NumberofLocations_OBJECT from '@salesforce/schema/Account.NumberofLocations__c';
export default class Recordformeditorview extends LightningElement {

    @track fields=[Account_Name_OBJECT, NumberofLocations_OBJECT];
    objectapi=Account_OBJECT;
    recordid= '0015i000009AglpAAC';
}