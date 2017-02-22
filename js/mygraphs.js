var dataset = [
         { label: 'C++', count: 10 },
         { label: 'Swift', count: 20 },
         { label: 'Java', count: 30 },
         { label: 'JavaScript', count: 40 }
       ];
     var width = 360;
     var height = 360;
     var radius = Math.min(width, height) / 2;
     var donutWidth = 75;

     var color = d3.scaleOrdinal(d3.schemeCategory20c);

     var svg = d3.select('#chart')
       .append('svg')
       .attr('width', width)
       .attr('height', height)
       .append('g')
       .attr('transform', 'translate(' + (width / 2) +
         ',' + (height / 2) + ')');

     var arc = d3.arc()
       .innerRadius(radius - donutWidth)
       .outerRadius(radius);

     var pie = d3.pie()
       .value(function(d) { return d.count; })
       .sort(null);

     var path = svg.selectAll('path')
       .data(pie(dataset))
       .enter()
       .append('path')
       .attr('d', arc)
       .attr('fill', function(d, i) {
         return color(d.data.label);
       });
       path.append("text")
       	.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
       	.text(function(e) { return e.dataset.data.label;})
       	.style("fill", "#fff");
