let totalBalance= document.querySelector("#tb");
let totalIncome= document.querySelector("#ti");
let totalExpanse= document.querySelector("#te");
let transactionHistory= document.querySelector("#item");
let formText= document.querySelector("#form-text");
let formNumber= document.querySelector("#form-number");
let btn= document.querySelector("#submit");

let transactions =[]
function totalUpdate(){
     const totalnumber = transactions.map(transaction.Number);
     
}
btn.addEventListener("click", function(dets){
     dets.preventDefault();
     if ( formText.value.trim() === "" || +(formNumber.value).trim() === ""){
          alert("add some data")
     }

     const transaction = {
          id:Date.now(),
          text:formText.value,
          Number:+(formNumber.value),
     }

transactions.push(transaction);

totalIncome=
formText.value = "";   // Text field saaf
formNumber.value = ""; // Number field saaf
console.log(transactions)

})




