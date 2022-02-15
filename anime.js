const bt = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');
const blogbt = document.querySelector('.nav-button2');


bt.addEventListener('click', () => {
    
    if (t2.isActive()) {
        toggleTween(master2);
    } else {
        toggleTween(tl);
    } 
    
});

blogbt.addEventListener('click', () => {
    if (tl.isActive()) {
        toggleTween(master1);
    } else {
        toggleTween(t2);
    }
    
});

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}


const master2 = new TimelineLite({});
master2.fromTo(".blogg", 1, {
    opacity: 1,
    x: 0
}, {
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
}, "-=0.25")
    .fromTo(".nav-open", 1, {
        opacity: 0,
        x: 0
    }, {
        opacity: 1,
        x: 50,
        ease: Power2.easeOut
    }, "-=0.25");


const master1 = new TimelineLite({});
master1.fromTo(".nav-open", 1, {
    opacity: 1,
    x: 0
}, {
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
}, "-=0.25")
    .fromTo(".blogg", 1, {
        opacity: 0,
        x: 0
    }, {
        opacity: 1,
        x: 50,
        ease: Power2.easeOut
    }, "-=0.25");


const t2 = new TimelineLite({ paused: true, reversed: true });
t2.to('.cover', 1, {
    width: "70%",
    ease: Power2.easeOut
})
    .to('.navBar', 1, {
        height: "100%",
        ease: Power2.easeOut
    
    }, "-=1")
    .fromTo(".blogg", 1, {
        opacity: 0,
        x: 50
    }, {
        opacity: 1,
        x: 0,
        ease: Power2.easeOut,
        onComplete: function () {
            navOpen.style.pointerEvents = 'auto';
        }
    }, "-=0.25");


const tl = new TimelineLite({ paused: true, reversed: true });
tl.to('.cover', 1, {
    width: "70%",
    ease: Power2.easeOut
})
    .to('.navBar', 1, {
        height: "100%",
        ease: Power2.easeOut

    }, "-=1")
    .fromTo(".nav-open", 1, {
        opacity: 0,
        x: 50,
        ease: Power2.easeOut
    }, {
        opacity: 1,
        x: 0,
        ease: Power2.easeOut,
        onComplete: function () {
            navOpen.style.pointerEvents = "auto";
        }
    }, "-=0.25");


