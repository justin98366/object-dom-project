'use strict';

var pikeLoc = {
  minCust: 23,
  maxCust: 65,
  avCookie: 6.3,
  results: [],
  rndCust: function() {
    return Math.floor((Math.random() * (this.maxCust - this.minCust + 1))+this.minCust);

  },

  storeCalc: function(){
    for (var i = 0; i < 16; i++){
      var averageCalc = Math.round(this.avCookie * this.rndCust());
      this.results.push(averageCalc);
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

console.log(pikeLoc.storeCalc);
