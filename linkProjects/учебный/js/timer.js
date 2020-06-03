timeend= new Date();
        
timeend= new Date(2050,2,20,2,00);

async function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1);
    tmsec=today%1000; today=Math.floor(today/1000); if(tmsec<100)tmsec='0'+tmsec;
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);
    timetoday= today ;
    timehour= thour;
    timemin= tmin;
    timesec= tsec;
    timemsec= tmsec;
    document.getElementById('d').innerHTML=timetoday;
    document.getElementById('h').innerHTML=timehour;
    document.getElementById('m').innerHTML=timemin;
    document.getElementById('s').innerHTML=timesec;
    document.getElementById('ml').innerHTML=timemsec;
    window.setTimeout("time()",10);
}