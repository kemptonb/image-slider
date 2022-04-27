const slideBar = document.getElementById("slideBarVar");
let position = [0, -48, 96];
let i = 1;
let placeholder = `\"translate(${position[i]}em, 0)\"`;
console.log(placeholder)

document.getElementById("arrow1").addEventListener("click", ()=> {
    
    //slideBar.style.transform = "translate(0, 0)";
        
    slideBar.style.transform = placeholder;
   
});

document.getElementById("arrow2").addEventListener("click", ()=> {
    slideBar.style.transform = "translate(-48em, 0)";


});