function paceCalculator() {
    // Retrieve values of num1 and num2 by their IDs
    var num1 = parseFloat(document.getElementById('distance').value);
    var timeInput = document.getElementById('time').value;

    // Parse the time input (hh:mm:ss) and convert it to hours
    var timeParts = timeInput.split(':');
    var hours = parseInt(timeParts[0], 10);
    var minutes = parseInt(timeParts[1], 10);
    var seconds = parseInt(timeParts[2], 10);

    // Convert time to hours
    var totalHours = hours * 60 + minutes + (seconds / 60);

    // Make fetch request to Flask route '/add'
    fetch('/calcPace?distance=' + num1 + '&time=' + totalHours)
        .then(response => response.json())
        .then(data => {
            console.log('Result of calculator:', data.result);
            var systemResponseDiv = document.getElementById('system_response');
            systemResponseDiv.innerHTML = 'Result of calculator: ' + data.result + "min/km";
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
