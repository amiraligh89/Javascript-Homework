// from data.js
var tableData = data;

// YOUR CODE HERE!
// select the button
var button = d3.select("#filter-btn")

// set up the button and a function for every time the button is pushed
button.on("click", function(){

    // select the input element and get the raw html note
    var input = d3.select("#datetime")

    //select the input value from input element
    var inputDate = input.property("value")

    // console.log(input);
    console.log(inputDate);
    //console.log(tableData)

    //set up a function to return the date of the input
    // function UFODates(date){
    //    return date === inputDate;
    //}
    
    // filter the date to return the input date using the function above
    var filteredDate = tableData.filter(sighting => sighting.datetime === inputDate)
    console.log(filteredDate)

    // select the body of the table
    var tbody = d3.select("tbody")

    tbody.html("")

    // Reset the field to be blank
    d3.select("#datetime").node().value = "";

    // create an array with `date/time`, `city`, `state`, `country`, `shape`, and `comment`from the filtered date
    filteredDate.forEach(function(date){
        var row = tbody.append("tr")

        Object.entries(date).forEach(function([key, value]){
            console.log(key, value);
            var cell = row.append("td");           
            cell.text(value);
        });

    });

});
