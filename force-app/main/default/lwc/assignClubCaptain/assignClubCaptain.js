import Name from '@salesforce/schema/Account.Name';
import { LightningElement, track, api } from 'lwc';
import getPlayerList from '@salesforce/apex/assignClubCaptain.getPlayerList';
import assignClubCaptain from '@salesforce/apex/assignClubCaptain.assignClubCaptain';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';


const actions =[ { label : 'Assign' , name:'Assign'}, { label : 'view', name :'view'},];    

const columns = [{ label : 'Players' , fieldName : 'Name'},
{label : 'Goals', fieldName : 'Goals__c'},

{ type : 'action',    
typeAttributes :{ rowActions : actions },
},

];


export default class AssignClubCaptain extends LightningElement {

@track ShowPalyers = 'Show';
@track isvisible=false;
@api recordId;
@track data=[];
@track playerData=[];
@api error;
columns=columns;


connectedCallback()
{

    console.log(this.recordId);
    getPlayerList({ selectedIdFromLWc : this.recordId})
    
.then(result =>{

    this.data=result;
})

    
}

handleclick(event)
{

    const label = event.target.label;
    if(label === 'Show')
    {
window.alert("Show");
        this.ShowPalyers = 'Hide';
        this.isvisible = true;
    }
    else if(label === 'Hide')
    {
this.ShowPalyers = 'Show';
this.isvisible = false;

    }

}
handleRowAction(event)
{

const rowaction = event.detail.action.name;
window.alert(rowaction);
const row =event.detail.row;

switch(rowaction)
{

case 'Assign' :
this.assignClubCaptain(row);

break;

case 'view' :
    
    window.alert("View Content"+row.Id);
this.navigateToplatformrecord(row);

break;
default:
}
}

assignClubCaptain(Currentrow)
{
    window.alert("Assign cpation" +Currentrow.Id + ' ' +  Currentrow.Football_Club__c );
const selectedRow = Currentrow;
window.alert(selectedRow.Id);
assignClubCaptain({lwcRowId : selectedRow.Id})
.then(result =>{

    this.playerData=result;
})
.catch(error =>{
    this.error=error;
})
this.showSuccesstoast();
window.location.reload;
}
showSuccesstoast(){

    const event = new ShowToastEvent({
        label : 'Record Updated',
        message : 'Captain Assing the role',
        variant : 'success',
        mode : 'dismissable'
    });
    this.dispatchEvent(event);
}
navigateToplatformrecord(rowData)
{
const palyer = rowData;
window.alert("Show the navigate page" + palyer.Id);
window.alert("get record id"+this.recordid);
    this[NavigationMixin.Navigate]({

        type : 'standard_objectPage',
        attributes :{

            //recordid : palyer.Id,
            objectApiName : "Contact",
            actionName : 'new'
        }
    })
}

}