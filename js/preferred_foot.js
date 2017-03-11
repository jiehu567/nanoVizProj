function draw_preferred_foot(data) {
      
      /*
        D3.js setup code
      */

          "use strict";
          var margin = 75,
              width = 1000 - margin,
              height = 600 - margin;

          d3.select("body")
            .append("h2")
            .text("Percentage of Left-foot Players");

          var svg = d3.select("body")
            .append("svg")
              .attr("width", width + margin)
              .attr("height", height + margin)
            .append('g')
                .attr('class','chart');

      /*
        Dimple.js Chart construction code
      */

          var myChart = new dimple.chart(svg, data);
          var x = myChart.addTimeAxis("x", "year"); 
          var y = myChart.addMeasureAxis("y", "Percentage of Left-foot");
          x.dateParseFormat = "%Y";
          x.tickFormat = "%Y";
          x.timeInterval = 1;
    
          x.fontSize = "20px";
          y.fontSize = "20px";
        
          x.title = "Year"
          y.title = "Percentage (%)"
          
          
          /* Display by percentage */
          y.tickFormat = '%';
          
          
          
          myChart.addSeries(null, dimple.plot.line);
          myChart.addSeries(null, dimple.plot.scatter);
          myChart.draw();
         debugger;
};