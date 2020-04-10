window.setInterval( function text(){
    var x = document.querySelector("#h");
      var q = x.innerText
    var y = document.querySelector("body > div.info > div.reverse.wow.zoomInUp > div:nth-child(2) > p");
    var z = y.innerText;

    if (q == "1" || q == "21") {
        y.innerText = "час";
      } else if (q == "2" || q == "3" || q == "4" || q == "22" || q == "23" || q == "24") {
        y.innerText = "часа";
      } else {
        y.innerText = "часов";
      }

       
    },10 )
    
 window.setInterval( function textToday(){
    var x = document.querySelector("#d");
      var q = x.innerText
    var y = document.querySelector("body > div.info > div.reverse.wow.zoomInUp > div:nth-child(1) > p");
    var z = y.innerText;

    if (q == "1" || q == "21" || q == "31") {
        y.innerText = "день";
      } else if (q == "2" || q == "3" || q == "4" || q == "22" || q == "23" || q == "24") {
        y.innerText = "дня";
      } else {
        y.innerText = "дней";
      }

       
    },10 )

    window.setInterval( function textMinut(){
      var x = document.querySelector("#m");
        var q = x.innerText
      var y = document.querySelector("body > div.info > div.reverse.wow.zoomInUp > div:nth-child(3) > p");
      var z = y.innerText;
  
      if (q == "01" || q == "21" || q == "31" || q == "41" || q == "51") {
          y.innerText = "минута";
        } else if (q == "02" || q == "03" || q == "04" || q == "22" || q == "23" || q == "24" || q == "32" || q == "33" || q == "34" || q == "42" || q == "43" || q == "44" || q == "52" || q == "53" || q == "54") {
          y.innerText = "минуты";
        } else {
          y.innerText = "минут";
        }
  
         
      },10 )

      window.setInterval( function textSecund(){
        var x = document.querySelector("#s");
          var q = x.innerText
        var y = document.querySelector("body > div.info > div.reverse.wow.zoomInUp > div:nth-child(4) > p");
        var z = y.innerText;
    
        if (q == "01" || q == "21" || q == "31" || q == "41" || q == "51") {
            y.innerText = "секунда";
          } else if (q == "02" || q == "03" || q == "04" || q == "22" || q == "23" || q == "24" || q == "32" || q == "33" || q == "34" || q == "42" || q == "43" || q == "44" || q == "52" || q == "53" || q == "54") {
            y.innerText = "секунды";
          } else {
            y.innerText = "секунд";
          }
    
           
        },10 )