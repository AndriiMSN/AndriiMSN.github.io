window.setInterval( function text(){
    var x = document.querySelector("#h");
      var q = x.innerText
    var y = document.querySelector("body > div.info > div.reverse.wow.zoomInUp > div:nth-child(2) > p");
    var z = y.innerText;

    if (q == "1" || q == "21") {
        y.innerText = "час";
      } else if (q == "2" || q == "3" || q == "4" || q == "22" || q == "23") {
        y.innerText = "часа";
      } else {
        y.innerText = "часов";
      }

       
    },10 )
    
   