var app = angular.module('chartApp', []);

app.controller('ChartController', ['$scope','$interval', function($scope, $interval){
    $scope.data=[
        {k: 1,v: 54},
        {k: 2,v: 66},
        {k: 3,v: 77},
        {k: 4,v: 70},
        {k: 5,v: 60},
        {k: 6,v: 63},
        {k: 7,v: 55},
        {k: 8,v: 47},
        {k: 9,v: 55},
        {k: 10,v: 30}
    ];

  $scope.hour = 11;

    $interval(function(){
        var key=$scope.hour++;
        var val= Math.round(Math.random() * 100);
        $scope.data.push({k: key, v:val});
      $scope.data.shift();
    }, 200, 100);
}]);

app.directive('thresholdChart', function($parse, $window){
   return{
      restrict: 'EA',
      template: "<svg width='400' height='200'></svg>",
       link: function(scope, elem, attrs) {
           var exp = $parse(attrs.chartData);

           var plot=exp(scope);
           var padding = 20;
           var pathClass="path";
           var xScale, yScale, xAxisGen, yAxisGen, lineFun;

           var d3 = $window.d3;
           var rawSvg=elem.find('svg');
           var svg = d3.select(rawSvg[0]);

           scope.$watchCollection(exp, function(newVal, oldVal){
               plot=newVal;
               redrawLineChart();
           });

           function setChartParameters(){

               xScale = d3.scale.linear()
                   .domain([plot[0].k, plot[plot.length-1].k])
                   .range([padding + 5, rawSvg.attr("width") - padding]);

               yScale = d3.scale.linear()
                   .domain([0, d3.max(plot, function (d) {
                       return d.v;
                   })])
                   .range([rawSvg.attr("height") - padding, 0]);

               xAxisGen = d3.svg.axis()
                   .scale(xScale)
                   .orient("bottom")
                   .ticks(plot.length - 1);

               yAxisGen = d3.svg.axis()
                   .scale(yScale)
                   .orient("left")
                   .ticks(5);

               lineFun = d3.svg.line()
                   .x(function (d) {
                       return xScale(d.k);
                   })
                   .y(function (d) {
                       return yScale(d.v);
                   })
                   .interpolate("basis");
           }

         function drawLineChart() {

               setChartParameters();

               svg.append("svg:g")
                   .attr("class", "x axis")
                   .attr("transform", "translate(0,180)")
                   .call(xAxisGen);

               svg.append("svg:g")
                   .attr("class", "y axis")
                   .attr("transform", "translate(20,0)")
                   .call(yAxisGen);

               svg.append("svg:path")
                   .attr({
                       d: lineFun(plot),
                       "stroke": "blue",
                       "stroke-width": 2,
                       "fill": "none",
                       "class": pathClass
                   });
           }

           function redrawLineChart() {

               setChartParameters();

               svg.selectAll("g.y.axis").call(yAxisGen);

               svg.selectAll("g.x.axis").call(xAxisGen);

               svg.selectAll("."+pathClass)
                   .attr({
                       d: lineFun(plot)
                   });
                     // drawLineChart();

           }

function data(){
  document.querySelector(".bar-code").addEventListener("click",function(){

    // drawLineChart();
    drawLineChart();

// setChartParameters();
     // drawLineChart();
     // redrawLineChart()
     document.querySelector(".backscreen").classList.add("none");



     this.classList.add("none");
  })
}
data();
           // drawLineChart();
       }
   };
});
