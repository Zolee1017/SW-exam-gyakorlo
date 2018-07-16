// ide deklaráljátok a függvényeket.


//1. A kapott adatokat rendezd ár(cost_in_credits) szerint növekvő sorrendbe.

function sortByPriceAscending(input) {
  var i = input.length - 1;
  var csere;
  while (i > 0) {
    csere = 0;
    for (var j = 0; j < i; j++) {
      if ((input[j].cost_in_credits == "unknown") || (parseInt(input[j].cost_in_credits) > parseInt(input[j + 1].cost_in_credits))) {
        [input[j], input[j + 1]] = [input[j + 1], input[j]];
        csere = j;
      }
    }
    i = csere;
  }
}

//2. Töröld az összes olyan adatot (tehát az objektumot a tömbből) ahol a consumables értéke NULL.

function delNullConsumables(input) {
  for (var i = input.length - 1; i >= 0; i--) {
    if (input[i].consumables == null) {
      input.splice(i, 1)
    }
  }
}
// Array.splice(x,1); --remove element at position x

//3. Az összes NULL értéket (minden objektum minden tulajdonságánál) módosítsd "unknown"-ra

function replaceNullValuesToUnknown(input) {
  for (var i = 0; i < input.length; i++) {
    for (var j in input[i]) {
      if (input[i].hasOwnProperty(j)) {
        if (input[i][j] === null) {
          input[i][j] = 'unknown';
        }
      }
    }
  }
}

//https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value


//4. Írasd ki így kapott hajók adatait.



function displayData(input) {
  var target = document.querySelector('.spaceship-list');

  for (var i = 0; i < input.length; i++) {
    var div = document.createElement('div');
    div.className = 'oneShip';
    var result = "";
    for (var j in input[i]) {
      result += j + ' : ' + input[i][j] + '<br>';
    }
    result += "<br><hr>";
    div.innerHTML = result;
    target.appendChild(div);
  }

}

//6. Készítened kell egy statisztikát, mely kiírja a következő statisztikai adatokat:

function statistics(input) {
  var displayStats = `Egy fős legénységű hajók száma: ${statCrew(input)} db<br>
  A legnagyobb rakterű hajó neve: ${statCargo(input)}<br>
  Az összes utas száma: ${statPassengers(input)}<br>
  A leghosszabb hajó képe: ${statImgOfLongest(input)}`;
  var target = document.querySelector('.spaceship-list');
  var div = document.createElement('div');
  div.className = "statistics";
  div.innerHTML = displayStats;
  target.appendChild(div);
}

//Egy fős (crew = 1) legénységgel rendelkező hajók darabszáma.
function statCrew(input) {
  var counter = 0;
  for (var i = input.length - 1; i >= 0; i--) {
    if (input[i].crew == "1") {
      counter++;
    }
  }
  return counter;
}

//A legnagyobb cargo_capacity-vel rendelkező hajó neve (model)
function statCargo(input) {
  var name = "";
  var maxCapacity = parseInt(input[0].cargo_capacity);
  for (var i = 0; i < input.length; i++) {
    if (parseInt(input[i].cargo_capacity) > maxCapacity) {
      maxCapacity = parseInt(input[i].cargo_capacity);
      name = input[i].model;
    }
  }
  return name + ':' + maxCapacity;
}

//Az összes hajó utasainak (passengers) összesített száma
function statPassengers(input) {
  var sumPassengers = 0;
  for (var i = 0; i < input.length; i++) {
    if (isNaN(parseInt(input[i].passengers)) == false) {
      sumPassengers += parseInt(input[i].passengers)
    }
  }
  return sumPassengers
}

//A leghosszabb(lengthiness) hajó képének a neve
function statImgOfLongest(input) {
  var img = "";
  var maxLength = parseInt(input[0].lengthiness);
  for (var i = 0; i < input.length; i++) {
    if (parseInt(input[i].lengthiness) > maxLength) {
      maxLength = parseInt(input[i].lengthiness);
      img = input[i].image;
    }
  }
  return img;
}

/*7. Legyen lehetőség a hajókra rákeresni _model_ szerint. (logaritmikus/binary sort)

* A keresett nevet paraméterként kapja a függvényed.
* A keresés nem case sensitive
* Nem csak teljes egyezést vizsgálunk, tehát ha a keresett szöveg szerepel a hajó nevében már az is találat
* Ha több találatunk is lenne, azt a hajót adjuk vissza, amelyiknek a neve ABC sorrendben a legelső lenne.
* Írasd ki a hajó adatait.*/

function search(input, find) {
  var result = null;
  for (var i = input.length - 1; i >= 0; i--) {
    if (input[i].model.toLowerCase().indexOf(find) > -1) {
      if ((result == null) || (input[i].model < result.model)) {
        result = input[i];
      }
    }
  }
  return result;
}

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

  delNullConsumables(userDatas);
  replaceNullValuesToUnknown(userDatas);
  sortByPriceAscending(userDatas);
  displayData(userDatas);
  statistics(userDatas);
}
getData('/json/spaceships.json', successAjax);
