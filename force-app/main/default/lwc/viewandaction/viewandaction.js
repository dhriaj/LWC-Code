import { LightningElement ,track, api } from 'lwc';
import getlist from '@salesforce/apex/test.getlist';
import assingvalue from '@salesforce/apex/test.assingvalue';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'; 
import { NavigationMixin } from 'lightning/navigation'; 

const actions =[ { label : 'Assign' , name:'Assign'}, { label : 'View', name :'View'},];

const columns = [{ label: 'ID of the contact' , fieldName: 'Id'},
{label : 'Name of the record', fieldName : 'Name'},

{ type : 'action',    
typeAttributes :{ rowActions : actions },
},

];

export default class Viewandaction extends LightningElement {

@track data=[]; 
@track playerdata=[];   
columns=columns;
@track showlist="Show Contact";
@track isvisible=false;
@api recordId;
@api row;
connectedCallback()
{
window.alert(this.recordId);
    getlist({getselectedrow : this.recordId })
    .then(res =>{

        this.data=res;
    })
    //window.alert(recordId);

}


handleclick(event)
{

const label =event.target.label;

if(label==='Show Contact')
{

    this.showlist='Hide Contact';
    this.isvisible=true;
}

else if(label==='Hide Contact')
{

this.showlist='Show Contact';
this.isvisible=false;

}
}
rowaction(event)
{

const rowaction1 = event.detail.action.name;
window.alert(rowaction1);
const row =event.detail.row;
//window.alert(row.Id);
switch(rowaction1)
{

case 'Assign' :
this.assigncaptain(row);

break;

case 'View' :
    
    
this.navigateredirect1(row);
window.alert("View Content"+row.Id);
break;
default:
}
}

assigncaptain(Cuurentrow)
{

const selectrow=Cuurentrow;
window.alert(selectrow);
assingvalue({rowid : this.selectrow.Id})
.then(sign1 =>{
this.playerdata=sign1;

})

this.showtoastevent()
window.location.reload;
}


navigateredirect1(rowsdata1)
{
//window.alert(rowsdata1.Id);    
    const player= rowsdata1;
    window.alert("Player record" +player.Id);
    
this[NavigationMixin.Navigate]({

    type : 'standard__AppPage',
    attributes :{

        recordId : player.Id,
        rowaction : 'View'
    }
})

}
showtoastevent(){
    const event = new ShowToastEvent({
    label : 'Record updated',
    message : 'Assign value',
    variant : 'Success',
    mode : 'dismissable'
    
    });
    this.dispatchEvent(event);

}
}