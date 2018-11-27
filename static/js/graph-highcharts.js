Highcharts.setOptions({
    lang: {
        thousandsSep: " ",
        decimalPoint: ','
    }
});

Highcharts.chart('container', {
    chart:{
      animation: {
            duration: 0
        },
		renderTo:"graphe-fallref",
		backgroundColor: "rgba(255,255,255,0)",
		borderRadius: 0,
		alignTicks:false,
		type: "areaspline",
		spacingBottom: 15
	},
	colors:["#393c51","#208389","#ff3232","#F19300","#28beaa","#285a82","#821400","#191919"],
	credits:{
		enabled:false},
	title: {
		text: ""
	},
	subtitle: {
		text: ""
	},
	plotOptions: {
		series: {
      animation: false,
      fillOpacity: 0.4,
			dataLabels: {
				inside: false,
				allowOverlap: true,
				format: "{y} ",
				style: {
					textShadow: 'none',
					color: '#333'
        },
			},
			connectNulls:true,
			marker:{
				symbol:"circle",
				fillColor:"#FFF",
				lineWidth: 2,
				radius:3,
				lineColor:null
			},
			states:{
				hover:{
					lineWidthPlus : 0
				}
			}
		}
	},
	yAxis:[{
		id:"0",
		allowDecimals:false,
		type:"linear",
		title: {
			text:""
		},
		labels: {
			useHTML: false,
			format: "{value} %",
			zIndex: -1
		},
		min: null,
		max: null,
		startOnTick: true,
		endOnTick:true,
		reversed:false,
	},{
		id:"1",
		allowDecimals:false,
		type:"linear",
		title: {
			text:""
		},
		labels: {
			useHTML: false,
			format: "{value} ",
			zIndex: -1
		},
		min: null,
		max: null,
		startOnTick: true,
		endOnTick:true,
		reversed:false,
		opposite:true
	}],
	xAxis: {
		type: "linear",
		 categories:["1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"],
		title: {
			text: ""
		},
		labels: {
			useHTML: false,
			step: 3,
			format: "{value}"
		},
	},
	legend:{
  	reversed:true,
		enabled:0,
		layout:"horizontal", 
		verticalAlign:"bottom", 
		align:"center",
		y:-10
	},

	series:[
  {
    "name": "Pourcentage de chansons comportant au moins une référence à la police",
    "color": "#393c51",
	"data": [30.645, 26.230, 30.000, 29.114, 40.541, 36.842, 20.430, 25.683, 34.021, 35.227, 35.341, 31.387, 32.197, 30.075, 31.579, 33.103, 28.509, 30.814, 22.727, 26.077, 23.050, 21.080],
    "type": "",
    "lineWidth": 2,
    "yAxis": 0,
    "stack": "null",
    "visible": true,
    "dataLabels": {
      "enabled": 0
    }
  },
	{
    "name": "Nombre de chansons",
    "color": "#208389",
    "data": [62, 61, 120, 79, 74, 57, 93, 183, 194, 176, 249, 274, 264, 266, 285, 580, 456, 516, 880, 905, 1410, 1167], 
    "visible": false,
	}, 
],
	tooltip: {
		useHTML: true,
		shared: 1,
		valueDecimals: 0,
		valuePrefix: "",
		valueSuffix: "",
		backgroundColor: '#FFF',
		borderColor: '#ccd0d3',
		borderRadius: 8,
		borderWidth: 0,
		dateTimeLabelFormats: {
			hour: "",
		},
		shadow: false,
		style: {"padding":"15px", "font-family":"Helvetica,Arial!important", "color":"#16212c"},
		hideDelay: 200,
		borderWidth: 1,
		borderColor: "#AAA",
		formatter: function(tooltip) {
			var index = this.points[0].point.index
			var header = `<span style="font-size: 11px;font-weight:bold;font-family:Helvetica,Arial;">`+ this.x + `</span><br/>`
			var point = '<span style="color:{point.color};font-family:Helvetica,Arial!important">\u25CF</span> <b>Pourcentage de chansons faisant au moins une référence à la police : ' + String(this.y) + ' % </b><br>(sur les ' + String(this.points[0].series.chart.series[1].data[index].y) + ' chansons faisant partie de notre base cette année-là)<br/>'
			return header + point
		},
	}
});

	function findLength(str) {
		if (str.length > 100) {
			el = document.getElementsByClassName('highcharts-tooltip')[1].firstChild;
			if (el.classList) {el.classList.add('tooltiplarge');}
			else {el.className += ' ' + 'tooltiplarge';}
		}	
	}
