
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(getLineData);
google.charts.setOnLoadCallback(getColumnData);

// Draw Line Chart
function drawChartLine(freshData) {
  freshData.unshift(["Year", "Billion BTUs"])
  var data = google.visualization.arrayToDataTable(freshData)

  var options = {
    title: 'Total Consumption',
    colors:['#00784B'],
    height: 600,
    curveType: 'none',
    tooltip: {trigger: 'selection'},
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_line'));
  chart.draw(data, options);
  }

function getLineData(){
  // Create a new request object
  let request = new XMLHttpRequest()
  // TODO: URL to contact goes here
  let requestUrl = "https://api.eia.gov/series/?api_key=19f161a829f50e795db12f9a3c37b270&series_id=SEDS.TETCB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function(){
    let theActualData = JSON.parse(request.response).series[0].data
    drawChartLine(theActualData)
  }
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
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

function getColumnData(){
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



