'use strict';
var storeHours = ['6am', '7am', '8am', '9am' , '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var counter = 0;
var pikeStore = document.getElementById('andPike');
var seaTacStore = document.getElementById('seaTac');

var pikeLoc = {
  minCust: 23,
  maxCust: 65,
  avCookie: 6.3,
  results: [],
  rndCust: function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust + 1))+this.minCust);

  },

  storeCalc: function(){
    for (var i = 0; i < 15; i++){
      var averageCalc = Math.round(this.avCookie * this.rndCust());
      this.results.push(averageCalc);
      var liEl = document.createElement('li');
      liEl.textContent = storeHours[i] + ': ' + pikeLoc.results[i] + ' cookies.';

      pikeStore.appendChild(liEl);

    }

  },


};

var seatacLoc = {
  minCust: 3,
  maxCust: 24,
  avCookie: 1.2,
  results: [],
  rndCust: function(){
    return Math.floor((Math.random() * (this.maxCust - this.minCust + 1))+this.minCust);
  },
  storeCalc: function(){
    for (var i = 0; i < 16; i++){
      var averageCalc = Math.round(this.avCookie * this.rndCust());
      this.results.push(averageCalc);
    }

  },
};

var seaCentLoc = {
  minCust: 11,
  maxCust: 38,
  avCookie: 3.7,
  results:[],
  rndCust: function(){
    return Math.floor((Math.random() * (this.maxCust - this.minCust + 1))+this.minCust);
  },
  storeCalc: function(){
    for (var i = 0; i < 16; i++){
      var averageCalc = Math.round(this.avCookie * this.rndCust());
      this.results.push(averageCalc);
    }

  },
};

var capHillLoc = {
  minCust: 20,
  maxCust: 38,
  avCookie: 2.3,
  results: [],
  rndCust: function(){
    return Math.floor((Math.random() * (this.maxCust - this.minCust + 1))+this.minCust)
  },
  storeCalc: function(){
    for (var i = 0; i < 16; i++){
      var averageCalc = Math.round(this.avCookie * this.rndCust());
      this.results.push(averageCalc);
    }

  },
};

var alkiLoc = {
  minCust: 2,
  maxCust: 16,
  avCookie:4.6,
  results: [],
  rndCust: function(){
    return Math.floor((Math.random() * (this.maxCust - this.minCust + 1))+this.minCust)
  },
  storeCalc: function(){
    for (var i = 0; i < 16; i++){
      var averageCalc = Math.round(this.avCookie * this.rndCust());
      this.results.push(averageCalc);
    }

  },
};

pikeLoc.storeCalc();
