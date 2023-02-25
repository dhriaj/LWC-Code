import { LightningElement, api, wire } from 'lwc';

import fetchRecs from '@salesforce/apex/LightningCardController.fetchRecs';
import { NavigationMixin } from 'lightning/navigation';
import { loadStyle } from 'lightning/platformResourceLoader';
import LightningCardCSS from '@salesforce/resourceUrl/LightningCard';


    const columns = [   
        { label: 'Subject', fieldName: 'Subject' },
        { label: 'Status', fieldName: 'Status' },
        { label: 'Case Origin', fieldName: 'Origin' }
    ];
    
    export default class LightningCard extends NavigationMixin( LightningElement ) {
    
        @api recordId;
        columns = columns;
        listRecs;
        error;
    
        renderedCallback() {
            
            Promise.all([
                loadStyle( this, LightningCardCSS )
                ]).then(() => {
                    console.log( 'Files loaded' );
                })
                .catch(error => {
                    console.log( error.body.message );
            });
    
        }
    
        @wire(fetchRecs , {strAccId:'$recordId' }) 
        wiredRecs( { error, data } ) {
    
            if ( data ) {
    
                console.log( 'Records are'  + JSON.stringify( data ) );
                this.listRecs = data;
    
            } else if ( error ) {
    
                this.listRecs = null;
                this.error = error;
    
            }
            
        }
    
        createNew() {
    
            this[NavigationMixin.Navigate]({            
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Case',
                    actionName: 'new'                
                }
            });
    
        }
    
        navigateToCaseHome() {
            
            this[NavigationMixin.Navigate]({
                type: 'standard__recordRelationshipPage',
                attributes: {
                    recordId: this.recordId,
                    objectApiName: 'Account',
                    relationshipApiName: 'cases',
                  actionName: 'view'
                }
            });
    
        }
    
    }








