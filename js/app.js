// ide deklaráljátok a függvényeket.


//1. A kapott adatokat rendezd ár(cost_in_credits) szerint növekvő sorrendbe. (advanced bubble)

function sortByPriceAscending(input) {
  var i = input.length - 1;
  var csere;
  while (i > 0) {
    csere = 0;
    for (var j = 0; j < i; j++) {
      if (input[j].cost_in_credits > input[j + 1].cost_in_credits) {
        [input[j], input[j + 1]] = [input[j + 1], input[j]];
        csere = j;
      }
    }
    i = csere;
  }
}

//2. Töröld az összes olyan adatot (tehát az objektumot a tömbből) ahol a consumables értéke NULL.
//Fontos, hogy ne csak undefined-ra állítsd a tömbelemet!!!



function getData(url, callbackFunc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callbackFunc(this);
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}

function successAjax(xhttp) {
  // Innen lesz elérhető a JSON file tartalma, tehát az adatok amikkel dolgoznod kell
  var userDatas = JSON.parse(xhttp.responseText);
  // Innen lehet hívni.
  sortByPriceAscending(userDatas);
}
getData('/json/spaceships.json', successAjax);
