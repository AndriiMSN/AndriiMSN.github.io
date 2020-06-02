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
function Circle(id, value) {
  $("" + id + "").circleProgress({
    value: value,
    size: 100,
    fill: {
      gradient: ["red", "orange"],
    },
  });
}

$(document).ready(function () {
  Circle("#circle", 0.99);
  Circle("#circle1", 0.89);
  Circle("#circle2", 0.68);
  Circle("#circle3", 0.54);
  Circle("#circle4", 0.76);
  Circle("#circle5", 0.94);
});

$(window).scroll(function () {
  wh = window.innerHeight; // Высота видимой части
  let blockTop = $(".html.row").offset().top; // Получаем отступ блока
  x = $(window).scrollTop();
  if (blockTop < x + wh / 2 && blockTop > x + (wh / 2 - 10)) {
    Circle("#circle", 0.99);
    Circle("#circle1", 0.89);
    Circle("#circle2", 0.68);
    Circle("#circle3", 0.54);
    Circle("#circle4", 0.76);
    Circle("#circle5", 0.94);
  }
});

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

      setTimeout(counter, 15); // И ставим таймер на следующую итерацию
    };
  counter._count = 0; // Обнуляем значение при загрузке
  $(document).ready((_) => {
    // и запускаем счетчик
    flag = !flag;
    counter();
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
    if (flag && blockTop < x + wh / 2 && blockTop > x + (wh / 2 - 10)) {
      // Если флаг позволяет запустить таймер и скролл дошёл
      flag = !flag; // Меняем доступность флага (чтобы каждый раз не запускался счётчик и не навешал сотню таймеров)
      counter._count = 0;
      counter(); // Запускаем что надо
    }
    console.log("blockTOP  " + blockTop);
    console.log("2- " + x + wh / 2 + "\n3- " + x + (wh / 2 - 10));
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

function change(id, num, text1, text2, text3, text4) {
  var x = document.querySelector(id).innerText;
  var str = String(x);
  var q = str[str.length - 1];
  var i = str[str.length - 2];
  var y = document.querySelector('div.reverse > div:nth-child('+num+') > p');
  if (q == "1") {
    y.innerText = `${text1}`;
  } else if (q == "2" || q == "3" || q == "4") {
    y.innerText = `${text2}`;
  } else {
    y.innerText = `${text3}`;
  }
  if (i == "1"){
    y.innerText = `${text4}`;
  }
}

$(document).ready(function changeText() {
  window.setInterval(function text() {
    change("#h", 2, "час", "часа", "часов", "чаов");
  }, 10);
  //КОД СОКРАЩЕН -- ПЕРЕНЕСТИ В ОСТАЛЬНЫЕ!!!
  window.setInterval( function textDay(){
    change("#d", 1, "день", "дня", "дней", "дней")
  }, 10);

  window.setInterval(function textMinut() {
    change("#m", 3, "минута", "минуты", "минут", "минут");
  }, 10);

  window.setInterval(function textSecund() {
    change("#s", 4, "секунда", "секунды", "секунд", "секунд");
  }, 10);
});