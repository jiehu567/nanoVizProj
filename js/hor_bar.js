function draw_hor_bar(data){
              
            var new_data = new Array();
            
            for(var i=0; i<data.length; i++){
                if(data[i].attributes != "preferred_foot" && data[i].attributes != "num_preferred_foot"){
                    
                    new_data = new_data.concat(data[i]);
                }
            }
            
                
            
            var svg = dimple.newSvg("#chartContainer", 830, 750);

            var myChart = new dimple.chart(svg, new_data);
            myChart.setBounds(175, 60, 580, 630)
            var x = myChart.addMeasureAxis("x", "corr");
            var y = myChart.addCategoryAxis("y", "attributes");
            y.addOrderRule("corr");
            
            x.fontSize = 15;
            y.fontSize = 15;
            x.title = "Correlation Coeffecient with Overall Rating"
            y.title = "Attributes"
            
            var bar = myChart.addSeries("type", dimple.plot.bar,[x,y]);
            
            bar.barGap = 0.01;
            legend = myChart.addLegend(650, 200, 90, 400, "right");
            legend.fontSize = 15;
            
            
            myChart.draw();
            
            
            var bars = svg.selectAll(".dimple-bar");
            var ori_colors = [];
            bars.on("mouseover", function() {
                                            
                                            ori_colors.push(this.getAttribute("fill"));
                                            svg.selectAll(".dimple-bar")
                                                .attr("fill", "white")
                                                .attr("stroke","lightgrey");
                                            
                                            svg.selectAll("."+this.classList[2])
            	                           .attr("fill", ori_colors.pop());
                
                                            
                                            })
                .on("mouseout", function(d, i) {
                                            svg.selectAll(".dimple-personality")
                                                .attr("fill","#BC80BD")
                                                .attr("stroke","#9d6b9e");
                                            svg.selectAll(".dimple-movement")
                                                .attr("fill","#FFED6F")
                                                .attr("stroke","#d5c65c");
                                            svg.selectAll(".dimple-attack")
                                                .attr("fill","#FB8072")
                                                .attr("stroke","#d26b5f");
                                            svg.selectAll(".dimple-skill")
                                                .attr("fill","#FDB462")
                                                .attr("stroke","#d39651");
                                            svg.selectAll(".dimple-power")
                                                .attr("fill","#B3DE69")
                                                .attr("stroke","#95b957");
                                            svg.selectAll(".dimple-defending")
                                                .attr("fill","#8DD3C7")
                                                .attr("stroke","#75b0a6");
                                            svg.selectAll(".dimple-mentality")
                                                .attr("fill","#80B1D3")
                                                .attr("stroke","#6b94b0");
                                            
                                            svg.selectAll('.dimple-legend-text')
                                                .attr("fill","black")
                                                .attr("stroke","None");
                                           }
                   );
            
            /*svg.append("text")
                .attr("x", 455)             
                .attr("y", 35)
                .attr("text-anchor", "middle")
                .style("font-size", "30px")
                .style("font", "Serif") 
                .text("Correlation Coefficient with Overall Rating");
            svg.append("text")
                .attr("x", 455)             
                .attr("y", 50)
                .attr("text-anchor", "middle")
                .style("font-size", "12px")
                .style("font", "Serif") 
                .text("(Mouseover to select different types)");
            d3.selectAll('.dimple-bar')
                 .transition()
                 .duration(33500)*/
        }