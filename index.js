let totalBalance= document.querySelector("#tb");
let totalIncome= document.querySelector("#ti");
let totalExpanse= document.querySelector("#te");
let transactionHistory= document.querySelector("#item");
let formText= document.querySelector("#form-text");
let formNumber= document.querySelector("#form-number");
let btn= document.querySelector("#submit");

let transactions =[]
function totalUpdate(){
     const onlyNumber = transactions.map(t => t.Number);
     const positiveNumber=onlyNumber.filter(num => num > 0)
     const negitiveNumber=onlyNumber.filter(num => num < 0) 
     const addNumber = positiveNumber.reduce( (tadd,add) => tadd +add, 0 )  
     // const ftotal =  positiveNumber.toFixed(2);
     const exNumber = negitiveNumber.reduce( (taddd,addd) => taddd - addd, 0 )  ;
     const lastNumber = addNumber-exNumber;
totalIncome.textContent = `$${addNumber}`;
totalExpanse.textContent= `$${exNumber}`;
totalBalance.textContent= `$${addNumber}`;
totalBalance.textContent= `$${lastNumber}`;
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
formText.value = "";   // Text field saaf
formNumber.value = ""; // Number field saaf
console.log(transactions)
totalUpdate()

})




