// from data.js
var tableData = data;

// YOUR CODE HERE!
var form = d3.select("#datetime");
var button = d3.select("#filter-btn");

button.on("click", runFilter);
form.on("submit",runFilter);

// Creating event handler
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime.form-control");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    //filter the data to match the input element
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    //select the table body to add rows
    var table = d3.select('tbody');
    table.html('');

    //adding row for each record of data
    filteredData.forEach((sighting) => {
        //console.log(sighting);
        var row = table.append("tr");
        Object.entries(sighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
})};
