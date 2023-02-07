public class duplicatePhoneOnContactCtrl {
    
    public static void checkDuplicatePhone(List<Contact> conObjItem){
        
        Map<String,String> conMapItem=new Map<String,String>();
        set<String> accStr=new set<String>();
        for(Contact con:conObjItem){
            if(con.AccountId!=null)
                accStr.add(con.AccountId);
        }
        
        for(Contact con:[select Id,Name,Phone,AccountId from Contact where AccountId=:accStr]){
            
            system.debug('check contact reocrd'+con);
            conMapItem.put(con.Phone,con.AccountId);
        }
        for(Contact con:conObjItem){
            if(!conMapItem.isEmpty() &&  conMapItem.containskey(con.Phone)){
                con.addError('Do not allow duplicate Phone number, this phone number is alread exist on related account');
            }
            else if(con.AccountId ==Null)
            {
                
                List<Account> createNewAcc = new List<Account>();
                List<Opportunity> ops = new List<Opportunity>();
                
                Map<String,Contact> conNameKeys = new Map<String,Contact>();
               Map<String,String> conNameKeys1 = new Map<String,String>();
                String accountName;
                for (Contact cont : conObjItem)   
                {  
                   accountName = cont.firstname + ' ' + cont.lastname;  
                    conNameKeys.put(accountName,cont);  
                    conNameKeys1.put(accountName,accountName);  
                      
                    Account accObj = new Account();  
                    accObj.Name = accountName;
                    accObj.Phone= cont.MobilePhone;
                    createNewAcc.add(accObj); 
                    //opertunity Create is blank;
         
                    //conNameKeys1.put(accountName,cont);
              
                }  
                Insert createNewAcc; 
                
                
             
                
               // system.debug('print---------acccc'+createNewAcc);
                for (Account acc : createNewAcc)   
                {  
                    system.debug('mapContainsKey ' + conNameKeys.containsKey(acc.Name));
                    
                          ops.add(new Opportunity(Name=acc.Name + ' Opportunity',
                                       StageName='Prospecting',                 
                                       CloseDate=System.today(),
                                       AccountId=acc.Id));
                   
                    if (conNameKeys.containsKey(acc.Name))   
                    {  
                        conNameKeys.get(acc.Name).accountId = acc.Id;
                        
                        
                        
                    } 
                   
                   
                  
                }
                if(!ops.isempty())
                {
                    
                    insert ops;
                    //Sendmailmessage.sendingmail(ops);
                }
                
                
            }
        }
        
    }
    
}