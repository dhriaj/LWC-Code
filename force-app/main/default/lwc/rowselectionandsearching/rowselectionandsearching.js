import { LightningElement ,track ,wire,api } from 'lwc';
import getrecord from '@salesforce/apex/Showcontactandselction.getrecord';
const columns = [{ label: 'Phone' , fieldName: 'Phone'},
{label : 'Name of the record', fieldName : 'Name'}
];

export default class Rowselectionandsearching extends LightningElement {

@track showlist ='Show Contact';
@track isvisible=false;

@track columns=columns;
@track data=[];
@api recordid;
@api searchkey='';
connectedCallback()
{
    getrecord({ lwrecord : this.recordid })
    
.then(result =>{

this.data=result;

})

.catch(err=>{

    console.log("this is error");} )
    }

    handlechnage(event)
    {
this.searchkey=event.target.value;

    getrecord({searchkeys : this.searchkey ,lwrecord : this.recordid })
    .then(res =>{

        this.data=res;
    })
    .catch(er=>{

        console.log("error");
    })

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

getselectedrows(event)
{

    //const selectrowdwtails  = event.detail.selectedRows;
    const selectrowdwtails  = event.detail.selectedRows;


    //window.alert(selectrowdwtails);

    window.alert(JSON.stringify(selectrowdwtails));

}

}