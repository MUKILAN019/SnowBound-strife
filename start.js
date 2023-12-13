var input = document.getElementById("input");
var button = document.getElementById("btn");
let getE = []; //array
button.addEventListener("click", function () {
  let store = input.value; //storing input box value in variable store
  getE.push(store); //pushing data
  localStorage.setItem("username", getE); // storing to localstorage to reuse it
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 500); //500 ms to go to index.html
});
