var screen = document.querySelector(".input")
let output = document.querySelector(".output")
buttons = document.querySelectorAll("button")
let screenVal = "";

for (item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        // console.log("button text: ",buttonText)
        
        
        if (buttonText == "CE"){
            screenVal=""
            output.value=""
            screen.value=screenVal;
        } 
        else if(buttonText=="=") {
            output.value= eval(screenVal);
            screenVal=""
        }
        else if(buttonText=="C"){
            screen.value = screen.value.substr(0,screen.value.length - 1);
            screenVal=screen.value
        }
        else{
            screenVal+=buttonText
            screen.value=screenVal;
        }
       


    })

}