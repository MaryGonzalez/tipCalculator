    //Hide Receipt 
    document.getElementById("receipt").style.display = 'none';

    //Variables
    var amount, service, people, totalTip, totalTipPerson, grandTotal = 0;
    

    //Calculate tip and print results    
    document.getElementById("calculateButton").onclick = function(){
        getValues();
        calculate();
        printRecipt();
    }

    //Clear page
    document.getElementById("clearButton").onclick = function(){
        clear();
    }



/////////FUNCTIONS/////////

function getValues(){
    amount = document.getElementById("checkAmount").value;
    service = document.getElementById("serviceRating").value;
    people = document.getElementById("totalPeople").value;    
}


function calculate(){
    
    //Validate input
    if(amount === ""){
        if(amount.match(/^[a-zA-Z]+$/)){
            alert("Please enter an amount");
            return;
        }
    }
    
    if(service == 0){
        alert("Please select a service value");
    }else{  
        switch(service){
            case "option25":
                service=.25;
                break;
            case "option20":
                service=.20;
                break;
            case "option15":
                service=.15;
                break;
            case "option10":
                service=.10;
                break;
            case "option5":
                service=.05;
                break;
            default:
                window.alert("Error! Try Again.");
       }
    }
    
    //Check if number of people input is empty or <=1
    if(people === "" || people <=1)
        {
            people = 1;
        }
       
}



function clear(){

    amount = document.getElementById("checkAmount").value='';
    
    service = document.getElementById("serviceRating");
    service.selectedIndex = 0;
    
    people = document.getElementById("totalPeople").value='';
    
     //Hide Receipt 
    document.getElementById("receipt").style.display = 'none';
    

}

function printRecipt(){
    

    //Tip per each person
    totalTipPerson = ((amount*service)/people).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        
    //Show guest receipt
    document.getElementById("receipt").style.display = 'inline';
    
    //Show tip per person
    document.getElementById("totalTipPerson").value=totalTipPerson;
    

}
