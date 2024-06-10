function convertTemperature() {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var inputUnit = document.getElementById('inputUnit').value;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number");
        return;
    }

    var celsius, fahrenheit, kelvin;

    switch (inputUnit) {
        case 'C':
            celsius = inputValue;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
            case 'F':
                    fahrenheit = inputValue;
                    celsius = (fahrenheit - 32) * 5/9;
                    kelvin = celsius + 273.15;
                    break;
                case 'K':
                    kelvin = inputValue;
                    celsius = kelvin - 273.15;
                    fahrenheit = (celsius * 9/5) + 32;
                    break;
                default:
                    alert("Unknown unit");
                    return;
            }

            document.getElementById('celsiusOutput').innerText = 'Celsius: ' + celsius.toFixed(2);
            document.getElementById('fahrenheitOutput').innerText = 'Fahrenheit: ' + fahrenheit.toFixed(2);
            document.getElementById('kelvinOutput').innerText = 'Kelvin: ' + kelvin.toFixed(2);
        }