function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus;
        document.getElementById("result").innerHTML="";
        return false;
    }
        
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="<br>If you deposit <mark>"+ principal + "</mark>,<br> at an interest rate of <mark>" + rate+ ".</mark><br> You will receive an amount of interest <mark>" + interest +",</mark><br> in the year <mark>" + year ;
    
}

function updateRate() 
    {   
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
       
