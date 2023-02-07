import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LWC_testing_Button extends LightningElement {

testrecord = "this is my test button";

unhandle()

{


this.toastevent();
}

toastevent()

{

    const event = new ShowToastEvent({



title: 'Show toast Event',
message: 'Want to display only for toast event',
variant: 'success',

})

this.dispatchEvent(event);
}
}