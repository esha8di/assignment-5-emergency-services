let coinfromfile = document.querySelector(".coins span");
let coins = parseInt(coinfromfile.innerText);

console.log("coins", coins);

// if(coins>20){
//     alert("You don't have enough coins to make the call");
//     return;
// }
let callButtons = document.querySelectorAll(".call_btn ");
console.log("button", callButtons);

callButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let card = this.closest(".card-1");

    let serviceName = card.querySelector("h1").innerText;
    console.log(serviceName);
    let serviceNumber = card.querySelectorAll("h1")[1].innerText;

    if (coins < 20) {
      alert("You don't have enough coins to make this call!");
      return;
    }

    coins -= 20;
    coinfromfile.innerText = coins;

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    let newHistory = document.createElement("div");
    newHistory.classList.add(
      "historydown",
      "flex",
      "justify-between",
      "items-center",
      "bg-green-100",
      "m-1",
      "rounded",
      "p-1"
    );

    newHistory.innerHTML = `<div class="hleft">
            <h1 class="font-bold">${serviceName}</h1>
            <p class="text-gray-400">${serviceNumber}</p>
        </div>
        <div class="hright">
            <p>${new Date().toLocaleTimeString()}</p>
        </div>`;
    const addhistory = document.getElementById("hist");

    addhistory.appendChild(newHistory);
  });
});

let clearbutton=document.getElementById('clear_btn');
clearbutton.addEventListener("click", function (){

    let clearhistory = document.getElementById("hist");
    clearhistory.innerHTML=""


})