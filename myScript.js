var lastSel = 15;
var tipValue;

function tipClick(id){

    for(i=1; i<6; i++){

        str = "tip"+i;

        if(id == str){

            document.getElementById(str).style.backgroundColor = "#26c2ad";
            document.getElementById(str).style.color = "#00484a";

            str = document.getElementById(str).innerHTML;
            lastSel = parseInt(str.substring(0, str.length - 1));
            document.getElementById("tip").value = null;

            continue;

        }

        document.getElementById(str).style.backgroundColor = "#00474b";
        document.getElementById(str).style.color = "#fff";

    }

}
function inputCheck(){

    billInput = parseFloat(document.getElementById("bill").value);
    tipInput = parseFloat(document.getElementById("tip").value);
    peopleInput = parseFloat(document.getElementById("people").value);

    peopleElement = document.getElementById("people");

    if(peopleElement.value == 0 && !isNaN(peopleInput)){
        peopleElement.classList.add('zero');
        document.getElementById("zeroWar").innerHTML = "Can't be zero"
    }
    else{
        peopleElement.classList.remove('zero');
        document.getElementById("zeroWar").innerHTML = " "
    }

    if(!isNaN(tipInput))
    {

        tipValue = tipInput;
        color();

    }
    else{

        tipValue = lastSel;

    }
    if(!(isNaN(billInput) || isNaN(peopleInput) || peopleInput == 0 || billInput == 0)){

        tipPerson = billInput/100 * (tipValue) / peopleInput;
        totalPerson = billInput/100 * (100 + tipValue) / peopleInput;

        tipPerson = tipPerson.toFixed(2);
        totalPerson = totalPerson.toFixed(2);

        document.getElementById("scr1").innerHTML = "$"+tipPerson;
        document.getElementById("scr2").innerHTML = "$"+totalPerson;

    }
    else{

        document.getElementById("scr1").innerHTML = "$0.00";
        document.getElementById("scr2").innerHTML = "$0.00";

    }

    setInterval(inputCheck, 500);
}
function reset(){

    document.getElementById("bill").value = null;
    document.getElementById("tip").value = null;
    document.getElementById("people").value = null;

    lastSel = 15;

    color();

}
function color(){

    for(i=1; i<6; i++){

        str = "tip"+i;
        document.getElementById(str).style.backgroundColor = "#00474b";
        document.getElementById(str).style.color = "#fff";

    }

}