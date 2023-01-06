var itemBeforeSelected = 0;
var indexTextFieldSelected = 0;
var optionPlanSelected = false;
var indexPlanSelected = false;
var beforeSelection = 0 ;
const sections = document.querySelectorAll(".side__section");
const options = document.querySelectorAll(".menu-container__steps__option");
const numberOption = document.querySelectorAll(".menu-container__steps__number");
const buttonsNext = document.querySelectorAll(".side__buttones-container__next-step");
const buttonsGoBack = document.querySelectorAll(".side__buttones-container__go-back");
const inputsForm = document.getElementsByClassName("input-text-form");
const messagesError = document.getElementsByClassName("messageError");
const montlyOpction = document.querySelector(".Montly-opction");
const yearlyOption = document.querySelector(".Yearly-option");
const optionPlans = document.querySelectorAll(".side__plan");
const optionsPickAdds = document.querySelectorAll(".pickones-options");
const checkBocks = document.querySelectorAll(".input-pick"); 
sections.forEach((section, index) => {
    if (index != itemBeforeSelected) {
        section.classList.add("hide");
    } else {
        numberOption[index].classList.add("show-selection");
    }
});
buttonsNext[0].addEventListener("click", changeToPlans);
function changeToPlans() {
    var booleano = true;
    for (var index = 0; index < inputsForm.length; index++) {
        if (inputsForm[index].value == "") {
            booleano = false;
            inputsForm[index].classList.add("input-empty");
            messagesError[index].classList.add("show-messageError");
        } else {
            inputsForm[index].classList.remove("input-empty");
            messagesError[index].classList.remove("show-messageError");
        }
    }
    if (booleano) {
        changeOptionSide(0);
        changeSectionView(0);
    } else {
        console.log("necesita llenar campos");
    }
}
buttonsNext[1].addEventListener("click", changeToPickAddOns);
function changeToPickAddOns() {
    if (indexPlanSelected) {
        changeOptionSide(1);
        changeSectionView(1);
    } else {
        alert("Should to chose some plan");
    }
}
buttonsNext[2].addEventListener("click", changeToSummaryView);

function changeToSummaryView(){
    changeOptionSide(2);
    changeSectionView(2);
}
let actionsClick = [true,true,true];
optionPlans.forEach((plan, index) => {
    plan.addEventListener("click", function () {
        console.log(index+" "+actionsClick[index]);
        if (actionsClick[index]) {
            optionPlans[beforeSelection].classList.remove("side__plan-selected");
            beforeSelection=index;
            optionPlans[index].classList.add("side__plan-selected");
            actionsClick.forEach((boolean,indexClick)=>{
                if(indexClick!=index){
                    actionsClick[indexClick] = true;
                }else{
                    actionsClick[indexClick] = false;
                }
            });
            indexPlanSelected = true;
            console.log(actionsClick);
        }else{
            optionPlans[index].classList.remove("side__plan-selected");
            indexPlanSelected = false;
            actionsClick[index]=true;
        }
    });
});

function showBaubleMontly() {
    montlyOpction.style.backgroundColor = "white";
    hideBaubleYearly();
}

function showBaubleYearly() {
    yearlyOption.style.backgroundColor = "white";
    hideBaubleMontly();
}

function hideBaubleMontly() {
    montlyOpction.style.backgroundColor = "#0D4578"
}
function hideBaubleYearly() {
    yearlyOption.style.backgroundColor = "#0D4578"
}

function changeOptionSide(index) {
    numberOption[index].classList.remove("show-selection");
    numberOption[index + 1].classList.add("show-selection");
}
function changeSectionView(index) {
    sections[index].classList.add("hide");
    sections[index + 1].classList.remove("hide");
}
buttonsGoBack.forEach((goBack, index) => {
    goBack.addEventListener("click", function () {
        sections[index].classList.remove("hide");
        sections[index + 1].classList.add("hide");
        numberOption[index + 1].classList.remove("show-selection");
        numberOption[index].classList.add("show-selection");
    });
});



optionsPickAdds.forEach(checkPickAddOns);


function checkPickAddOns(option, index){
    var available = true;
    option.addEventListener("click",function(){
      checkBocks[index].checked = available;
      available = !available;
    });
}