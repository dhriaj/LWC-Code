import { LightningElement } from 'lwc';
import {ShowToastEvent } from 'lightning/platformShowToastEvent';
import Account_OBJECT from '@salesforce/schema/Account';
import Account_Name_OBJECT from '@salesforce/schema/Account.Name';
import BillingAddress_OBJECT from '@salesforce/schema/Account.BillingAddress';
import OwnerId_OBJECT from '@salesforce/schema/Account.OwnerId';
import Rating_OBJECT from '@salesforce/schema/Account.Rating';
import NumberofLocations_OBJECT from '@salesforce/schema/Account.NumberofLocations__c';


export default class Formviewshow extends LightningElement {

    objectapiname = Account_OBJECT;
    Accountname =Account_Name_OBJECT;
    Billing=BillingAddress_OBJECT;
    owner =OwnerId_OBJECT;
    Rating=Rating_OBJECT;
    Location1=NumberofLocations_OBJECT;
    playerid ='Show the account rcord only';

    handlesucess(event)
    {

        this.playerid= event.detail.id;
        const events = new ShowToastEvent({

titlle : "Successful",
message : "Player Created",
variant : "Success",

        });
        this.dispatchEvent(events);
    }



}