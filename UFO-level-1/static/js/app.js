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

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    for (i = 1; i < filteredData.length +1; i++) {
        var table = document.getElementById("ufo-table");
        //table.innerHTML = " ";
        var row = table.insertRow(i);

        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);

        cell0.innerHTML = filteredData[i].datetime;
        cell1.innerHTML = filteredData[i].city;
        cell2.innerHTML = filteredData[i].state;
        cell3.innerHTML = filteredData[i].country;
        cell4.innerHTML = filteredData[i].shape;
        cell5.innerHTML = filteredData[i].durationMinutes;
        cell6.innerHTML = filteredData[i].comments;
    };
};
