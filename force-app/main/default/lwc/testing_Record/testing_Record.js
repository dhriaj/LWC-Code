import { LightningElement, api } from 'lwc';

export default class Testing_Record extends LightningElement {

@api recordId;

connectedCallback()

  {window.alert(this.recordId);
console.log(this.recordId);

}

}