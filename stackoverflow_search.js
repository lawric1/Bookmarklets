javascript:(function() { 
    var search = prompt("Search:",""); 
    if (search){ 
        url = "http://google.com/search?q="+ search + " " + "site:stackoverflow.com";
        window.open(url);
    }
})()