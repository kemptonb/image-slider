
//load page
(() => {

    //module vars  
    const slideBar = document.getElementById("slideBarVar");

    //slide tracking var
    let i = 0;

    //generate slide array
    let slide = document.getElementsByClassName("slide");
    slide[0].classList.add("seen");

    //dom buttons
    document.getElementById("arrow1").addEventListener("click", () => {
        backArrow();
    });

    document.getElementById("arrow2").addEventListener("click", () => {
        forwardArrow();
    });

    //arrow button logic
    let forwardArrow = () => {
        if (i == 0) {
            slide[i].classList.remove("seen");
            i++;
            slide[i].classList.add("seen");
        } else if (i < slide.length - 1) {
            slide[i].classList.remove("seen");
            i++;
            slide[i].classList.add("seen");
        } else if (i == 2) {
            slide[i].classList.remove("seen");
            i = 0;
            slide[i].classList.add("seen");
        }
    }

    let backArrow = () => {
        if (i == 0) {
            slide[i].classList.remove("seen");
            i = slide.length - 1;
            slide[slide.length - 1].classList.add("seen");
        } else if (i <= slide.length - 1) {
            slide[i].classList.remove("seen");
            i--;
            slide[i].classList.add("seen");
        }
    }

    //timer function
    (function () {
        forwardArrow();
        setTimeout(arguments.callee, 3000);
    })();

})();

