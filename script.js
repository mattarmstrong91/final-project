var form = document.getElementById("bacForm");

form.onsubmit = function(e){
    e.preventDefault();
    calculateBAC();
}

function calculateBAC(){
    var genderConstant;
    if(document.getElementById("male").checked){
        genderConstant = 0.73;
    }
    else{
        genderConstant = 0.66;
    }

    var weight = 0;
    if(document.getElementById("weight").value){
        weight = parseFloat(document.getElementById("weight").value);
    }

    var beer = 0;
    if(document.getElementById("beer").value){
        beer = parseInt(document.getElementById("beer").value);
    }

    var wine = 0;
    if(document.getElementById("wine").value){
        wine = parseInt(document.getElementById("wine").value);
    }

    var liq = 0;
    if(document.getElementById("liq").value){
        liq = parseInt(document.getElementById("liq").value);
    }

    var hours = 0;
    if(document.getElementById("hours").value){
        hours = parseInt(document.getElementById("hours").value);
    }

    console.log(hours);

    var bac = ((beer*12*0.05+wine*5*0.12+liq*1.5*0.4) * 5.14) / (weight * genderConstant) - 0.015 * hours;
    if(bac < 0 || Number.isNaN(bac) || bac == Infinity){
        bac = 0;
    }
    document.querySelector(".bacVal").innerText = bac.toFixed(3) + " %";
    document.querySelector(".resultInfo").style.display = "block";
    if(bac < 0.075){
        document.querySelector(".otherInfo").innerText = "Your BAC is below Ballmer Peak";
    }
    else{
        document.querySelector(".otherInfo").innerText = "Your BAC is above Ballmer Peak";
    }
}