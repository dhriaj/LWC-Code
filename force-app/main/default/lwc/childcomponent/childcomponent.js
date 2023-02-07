import { LightningElement, api } from 'lwc';

export default class Childcomponent extends LightningElement {

  @api  apitest = "this is my child record";

 @api handelechnages()  

  {
this.apitest = "This is LWC Child";

  }
}