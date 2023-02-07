import { LightningElement , track } from 'lwc';
import getcontactdetails from '@salesforce/apex/Datagrid.getcontactdetails';

export default class GridViewData extends LightningElement {

    @track gridcolumn = [

        {
            type : 'text',
            fieldName :'Id',
            label : 'Id'
            },
{
type : 'text',
fieldName :'Name',
label : 'Name'
},

{
    type : 'text',
    fieldName :'FirstName',
    label : 'FirstName'
    },

    {
        type : 'text',
        fieldName :'LastName',
        label : 'LastName'
        },
        

    ];

    @track datagrid;

connectedCallback()
{
    getcontactdetails()
    .then(result=>{


          console.log("Print the result" +JSON.stringify(result));
           var tempcontact= JSON.parse(JSON.stringify(result));
           // console.log("Tempcontact" +JSON.stringify(tempcontact));

                      for(var i=0; i<tempcontact.length;i++)
{

                            var newcontact = tempcontact[i]['Contacts'];
                         //   console.log("newcontact" +JSON.stringify(newcontact));
                       //  console.log('new contact=>>>>>>>>>>>>'+JSON.parse(JSON.stringify(newcontact)));

                            if(newcontact)
                            {
                                tempcontact[i]._children=newcontact;
                                delete tempcontact[i].Contacts;

                            }
                            
}
this.datagrid=tempcontact;

 })

 .catch(error=>{

console.log(JSON.stringify(error));

 })
}

}