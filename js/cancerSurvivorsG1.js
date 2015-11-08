	window.onload = function () {
		var chart = new CanvasJS.Chart("chartContainer", {

			title:{
              text:"Time Survived Since Diagnosis by Pancreatic Cancer Patients"				

			},
                        animationEnabled: true,
			axisX:{
				interval: 1,
				gridThickness: 0,
				labelFontSize: 10,
				labelFontStyle: "normal",
				labelFontWeight: "normal",
				labelFontFamily: "Lucida Sans Unicode"

			},
			axisY2:{
				interlacedColor: "rgba(1,77,101,.2)",
				gridColor: "rgba(1,77,101,.1)"

			},

			data: [
			{     
				type: "bar",
                name: "companies",
				axisYType: "secondary",
				color: "#014D65",				
				dataPoints: [
				
			
				{y: 320, label: "Up to 1 Year"  },
				{y: 205, label: "1-5 Years"   },
				{y: 59, label: "5-10 Years"},
				{y: 56, label: "10-20 Years" }
				]
			}
			
			]
		});

chart.render();
}


	

