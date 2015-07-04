//Angular
(function() {
  var app = angular.module("coursework", []);

  app.controller("YearController", function(){
    this.year = 2;

    this.setYear = function(value){
      this.year = value;
    };

    this.isSet = function(value){
      return this.year === value;
    };
  });

  app.controller("TeachingController", function(){
    this.teach = 3;

    this.setTeaching = function(value){
      this.teach = value;
    };

    this.isSet = function(value){
      return this.teach === value;
    };
  });
})();

var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["Java", "HTML / CSS", "JavaScript", "OCaml", "Python"],
    datasets: [
        {
            label: "My Programming Skills",
            fillColor: "rgba(151, 187, 205, 0.5)",
            strokeColor: "rgba(151, 187, 205, 0.8)",
            highlightFill: "rgba(151, 187, 205, 0.75)",
            highlightStroke: "rgba(151, 187, 205, 1)",
            data: [4, 3.000001, 3, 2.5, 1]
        }
    ]
};

var myBarChart = new Chart(ctx).Bar(data, {
    scaleBeginAtZero : true,
    scaleShowHorizontalLines: false,
    scaleShowVerticalLines: false,
    scaleFontStyle: "normal",
    responsive: true,
    tooltipTemplate: function (d) {
      if (d.value == 4) {
        return "Learned in CIS 110 and CIS 120";
      }
      if (d.value == 3.000001) {
        return "Learned at Enertiv and free time";
      }
      if (d.value == 3) {
        return "Learned at Enertiv and free time. Used Angular, D3, crossfilter, and dc.js";
      }
      if (d.value == 2.5) {
        return "Learned in CIS 120";
      }
      if (d.value == 1) {
        return "Learned in free time";
      }
    }
});

jQuery(document).ready(function($) {
    $(".counter").counterUp({
        delay: 10,
        time: 600
    });
});