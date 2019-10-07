/*global fetch*/
function run(){
    var punchline = "";
    document.getElementById("jokePunchline").innerHTML = punchline;
    var myurl = "https://official-joke-api.appspot.com/random_joke";
    
    function f(event) {
        event.preventDefault();
        document.getElementById("jokePunchline").innerHTML = punchline;
    }
    function g(event) {
        event.preventDefault();
        document.getElementById("punchline").removeEventListener("click", f);
        document.getElementById("jokePunchline").removeEventListener("click", g);
        run();
    }
    
    fetch(myurl)
        .then(function(response)
        {
            return response.json();
        }).then(function(json) 
        {
            document.getElementById("jokeSetup").innerHTML = json["setup"];
            punchline = json["punchline"];
            document.getElementById("punchline").addEventListener("click", f);
            document.getElementById("reroll").addEventListener("click", g);
    });
}