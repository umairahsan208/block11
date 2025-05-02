function convertToCelsius(F) {
    return (F-32)*(5/9);
}

const Fahrenheit = prompt("Enter a temperature in Fahrenheit:")
    
function describeTemperature(C) {
  if (C < 0) {
    return "very cold";
  } else if (C < 20) {
    return "cold";
  } else if (C < 30){
    return "warm";
  } else if (C < 40) {
    return "hot";
  } else{
    return "very hot";
  }
}

  const celsius = convertToCelsius(Fahrenheit);
  const description = describeTemperature(celsius);
  alert(`That is ${celsius}°C, which is ${description}.`);