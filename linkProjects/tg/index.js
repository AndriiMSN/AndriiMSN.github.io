var list = [];

function addItem() {
  list.push([
    document.getElementById("product").value,
    document.getElementById("nmbr").value,
    document.getElementById("price").value,
  ]);
  let messageError = document.getElementById("err"); console.log(list[0]);
  if (list[0][0].length == 0) { messageError.innerHTML = "Введите название товара!" }

  else if (isFinite(list[1])) { messageError.innerHTML = "Введите количество товара!" }
  else if (isFinite(list[2])) { messageError.innerHTML = "Введите стоимость товара!" };


  showList();
}


function showList() {
  var content = document.getElementById("table");
  var rez = "<table>",
    total = 0;
  for (var i = 0; i < list.length; i++) {
    rez += "<tr>";
    for (var j = 0; j < list[i].length; j++) {
      rez += "<td>" + list[i][j] + "</td>";
    }
    rez += '<td><span class="delete" onclick="deleteItem(' + i + ');">&times;</span></td></tr>';
    total += list[i][1] * list[i][2];
  }
  document.getElementById("total").innerHTML = total;
  rez += "</table>";
  content.innerHTML = rez;
}

function deleteItem(row) {
  list.splice(row, 1);
  showList();
}

function checkForEnter(e) {
  if (e.keyCode == 13) {
    document.querySelector(".btn_frm").click();
  }
}