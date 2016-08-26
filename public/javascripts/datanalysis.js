$(document).ready(function() {

    $.getJSON("/centers", function(data) {
      Morris.Bar({
        element: 'bar-example',
        data: [
          { y: 'Min', a: Math.max.apply(Math,data.map(function(o){return o.likes[0].count;}))},
          { y: rCenter.label, a: rCenter.value},
          { y: 'Max', a: Math.min.apply(Math,data.map(function(o){return o.likes[0].count;}))},
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A', 'Series B']
      });
      console.log(data);
    });
  });
