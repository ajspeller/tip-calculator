var divContainer = document.querySelector("#container")

divContainer.addEventListener("input", function(){
  var bill = Number(document.querySelector("#billTotal").value);
  // console.log(`Bill: ${bill}`);
  var tipPercent = Number(document.querySelector("#tipInput").value);
  // console.log(`Tip: ${tipPercent}`);
  var split = Number(document.querySelector("#splitInput").value);
  // console.log(`Split: ${split}`);

  var tipValue = bill * (tipPercent / 100);
  var newBillEach = (bill + tipValue) / split;
  var tipEach = tipValue / split;

  document.querySelector("#tipOutput").innerHTML = `${tipPercent}%`;
  document.querySelector("#splitOutput").innerHTML = split;

  document.querySelector("#newBill").innerHTML = `$${newBillEach.toFixed(2)}`;
  document.querySelector("#tipAmount").innerHTML = `$${tipEach.toFixed(2)}`;
});
