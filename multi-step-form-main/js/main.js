var itemBeforeSelected = 0;
const sections = document.querySelectorAll(".side__section");
const options = document.querySelectorAll(".menu-container__steps__option");
const numberOption = document.querySelectorAll(".menu-container__steps__number");
sections.forEach((section, index)=>{
    if(index!=itemBeforeSelected){
        section.classList.add("hide");
    }else{
        numberOption[index].classList.add("show-selection");
    }
});

options.forEach((option,index)=>{

        option.addEventListener("click", function(){
            sections[itemBeforeSelected].classList.add("hide");
            sections[index].classList.remove("hide");
            numberOption[itemBeforeSelected].classList.remove("show-selection");
            numberOption[index].classList.add("show-selection");
            itemBeforeSelected = index;
        });
    });

