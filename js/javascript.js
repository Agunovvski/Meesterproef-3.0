var controller = new ScrollMagic.Controller();
// var controller = new ScrollMagic.Controller({ container: '.first-container' });
// var controller2 = new ScrollMagic.Controller({ container: ".second-container"});

// define movement of panels
var wipeAnimation = new TimelineMax()
    .fromTo("section.panel.turqoise", 1, { x: "-100%" }, { x: "0%", ease: Linear.easeNone })  // in from left
    .fromTo("section.panel.red", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })  // in from right
    .fromTo("section.panel.yellow", 1, { y: "-100%" }, { y: "0%", ease: Linear.easeNone }); // in from top

var wipeAnimation2 = new TimelineMax()
    .fromTo("section.panel.pink", 1, { x: "-100%" }, { x: "0%", ease: Linear.easeNone })  // in from left



// create scene to pin and link animation
var firstContainer = new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "100%"
})
.setPin("#pinContainer")
.setTween(wipeAnimation)
.addIndicators({
    name: 'check scroll',
    colorStart: 'green',
    colorEnd: 'red'
}) 
.addTo(controller);



var secondContainer = new ScrollMagic.Scene({
    triggerElement: "#pinContainer-2",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin("#pinContainer-2")
    .setTween(wipeAnimation2)
    .addIndicators({
        name: 'check scroll 2',
        colorStart: 'green',
        colorEnd: 'red'
    })
    .addTo(controller);


