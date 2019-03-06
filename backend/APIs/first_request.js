var request = require("request");
request("https://weather-ydn-yql.media.yahoo.com/forecastrss?w=2502265", function(error, response, body){
    if(!error && response.statusCode == 200){
        console.log("THING WORKED!")
        console.log(body) // show the HTML for the Google homepage.
    }else if(error){
        console.log("SOMETHING WENT WRONG!");
        console.log(error);
        
    }
});
