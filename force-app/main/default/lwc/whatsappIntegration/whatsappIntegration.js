import { LightningElement ,api} from 'lwc';
import SendTemplateMessage  from '@salesforce/apex/WhatsappController.SendTemplateMessage';
export default class WhatsappIntegration extends LightningElement {

@api recordId;

Onsendmessgaetemplate()
{

    SendTemplateMessage({Contactid: this.recordId})

    .then(result=>{

        window.alert("Message Sent Successfully");
    })
    .catch(error=>{

        Window.alert("Message Failed"+error);
    })
}


}