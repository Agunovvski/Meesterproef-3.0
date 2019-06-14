var controller = new ScrollMagic.Controller();
var controller2 = new ScrollMagic.Controller({container: '.story-slide', vertical: false});

// define movement of panels

var wipeAnimation2 = new TimelineMax()
    .fromTo("section.panel.story-slide", 1, { x: "100%" }, { x: "0%", ease: Power1.easeOut });  // in from left

var infinityMove = new TimelineMax()
    .fromTo("div.intro-container .panel h2", 1, { y: "-70%" } ,{ y: "50%", ease: Linear.easeNone})
    .fromTo("div.begin-container .panel h1", 1, { scale: 1 }, { scale: 1.5, ease: Linear.easeNone }, "-=1");

var fadeText = new TimelineMax()
    .to('div.intro-container .panel a.hightlight-text:first-of-type', 1, {opacity: 0})
    .to('div.intro-container .panel a.highlight-text:nth-of-type(2)', 1, {color: 'orange'}, '-=1');

var revealComics = new TimelineMax()
    .staggerFrom(".comic-panel", 1, { opacity: 0 , y: "10%", ease: Power1.easeOut }, .5);



// scenes

var infinityScroll = new ScrollMagic.Scene({
    triggerElement: "div.intro-container .panel",
    triggerHook: 'onCenter',
    duration: "100%"
})
.setTween(infinityMove)
.addIndicators({
    name: 'check infinity ',
    colorStart: 'yellow',
    colorEnd: 'red'
})
.addTo(controller);

var byeText = new ScrollMagic.Scene({
    triggerElement: "div.intro-container .panel p",
    // offset: 100,
    duration: "50%"
})
.setTween(fadeText)
.addIndicators({
    name: 'check byeText ',
    colorStart: 'pink',
    colorEnd: 'red'
})
.addTo(controller);


var staggerComicPanels = new ScrollMagic.Scene({
    triggerElement: "div.overview-container .panel",
    triggerHook: 'onCenter',
    duration: "0"
})
    .setTween(revealComics)
    .addIndicators({
        name: 'check revealComics ',
        colorStart: 'orange',
        colorEnd: 'red'
    })
    .addTo(controller);


var secondContainer = new ScrollMagic.Scene({
    triggerElement: "#pinContainer-2",
    triggerHook: "onLeave",
    duration: "0%"
})
    .setPin("#pinContainer-2")
    .setTween(wipeAnimation2)
    .addIndicators({
        name: 'check scroll 2',
        colorStart: 'green',
        colorEnd: 'red'
    })
    .addTo(controller);


