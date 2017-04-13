'use strict';

function StoreCalculation(name, mincust, maxcust, avcook){
 this.name = name
 this.mincust = mincust;
 this.maxcust = maxcust;
 this.avcook = avcook;
 this.results = [];
 this.time = ['6am', '7am', '8am', '9am' , '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
 //this.ave = Math.floor((Math.random() * (this.maxcust - this.mincust + 1))+this.mincust);



}

StoreCalculation.prototype.avCust = function () {
  return Math.floor((Math.random() * (this.maxcust - this.mincust + 1))+this.mincust);

}

StoreCalculation.prototype.storeMath = function(){
  for (var i = 0; i < 15; i++){
    var averageCalc = Math.round(this.avcook * this.avCust());
    this.results.push(averageCalc);
    //console.log (this.results);
  }
  console.log (this.results);

};

StoreCalculation.prototype.storeTable = function () {
  var table = document.createElement('table');

  var titleRow = document.createElement('tr');
  var titleHeading = document.createElement('th');
  var titleRow2 = document.createElement('tr');
  var titleHeading2 = document.createElement('th');
  titleHeading.textContent = this.name;
  titleHeading2.textContent = 'Cookies Sold';
  titleRow.appendChild(titleHeading);
  table.appendChild(titleRow);
  titleRow.appendChild(titleHeading2);
  table.appendChild(titleRow2);

  var itemRow, itemName, cookiesSold;
  // create a new row for each item and add it to the table
  for(var i = 0; i < this.time.length; i++){
    itemRow = document.createElement('tr');
    itemName = document.createElement('td');
    itemName.textContent = this.time[i];
    cookiesSold = document.createElement('td');
    cookiesSold.textContent = this.results[i];
    itemRow.appendChild(itemName);
    itemRow.appendChild(cookiesSold);
    table.appendChild(itemRow);
  }

  return table;
};

var table = document.getElementById('table');
var pikeStore = new StoreCalculation ('1st and Pike', 23, 65, 6.3);
  pikeStore.storeMath();
  table.appendChild(pikeStore.storeTable());

var seaTacStore = new StoreCalculation ('SeaTac', 3, 24, 1.2);
  seaTacStore.storeMath();
  table.appendChild(seaTacStore.storeTable());

var seaCentStore = new StoreCalculation ('Central Seattle', 11, 38, 3.7);
  seaCentStore.storeMath();
  table.appendChild(seaCentStore.storeTable());

var capHillStore = new StoreCalculation ('Capitol Hill', 20, 38, 2.3);
  capHillStore.storeMath();
  table.appendChild(capHillStore.storeTable());

var alkiStore = new StoreCalculation ('Alki Beach', 2, 16, 4.6);
  alkiStore.storeMath();
  table.appendChild(alkiStore.storeTable());


function handleStoreSubmit(event){
// stop the browser from reloading
  event.preventDefault();
  var form = event.target;

  var storeTitle = form.storeName.value;
  var storeCustMin = form.custMin.value;
  var storeCustMax = form.custMax.value;
  var storeCookAvg = form.cookAvg.value;

  form.storeName.value = '';
  form.custMin.value = '';
  form.custMax.value = '';
  form.cookAvg.value = '';

  var newStore = new StoreCalculation (storeTitle, storeCustMin, storeCustMax, storeCookAvg);
    newStore.storeMath();
    table.appendChild(newStore.storeTable());

    console.log(handleStoreSubmit);
}

var storeCreateFrom = document.getElementById('create-store');
storeCreateFrom.addEventListener('submit', handleStoreSubmit);








  //
