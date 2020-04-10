
function FunctionName(){
    alert('buy')
}



    $.getJSON('js/tovary.json', function(data) {
            
            for(var i=0;i<data.tovar.length;i++){
                $('#tovary').append('<div class="aaa"  ><h1>' + data.tovar[i].name 
                + '</h1>' + '<img src='+ data.tovar[i].image + '>'+'<p>' 
                + data.tovar[i].price +
                '</p>' 
                +'<button>BUY</button>'+'</div>' );
                $('button').addClass('butt');
                $('button').attr('onClick' , 'FunctionName();');
                $('p').attr('id' , 'price') ;        
                $('p').addClass('Pclass');  

            } 
    });
    



 $.getJSON('js/course.json' , function(data1) {
    
     for(var i=0;i<data1.length;i++){
        $('#conv').append('<option>' + data1[i].ccy + '</option>');
        
     }
    })
  
     
     
    


     $.getJSON('js/tovary.json' , function(data2) {
        let x = document.getElementById("conv");
        let y = x.selectedIndex; 
        let z = document.getElementsByClassName("Pclass");
        
        $('.Pclass').after('<p class="xxx">' + data2.course[y].ccy + '</p>')
        let q = document.getElementsByClassName("xxx");
               
        
        x.onchange = function () { // Отслеживаем изменение валюты
            
           
            let y = x.selectedIndex; // Получаем индекс валюты
            
            for (let i1=0;i1<z.length;i1++){ // Перебираем поля
                
               
                z[i1].innerText =(+data2.tovar[i1].price/+data2.course[y].buy).toFixed(2);
                q[i1].innerText = data2.course[y].ccy
               
                  
                
                
              
            }
                      
        
           
        }
    }
    );

    
                      