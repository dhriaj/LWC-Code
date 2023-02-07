public class Datagrid {
    
    @AuraEnabled
    
    Public static List<Account> getcontactdetails()
    {
        
        List<Account> list1 = [Select Id, name,(select id, firstname,lastname from contacts) from account];
        if(!list1.isEmpty())
        {
            
            return list1;
            
        }
        
        return null;
        
    }

}