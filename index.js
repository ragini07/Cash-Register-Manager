const totalBill = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const submitbtn = document.querySelector("#check-btn");
const message = document.querySelector("#message");
const nextbtn = document.querySelector(".next-btn");
const nextelement = document.querySelector("#output-container");
const table = document.querySelector("#change-info");
const validate = document.querySelectorAll(".validate");


function nextItem(){
    if(totalBill.value == "" || totalBill.value<=0)
        validate[0].innerHTML = "Enter valid Bill Amount";
    else{
        validate[0].style.display = "none";
        nextelement.style.display = "block";
    }
    
}

function calculateReturnAmount(){
    // if(isNaN(cashGiven.value) || isNaN(totalBill.value)){
    //     message.innerHTML = "Please provide input in integer format";
    // }
    if(totalBill.value == "" || cashGiven.value == "" || totalBill.value<=0 || cashGiven.value<=0)
    {
    validate[1].innerHTML = "Enter valid Bill Amount and given Cash to Continue";
    }
    else{
        validate[1].style.display = "none";
    let returnAmount = cashGiven.value - totalBill.value;
   
    if(returnAmount<0)
    {
        message.innerHTML = "Cash is low.Please provide required amount";
        table.style.display = "none";
    }
    else{
        message.innerHTML ="Return Change";
        table.style.display = "table";
        let availableNotes = [2000,500,100,20,10,5,1];
        for(let i=0;i<availableNotes.length;i++){
            let denominationNote = Math.trunc(returnAmount/availableNotes[i]);
            noOfNotes[i].innerHTML = denominationNote;
            returnAmount = returnAmount%availableNotes[i];
        }
        

  
    }
}
}




nextbtn.addEventListener("click",nextItem);
submitbtn.addEventListener("click",calculateReturnAmount);









