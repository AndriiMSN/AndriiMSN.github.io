/*СЛУШАТЕЛЬ ПЕРЕКЛЮЧАТЕЛЯ */
$(".container-check input:radio").click(function () {
  if ($(this).is(":checked")) {
    $(".container-check input:radio").not(this).prop("checked", false);
  }
});

//Запуск Счетчика
$(document).ready(function () {
  let length = document.querySelectorAll(".html span"); // Получаем к-во элементов
  a = 0; // Ставим на 0 первое значение
  for (var i in length) {
    // Для каждого значения length
    a++; // увеличиваем значение на 1 с каждой итерацией
    MyCount(a); // запскаем функцию с параметром
  }
});

/*Счетчик */

/* CIRCLE */
function Circle(id,value){
  $(''+id+'').circleProgress({
    value: value,
    size: 100,
    fill: {
      gradient: ["red", "orange"]
    }
  });
}

/*MAIN */
function MyCount(a) {
  console.log("Элемент по счету - " + a); // Выводим в кконсоль элемент по счету
  var txt = parseInt(
    document.querySelector(".html:nth-child(" + a + ")  span").innerText
  );
  console.log("Числовое знчение - " + txt); //Выводим в консоль числовое значение элемента
  let blockTop = $(".html.row").offset().top, // Получаем отступ блока
    wh = window.innerHeight, // Высота видимой части
    flag = true, // Флаг активации
    counter = (_) => {
      if (counter._count > txt) {
        // Если счёт дошёл до нужного, то
        $(".html:nth-child(" + a + ")  span").text(txt); // Сбросим
        flag = !flag; // Всё
        return; // И выходим
      }

      $(".html:nth-child(" + a + ")  span").text(counter._count++); // Иначе делаем что нужно

      setTimeout(counter, 0); // И ставим таймер на следующую итерацию
    };
  counter._count = 0; // Обнуляем значение при загрузке
  $(document).ready((_) => {
    // и запускаем счетчик
    flag = !flag;
    counter();
    Circle('#circle', 0.75);
  });
  $(window).scroll((_) => {
    x = $(window).scrollTop();
    // Слушаем скролл окна
    /*if ($(window).width() < "767.98") {} else {
      if (flag && blockTop < x + wh / 5 && blockTop > x + (wh / 5 - 30)) {
        
        // Если флаг позволяет запустить таймер и скролл дошёл
        flag = !flag; // Меняем доступность флага (чтобы каждый раз не запускался счётчик и не навешал сотню таймеров)
        counter._count = 0;
        counter(); // Запускаем что надо
      }
    } */
    if (flag && blockTop < x + wh / 2 && blockTop > x + (wh / 2 - 80)) {
      // Если флаг позволяет запустить таймер и скролл дошёл
      flag = !flag; // Меняем доступность флага (чтобы каждый раз не запускался счётчик и не навешал сотню таймеров)
      counter._count = 0;
      counter(); // Запускаем что надо
    }

    console.log("blockTOP  " + blockTop);
    console.log("2- " + x + wh / 2 + "\n3- " + x + (wh / 2 - 10));
    $(window).scroll(function () {
      x = $(window).scrollTop();
      if (blockTop < x + wh / 2 && blockTop > x + (wh / 2 - 80)) {
        Circle('#circle', 0.75);
      }
    })
  });
}



/*TIMER */
timeend = new Date();

timeend = new Date(2019, 11, 1, 00, 00);

async function time() {
  today = new Date();
  today = Math.floor((today - timeend) / 1);
  /*if (today < timeend) {
        document.getElementById('d').innerHTML = 0;
        document.getElementById('h').innerHTML = 0;
        document.getElementById('m').innerHTML = 0;
        document.getElementById('s').innerHTML = 0;
        document.getElementById('ml').innerHTML = 0;
        return false;
    } */
  tmsec = today % 1000;
  today = Math.floor(today / 1000);
  if (tmsec < 100) tmsec = "0" + tmsec;
  tsec = today % 60;
  today = Math.floor(today / 60);
  if (tsec < 10) tsec = "0" + tsec;
  tmin = today % 60;
  today = Math.floor(today / 60);
  if (tmin < 10) tmin = "0" + tmin;
  thour = today % 24;
  today = Math.floor(today / 24);
  timetoday = today;
  timehour = thour;
  timemin = tmin;
  timesec = tsec;
  timemsec = tmsec;
  document.getElementById("d").innerHTML = timetoday;
  document.getElementById("h").innerHTML = timehour;
  document.getElementById("m").innerHTML = timemin;
  document.getElementById("s").innerHTML = timesec;
  window.setTimeout("time()", 10);
}

$(document).ready(function changeText() {
  window.setInterval(function text() {
    var x = document.querySelector("#h");
    var q = x.innerText;
    var y = document.querySelector("div.reverse > div:nth-child(3) > p");

    if (q == "1" || q == "21") {
      y.innerText = "час";
    } else if (
      q == "2" ||
      q == "3" ||
      q == "4" ||
      q == "22" ||
      q == "23" ||
      q == "24"
    ) {
      y.innerText = "часа";
    } else {
      y.innerText = "часов";
    }
  }, 10);
  //КОД СОКРАЩЕН -- ПЕРЕНЕСТИ В ОСТАЛЬНЫЕ!!!
  window.setInterval(function textToday() {
    var x = document.querySelector("#d").innerText;
    var str = String(x);
    var q = str[str.length - 1];
    var y = document.querySelector("div.reverse > div:nth-child(2) > p");
    if (q == "1") {
      y.innerText = "день";
    } else if (q == "2" || q == "3" || q == "4") {
      y.innerText = "дня";
    } else {
      y.innerText = "дней";
    }
  }, 10);

  window.setInterval(function textMinut() {
    var x = document.querySelector("#m");
    var q = x.innerText;
    var y = document.querySelector("div.reverse > div:nth-child(4) > p");

    if (q == "01" || q == "21" || q == "31" || q == "41" || q == "51") {
      y.innerText = "минута";
    } else if (
      q == "02" ||
      q == "03" ||
      q == "04" ||
      q == "22" ||
      q == "23" ||
      q == "24" ||
      q == "32" ||
      q == "33" ||
      q == "34" ||
      q == "42" ||
      q == "43" ||
      q == "44" ||
      q == "52" ||
      q == "53" ||
      q == "54"
    ) {
      y.innerText = "минуты";
    } else {
      y.innerText = "минут";
    }
  }, 10);

  window.setInterval(function textSecund() {
    var x = document.querySelector("#s");
    var q = x.innerText;
    var y = document.querySelector("div.reverse > div:nth-child(5) > p");

    if (q == "01" || q == "21" || q == "31" || q == "41" || q == "51") {
      y.innerText = "секунда";
    } else if (
      q == "02" ||
      q == "03" ||
      q == "04" ||
      q == "22" ||
      q == "23" ||
      q == "24" ||
      q == "32" ||
      q == "33" ||
      q == "34" ||
      q == "42" ||
      q == "43" ||
      q == "44" ||
      q == "52" ||
      q == "53" ||
      q == "54"
    ) {
      y.innerText = "секунды";
    } else {
      y.innerText = "секунд";
    }
  }, 10);
});
