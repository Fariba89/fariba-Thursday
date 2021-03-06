const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector(".logo");
const ham = document.querySelector(".ham");
const headline = document.querySelector(".headline");

const tr = new TimelineMax();
tr.fromTo(hero,
    1, {
        height: "0%"
    }, {
        height: "100%"
    }
)
.fromTo(hero, 1.2, {width:"100%"}, {width:"70%"})

.fromTo(slider,1.2, {x:"-100%"}, {x:"0%"}, "-=1.2")
.fromTo(logo, 0.5, {opacity:0, x:30}, {opacity:1, x:0});

