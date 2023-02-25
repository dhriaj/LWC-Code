import { LightningElement, api } from 'lwc';
import jQuery from '@salesforce/resourceUrl/jQuery';
import { loadScript } from 'lightning/platformResourceLoader';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ThirdParty extends LightningElement {

  
    renderedCallback(){
        loadScript(this, jQuery)
        .then(() => {
            console.log('JQuery loaded.');
        })
        .catch(error=>{
            console.log('Failed to load the JQuery : ' +error);
        });
        }
    
        slideIt(event){
        $(this.template.querySelector('.panel')).slideToggle("slow");
        }
    
        slideRight(event){
        $(this.template.querySelector('.innerDiv')).animate({left: 
        '275px'});
        }

}