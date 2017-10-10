for (var number = 1; number <= 100; number++) {
    var result = "";
  if (number % 3 == 0)
    result += "Fizz"; 
  else if (number % 5 == 0)
    result += "Buzz"; 
    console.log(result || number); 
}