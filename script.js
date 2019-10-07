/*global fetch*/
function run(){
    var punchline = "";
    document.getElementById("jokePunchline").innerHTML = punchline;
    var myurl = "https://official-joke-api.appspot.com/random_joke";
    var btn1 = document.getElementById("punchline");
    var btn2 = document.getElementById("reroll");
    
    function f(event) {
        event.preventDefault();
        document.getElementById("jokePunchline").innerHTML = punchline;
    }
    function g(event) {
        event.preventDefault();
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
            btn1.onclick = f;
            btn2.onclick = g;
    });
}