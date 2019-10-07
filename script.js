/*global fetch*/
var myurl = "https://official-joke-api.appspot.com/random_joke";
    console.log(myurl);
    fetch(myurl)
        .then(function(response)
        {
            return response.json();
        }).then(function(json) 
        {
            console.log(json);
            document.getElementById("jokeSetup").innerHTML = json["setup"];
            document.getElementById("jokePunchline").innerHTML = json["punchline"];
        });