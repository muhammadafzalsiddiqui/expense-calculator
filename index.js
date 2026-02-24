
let totalBalance= document.querySelector("#tb");
let totalIncome= document.querySelector("#ti");
let totalExpanse= document.querySelector("#te");
let transactionHistory= document.querySelector("#list");
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
function render(){
    transactionHistory.innerHTML = ""
    transactions.forEach((t)=>{
        const item = document.createElement("li")
        const type = t.Number < 0 ? 'minus' : 'plus';
        item.classList.add(type);
        const sign = t.Number < 0 ? '-' : '+'; // Faisla ke sign kya dikhana hai

item.innerHTML = `
    ${t.text} <span>${sign}${Math.abs(t.Number)}</span>
    <button class="delete-btn">x</button>
`;
transactionHistory.appendChild(item);

        
    })
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
// console.log(transactions)
totalUpdate()
render()


})




