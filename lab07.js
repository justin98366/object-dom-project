'use strict';

function StoreCalculation(name, mincust, maxcust, avcook){
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avcook = avcook;
  this.results = [];
  this.total = 0;
  this.time = ['6am', '7am', '8am', '9am' , '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

}

StoreCalculation.prototype.avCust = function () {
  return Math.floor((Math.random() * (this.maxcust - this.mincust + 1)) + this.mincust);

};

StoreCalculation.prototype.storeMath = function(){
  for (var i = 0; i < 15; i++){
    var averageCalc = Math.round(this.avcook * this.avCust());
    this.results.push(averageCalc);
    this.total += this.results[i];

  }
  console.log (this.results);
  console.log(this.total);
};

StoreCalculation.prototype.storeTable = function () {
  var table = document.createElement('table');

  var titleRow = document.createElement('tr');
  var titleHeading = document.createElement('th');
  var titleRow2 = document.createElement('tr');
  var titleHeading2 = document.createElement('th');
  var tittleRow3 = document.createElement('tr');
  var titleHeading3 = document.createElement('th');
  titleHeading.textContent = this.name;
  titleHeading2.textContent = 'Cookies Sold';
  titleHeading3.textContent = 'Total Cookies';
  titleRow.appendChild(titleHeading);
  table.appendChild(titleRow);
  titleRow.appendChild(titleHeading2);
  table.appendChild(titleRow2);
  titleRow.appendChild(titleHeading3);
  table.appendChild(tittleRow3);

  var itemRow, itemTime, cookiesSold, itemTotalName, itemTotalData, itemData;

  for(var i = 0; i < this.time.length; i++){
    itemRow = document.createElement('tr');
    itemData = document.createElement('td');
    itemTime = document.createElement('td');
    itemTime.textContent = this.time[i];
    cookiesSold = document.createElement('td');
    cookiesSold.textContent = this.results[i];
    itemTotalName = document.createElement('td');
    itemTotalData = document.createElement('td');
    itemRow.appendChild(itemTime);
    itemRow.appendChild(cookiesSold);
    table.appendChild(itemRow);

  }

  itemTotalData = document.createElement('td');
  itemTotalData.textContent = this.total;
  itemRow.appendChild(itemTotalData);

  return table;
};

var app = document.getElementById('app');
var pikeStore = new StoreCalculation ('1st and Pike', 23, 65, 6.3);
pikeStore.storeMath();
app.appendChild(pikeStore.storeTable());

var seaTacStore = new StoreCalculation ('SeaTac', 3, 24, 1.2);
seaTacStore.storeMath();
app.appendChild(seaTacStore.storeTable());

var seaCentStore = new StoreCalculation ('Central Seattle', 11, 38, 3.7);
seaCentStore.storeMath();
app.appendChild(seaCentStore.storeTable());

var capHillStore = new StoreCalculation ('Capitol Hill', 20, 38, 2.3);
capHillStore.storeMath();
app.appendChild(capHillStore.storeTable());

var alkiStore = new StoreCalculation ('Alki Beach', 2, 16, 4.6);
alkiStore.storeMath();
app.appendChild(alkiStore.storeTable());
