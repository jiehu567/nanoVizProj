function draw_line_chart(data) {
      
      "use strict";
    
    d3.select('#content')
    .append('h2')
    .attr('id', 'title')
    .text('Correlation Change of Soccer Player Attributes, 2007-2016');
    
    // set svg
    var width = 960,
      height = 840;
    var svg = dimple.newSvg('#content', width, height);
    var myChart = new dimple.chart(svg, data);
    
    
      myChart.setBounds(60, 90, 705, 485);
      
      var x = myChart.addTimeAxis("x", "year");
       x.dateParseFormat = "%Y";
       x.tickFormat = "%Y";
          x.timeInterval = 1;
      
    
      var minY = 0,
      maxY = 1;
      var y = myChart.addMeasureAxis("y", "corr");
      y.overrideMax = maxY;
      y.overrideMin = minY;
      y.tickFormat = '.2f';
    
    
    var s = myChart.addSeries('attributes', dimple.plot.scatter);
  var p = myChart.addSeries('attributes', dimple.plot.line);
  var legend = myChart.addLegend(width*0.005, 660, width*0.75, 660, 'right');
      myChart.draw();
    
    // handle mouse events on gridlines
  y.gridlineShapes.selectAll('line')
    .style('opacity', 0.25)
    .on('mouseover', function(e) {
      d3.select(this)
        .style('opacity', 1);
    }).on('mouseleave', function(e) {
      d3.select(this)
        .style('opacity', 0.25);
    });

  // handle mouse events on paths
  d3.selectAll('path')
    .style('opacity', 0.25)
    .on('mouseover', function(e) {
      var bold_line = d3.select(this)
                        .style('stroke-width', '8px')
                        .style('opacity', 1)
                        .attr('z-index', '1');
      var key_text = this.__data__['key'][0];
      /* Some Attributes have 2 "_"*/
      key_text = key_text.replace("_","-");
      key_text = key_text.replace("_","-");
      
      d3.selectAll(".dimple-"+key_text)[0][22].style["font-size"] = 22;
      
      
      
  }).on('mouseleave', function(e) {
      d3.select(this)
        .style('stroke-width', '2px')
        .style('opacity', 0.25)
        .attr('z-index', '0');
      
      var key_text = this.__data__['key'][0];
      key_text = key_text.replace("_","-");
      key_text = key_text.replace("_","-");
      d3.selectAll(".dimple-"+key_text)[0][22].style["font-size"] = 10;
  });
    
    
}