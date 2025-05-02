function geekforgreeks(str) {
    var gfg = new XMLHttpRequest(); 
    gfg.open("get", "https://jsonplaceholder.typicode.com/users/1", true); 
    gfg.send(); 

    gfg.onreadystatechange = function gfg1() {
        // if true means reponse has arrived
        if (gfg.readyState == 4 && gfg.status == 200) {
            document.getElementById("name").innerHTML = gfg.responseText
        }
        console.log(gfg.responseText)
    }
}