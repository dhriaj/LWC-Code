import { LightningElement , api, wire, track } from 'lwc';
import maprecord from '@salesforce/apex/DownloadDocument.maprecord';
import {NavigationMixin} from 'lightning/navigation';
import Title from '@salesforce/schema/Contact.Title';
export default class FIledonwloadandpreview extends NavigationMixin(LightningElement) {

@api recordId='0015i00000WZQmoAAH';
@track wiredsObjectData;
filesList=[];
@wire(maprecord,{recordId : '$recordId'})
wireresult({data,error}){
if(data)
{

    console.log(data);
   this.filesList= Object.keys(data).map(item=>({"label": data[item].Title, "value":item,
 "url":`/sfc/servlet.shepherd/document/download/${item}`
})) 
  

console.log(this.filesList)
}

if(error) 
{
console.log(error);
}
}
previewHandler(event){
    console.log("This is Dataset"+event.target.dataset.id)
    this[NavigationMixin.Navigate]({ 
        type:'standard__namedPage',
        attributes:{ 
            pageName:'filePreview'
        },
        state:{ 
            selectedRecordId: event.target.dataset.id
        }
    })
}

}