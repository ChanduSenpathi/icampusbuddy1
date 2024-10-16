const aside = document.getElementById('asideId');
const main = document.getElementById('mainId');
const hamburger = document.getElementById('hamburgerId');

let isTrue = false;

const toggleAside = () => {
    if(isTrue) {
        aside.classList.add('hide_aside');
        main.classList.add('hide_main');
        aside.classList.remove('show_aside');
        main.classList.remove('show_main');
        isTrue = false;
    }else {
        aside.classList.add('show_aside');
        main.classList.add('show_main');
        aside.classList.remove('hide_aside');
        main.classList.remove('hide_main');
        isTrue = true;
    }
}

hamburger.addEventListener('click', toggleAside)

toggleAside();

window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");

    var windowHeight = window.innerHeight;
    var revealPoint = 80;
    
    reveals.forEach((reveal) => {
        var revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add("active_container");
        }
    });
});