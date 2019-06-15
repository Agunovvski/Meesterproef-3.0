var controller = new ScrollMagic.Controller();

// define movement of panels

var wipeAnimation2 = new TimelineMax()
    .set('.story-img-1, .story-bg-1', { transformOrigin: 'right center'})
    .staggerFromTo(".story-img-1, .story-bg-1", 1, {opacity: 0, x: "75%" }, {opacity: 1, x: "0%", ease: Power1.easeOut }, .2);

var infinityMove = new TimelineMax()
    .fromTo("div.intro-container .panel h2", 1, { y: "-70%" } ,{ y: "50%", ease: Linear.easeNone})
    .fromTo("div.begin-container .panel h1", 1, { scale: 1 }, { scale: 1.5, ease: Linear.easeNone }, "-=1");

var fadeText = new TimelineMax()
    .to('div.intro-container .panel a.hightlight-text:first-of-type', 1, {opacity: 0})
    .to('div.intro-container .panel a.highlight-text:nth-of-type(2)', 1, {color: 'orange'}, '-=1');

var startStoryScroll = new TimelineMax()
    .fromTo(".start-story h2", 1, { scale: 1 }, { scale: 1.5, ease: Linear.easeNone });

var revealComics = new TimelineMax()
    .staggerFrom(".comic-panel", 1, { opacity: 0 , y: "10%", ease: Power3.easeOut }, .2);

var imagesApart = new TimelineMax()
    .fromTo(".movie1", 1, { opacity: 0, x: 0}, {opacity: 1, x: "-10%", ease: Linear.easeNone })
    .fromTo(".comic1", 1, { opacity: 0, x: 0 }, {opacity: 1, x: "10%", ease: Linear.easeNone }, '-=1')
    .fromTo(".movie1, .comic1", 1, { y: '0%' }, { y: "30%", ease: Linear.easeNone });

var staggerStory1Text = new TimelineMax()
    .staggerFrom(".story1-content .story-slide:nth-of-type(2) p", 1, { opacity: 0, y: "10%", ease: Power1.easeOut }, .5)
    .from('div.comic1-1', 1, { opacity: 0, y: "10%", ease: Power1.easeOut}, "-=1");


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

var scrollStartStory = new ScrollMagic.Scene({
    triggerElement: ".start-story h2",
    triggerHook: 'onCenter',
    duration: "100%"
})
    .setTween(startStoryScroll)
    .addIndicators({
        name: 'check startStoryScroll ',
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


var startStory1 = new ScrollMagic.Scene({
    triggerElement: ".story1-container",
    // triggerHook: "onLeave",
    duration: "0"
})
    // .setPin("#pinContainer-2")
    .setTween(wipeAnimation2)
    .addIndicators({
        name: 'check scroll 2',
        colorStart: 'green',
        colorEnd: 'red'
    })
    .addTo(controller);


var story1Images = new ScrollMagic.Scene({
    triggerElement: ".story1-content p",
    triggerHook: 'onCenter',
    duration: "100%"
})
.setTween(imagesApart)
.addIndicators({
    name: 'check tearApart ',
    colorStart: 'yellow',
    colorEnd: 'red'
})
.addTo(controller);

var story1Text = new ScrollMagic.Scene({
    triggerElement: ".story1-content .story-slide:nth-of-type(2)",
    triggerHook: 'onCenter',
    duration: "50%"
})
    .setTween(staggerStory1Text)
    .addIndicators({
        name: 'check staggeStory1Text ',
        colorStart: 'orange',
        colorEnd: 'red'
    })
    .addTo(controller);
  




var comicPanel1 = document.querySelector('div.overview-container .panel .comic-panel:first-of-type');

function goToStory1 () {
    TweenLite.to(window, .5, { scrollTo: '.story1-container'});
}

comicPanel1.addEventListener('click', goToStory1);