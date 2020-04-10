$(function(){
    
    $("#allnews > div").slice(0, 2).show();
    $("#more").on('click' , function(){
        
        $("#allnews > div:hidden").slice(0, 2).slideDown();
    })
})

