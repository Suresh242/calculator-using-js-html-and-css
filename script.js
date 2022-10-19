const buttons = document.querySelectorAll(".btn");
const displayElm = document.querySelector(".display");
const buttonArrays = Array.from(buttons);
let strToDisplay='';
const operators=["+","-","%","/","*"];
let lastOperator="";
buttonArrays.map((btn)=>{
 btn.addEventListener('click',()=>{
     const val= btn.innerText;
     if(val==="AC"){
        strToDisplay="";
        display();
        return;
     }
     if(val==="C"){
        strToDisplay= strToDisplay.slice(0,-1);
        return display(strToDisplay);
     }
     if(val==="="){
        const lastChar = strToDisplay[strToDisplay.length-1];
        if(operators.includes(lastChar)){
            strToDisplay= strToDisplay.slice(0,-1);
        }
        return total(); 
     }
     if(operators.includes(val)){
        if(!strToDisplay){
            return;
        }
        const lastChar = strToDisplay[strToDisplay.length-1];
        
     
     if(operators.includes(lastChar)){
        strToDisplay= strToDisplay.slice(0-1);
     }
     lastOperator=val;
    }
     if(val==="."){
        if(lastOperator){
            const operatorIndex = strToDisplay.lastIndexOf(lastOperator);
            const lastNumber = strToDisplay.slice(operatorIndex+1);
            if(lastNumber.includes(".")){
                return;
            }
            console.log(operatorIndex);
        }
        if(!lastOperator && strToDisplay.includes(".")){
            return;
        }
        
     }
     strToDisplay+=val;
     display(strToDisplay);

 })
});
const display =(str)=>{
    displayElm.innerText= str||'0.00';
    
}
const total =()=>{
    const extra = randomNumber();
    const ttl= eval(strToDisplay)+extra;
    display(ttl);
    strToDisplay =ttl.toString();
}
const randomNumber=()=>{
    const num = Math.round(Math.random()*10);
    return num<5 ? num:0;
}
