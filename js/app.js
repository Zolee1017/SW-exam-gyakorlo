// ide deklaráljátok a függvényeket.


//1. A kapott adatokat rendezd ár(cost_in_credits) szerint növekvő sorrendbe. (advanced bubble)

function sortByPriceAscending(input) {
  var i = input.length - 1;
  var csere;
  while (i > 0) {
    csere = 0;
    for (var j = 0; j < i; j++) {
      if (parseInt(input[j].cost_in_credits) > parseInt(input[j + 1].cost_in_credits)) {
        [input[j], input[j + 1]] = [input[j + 1], input[j]];
        csere = j;
      }
    }
    i = csere;
  }
}
//nem teszteltem, de a facebook csoportban talált kód alapján így kéne kinéznie

//2. Töröld az összes olyan adatot (tehát az objektumot a tömbből) ahol a consumables értéke NULL.

function delNullConsumables(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i].consumables === null) {
      input.splice(i, 1)
    }
  }
}
// Array.splice(x,1); --remove element at position x
//input tömb tetszőleges indexű elemének eltávolítására ezt a megoldást találtam

//3. Az összes NULL értéket (minden objektum minden tulajdonságánál) módosítsd "unknown"-ra

function replaceNullValuesToUnknown(input) {
  for (var i = 0; i < input.length; i++) {
    for (var j in input[i]) {
      if (input[i].hasOwnProperty(k)) {
        if (input[i][j] === null) {
          input[i][j] = 'unknown';
        }
      }
    }
  }
}

//https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value
//162. válasz!!!


//4. Írasd ki így kapott hajók adatait.



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
  delNullConsumables(userDatas);
  replaceNullValuesToUnknown(userDatas);
}
getData('/json/spaceships.json', successAjax);
