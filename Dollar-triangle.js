function dollarTriangle(n) {
  let row = "";
  for (let col = 0; col < n; col++) {
    row += "$";
    console.log(row);
  }
}

dollarTriangle(2);
dollarTriangle(3);
dollarTriangle(4);
dollarTriangle(5);
