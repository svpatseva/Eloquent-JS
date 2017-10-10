// Сначала сделала так
/*
var result = "#";
while (result.length <= 7) {
  console.log(result);
  result += "#";
}
*/


// Потом упростила
for (var result = "#"; result.length <= 7; result += "#") {
    console.log(result);
}

