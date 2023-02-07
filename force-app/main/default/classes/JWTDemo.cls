public class JWTDemo {
    
    Public static void JWT()
    {
        Auth.JWT jwt = new Auth.JWT();
jwt.setSub('dheeraj@hotmail.com');
jwt.setAud('https://login.salesforce.com'); 
jwt.setIss('3MVG9wt4IL4O5wvL_dWr6.eahGjxQPAXaXvlpQqc5Xlh6u.NOqg4DvSUE5AM1NfKS2Kdk0KRdqxcLMxLtGK5W');
map<string,object> claims = new map<string,object>();
 claims.put('exp',System.now().gettime());
  jwt.setadditionalClaims(claims);

//Create the object that signs the JWT bearer token
Auth.JWS jws = new Auth.JWS(jwt,'Salesfrocejwtapex');
String token = jws.getCompactSerialization();
        system.debug('token line 16'+token);
String tokenEndpoint ='https://login.salesforce.com/services/oauth2/token';
system.debug('print 11111');
Auth.JWTBearerTokenExchange bearer = new Auth.JWTBearerTokenExchange(tokenEndpoint, jws);
system.debug('print line 19');
//Get the access token
String accessToken = bearer.getAccessToken();
system.debug('Access Token-->'+accessToken);



Http http = new Http();
HttpRequest req = new HttpRequest();
        req.setHeader('Authorization','Bearer '+ accessToken);
req.setEndpoint('https://interlynx3-dev-ed.my.salesforce.com/services/data/v54.0/sobjects/Account/');
req.setMethod('GET');
HTTPResponse res = http.send(req);
System.debug(res.getBody());
System.debug(res.getstatuscode());
        
    }

}