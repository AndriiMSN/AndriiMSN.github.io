
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

    
                      /*d, [21.02.20 04:58]
$.getJSON('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5' , function(data2) {
        let x = document.getElementById("conv");
        let y = x.selectedIndex;
        let z = document.getElementsByClassName("Pclass");
        let currencyInfo = null;
        for (let i = 0; i < data2.length; i++) {
            if (data2[i].ccy === y) {
                currencyInfo = data2[0] ;
                break;
            }
        }
        for (let z1=0;z1<z.length;z1++){ // Изначально проходим по всем элементам с классом Pclass
            console.log(data2[y].buy);
            z[z1].innerText = Math.round(+z[z1].innerText / +data2[y].buy);
            var param = document.getElementById('Current');
            param.innerText = data2[y].buy;
        }
        x.onchange = function () { // Отслеживаем изменение валюты
            var param = document.getElementById('Current');
            let y = x.selectedIndex; // Получаем индекс валюты
            console.log('Ставка валюты');
            console.log(data2[y].buy);
            for (let i1=0;i1<z.length;i1++){ // Перебираем поля
                console.log('Параметр до расчёта');
                console.log(z[i1].innerText);
                console.log('Параметр умножения');
                console.log(+param.innerText);
                console.log('Возвращаем в гривны');
                console.log(+z[i1].innerText * +param.innerText);
                z[i1].innerText = Math.round((+z[i1].innerText * +param.innerText) / +data2[y].buy);
                console.log('Параметр после расчёта');
                console.log(z[i1].innerText);
                console.log('______________')
            }
            param.innerText = data2[y].buy;
            console.log(param);
            console.log(data2[y].buy);
        }
    }
    }); */