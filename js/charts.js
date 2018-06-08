
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChartLine);
google.charts.setOnLoadCallback(getData);

// Draw Line Chart
function drawChartLine() {
  var data = new google.visualization.arrayToDataTable([
    ['Year','Billion Btu'],
    ['2016',804283],['2015',803865],['2014',771379],['2013',757189],['2012',752941],['2011',768009],['2010',788887],['2009',766848],['2008',771702],['2007',788461],['2006',778685],['2005',767622],['2004',745810],['2003',741696],['2002',718136],['2001',684966],['2000',668216],['1999',638966],['1998',639254],['1997',597240],['1996',586291],['1995',571483],['1994',544365],['1993',521176],['1992',501598],['1991',499299],['1990',489741],['1989',472473],['1988',444382],['1987',417862],['1986',398095],['1985',379307],['1984',353246],['1983',329216],['1982',315744],['1981',317921],['1980',309694],['1979',295551],['1978',289031],['1977',270767],['1976',252408],['1975',242096],['1974',235482],['1973',237104],['1972',209665],['1971',188564],['1970',171346],['1969',153032],['1968',135509],['1967',119314],['1966',108610],['1965',95878],['1964',87016],['1963',78258],['1962',71216],['1961',62705],['1960',57344]
  ]);

  var options = {
    title: 'Electricity Consumption',
    colors:['#00784B'],
    height: 600,
    curveType: 'none',
    tooltip: {trigger: 'selection'},
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_line'));
  chart.draw(data, options);
  }




// Draw Column Chart
function drawBasic(freshData) {
  freshData.unshift(["Year", "Billion BTUs"])
  var data = google.visualization.arrayToDataTable(freshData);

  var options = {
    title: 'Energy Production in Florida',
    chartArea: {width: '100%'},
    hAxis: {
      title: 'BTUs',
      minValue: 0
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_col'));
  chart.draw(data, options);
}

function getData(){
  // Create a new request object
  let request = new XMLHttpRequest()
  // TODO: URL to contact goes here
  let requestUrl = "https://api.eia.gov/series/?api_key=19f161a829f50e795db12f9a3c37b270&series_id=SEDS.REPRB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function(){
    let theActualData = JSON.parse(request.response).series[0].data
    drawBasic(theActualData)
  }
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}
// Make charts responsive
$(window).resize(function(){
   drawChartLine();
   drawBasic();
 });



