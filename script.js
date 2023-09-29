function convertToCelsius() {
    const celsius = parseFloat(document.getElementById("celsiusInput").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
}

function convertToFahrenheit() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result").textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
}