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

// heart icons

let hearts=document.querySelectorAll(".heart_icon");
console.log('hearts',hearts)

let heart=document.getElementById('heart-count')

let heart_count=parseInt(heart.innerText)
console.log('heart_count',heart_count)

hearts.forEach(cnt=>{
  cnt.addEventListener("click",function(){
    heart_count++;
  heart.innerText=heart_count;
    
  })
  
})



// challenge parent

let copyButtons= document.querySelectorAll(".copy_btn");

copyButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
        
       
        let card= this.closest(".card-1");
        let number= card.querySelectorAll("h1")[1].innerText;


        navigator.clipboard.writeText(number)
        alert(`Copied : ${number}`)
        let copyCount = document.querySelector(".copy_count");
        let currentCount = parseInt(copyCount.innerText);
        console.log('cuurentcount',currentCount)
        currentCount++;

        copyCount.innerText = currentCount;
    });
});
