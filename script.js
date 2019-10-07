function run(){
    var punchline = "";
    document.getElementById("jokePunchline").innerHTML = punchline;
    /*global fetch*/
    var myurl = "https://official-joke-api.appspot.com/random_joke";
    // console.log(myurl);
    fetch(myurl)
        .then(function(response)
        {
            return response.json();
        }).then(function(json) 
        {
            console.log(json);
            document.getElementById("jokeSetup").innerHTML = json["setup"];
            punchline = json["punchline"];
        
    });
    document.getElementById("punchline").addEventListener("click", function(event) {
                    event.preventDefault();
                    document.getElementById("jokePunchline").innerHTML = punchline;
    });
    document.getElementById("reroll").addEventListener("click", function(event) {
                    event.preventDefault();
                    run();
    });
}
