

// controllers

var controller = new ScrollMagic.Controller();

// define GS

var wipeAnimation1 = new TimelineMax()
    .set('.story-img-1, .story-bg-1', { transformOrigin: 'right center'})
    .staggerFromTo(".story-img-1, .story-bg-1", 1, {opacity: 0, x: "75%" }, {opacity: 1, x: "0%", ease: Power1.easeOut }, .2)
    .fromTo(".story1-container .story-slide p.which-section", 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeOut });

var wipeAnimation2 = new TimelineMax()
    .set('.story-img-2, .story-bg-2', { transformOrigin: 'right center' })
    .staggerFromTo(".story-img-2, .story-bg-2", 1, { opacity: 0, x: "75%" }, { opacity: 1, x: "0%", ease: Power1.easeOut }, .2)
    .fromTo(".story2-container .story-slide p.which-section", 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeOut });

var wipeAnimation3 = new TimelineMax()
    .set('.story-img-3, .story-bg-3', { transformOrigin: 'right center' })
    .staggerFromTo(".story-img-3, .story-bg-3", 1, { opacity: 0, x: "75%" }, { opacity: 1, x: "0%", ease: Power1.easeOut }, .2)
    .fromTo(".story3-container .story-slide p.which-section", 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeOut });

var wipeAnimation4 = new TimelineMax()
    .set('.story-img-4, .story-bg-4', { transformOrigin: 'right center' })
    .staggerFromTo(".story-img-4, .story-bg-4", 1, { opacity: 0, x: "75%" }, { opacity: 1, x: "0%", ease: Power1.easeOut }, .2)
    .fromTo(".story4-container .story-slide p.which-section", 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeOut });

var wipeAnimation5 = new TimelineMax()
    .set('.story-img-5, .story-bg-5', { transformOrigin: 'right center' })
    .staggerFromTo(".story-img-5, .story-bg-5", 1, { opacity: 0, x: "75%" }, { opacity: 1, x: "0%", ease: Power1.easeOut }, .2)
    .fromTo(".story5-container .story-slide p.which-section", 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeOut });

var wipeAnimation6 = new TimelineMax()
    .set('.story-img-6, .story-bg-6', { transformOrigin: 'right center' })
    .staggerFromTo(".story-img-6, .story-bg-6", 1, { opacity: 0, x: "75%" }, { opacity: 1, x: "0%", ease: Power1.easeOut }, .2)
    .fromTo(".story6-container .story-slide p.which-section", 1, { opacity: 0 }, { opacity: 1, ease: Power1.easeOut });



var infinityMove = new TimelineMax()
    .fromTo("div.intro-container .panel h2", 1, { y: "-70%" } ,{ y: "50%", ease: Linear.easeNone})
    .fromTo("div.begin-container .panel h1", 1, { scale: 1 }, { scale: 1.5, ease: Linear.easeNone }, "-=1");

var fadeText = new TimelineMax()
    .to('div.intro-container .panel a.hightlight-text:first-of-type', 1, {opacity: 0})
    .to('div.intro-container .panel a.highlight-text:nth-of-type(2)', 1, {color: 'orange'}, '-=1');

var revealComics = new TimelineMax()
    .staggerFrom(".comic-panel", 1, { opacity: 0 , y: "10%", ease: Power3.easeOut }, .2);

var imagesApart = new TimelineMax()
    .fromTo(".movie1", 1, { opacity: 0, x: 0}, {opacity: 1, x: "-10%", ease: Linear.easeNone })
    .fromTo(".comic1", 1, { opacity: 0, x: 0 }, {opacity: 1, x: "10%", ease: Linear.easeNone }, '-=1')
    .fromTo(".movie1, .comic1", 1, { y: '0%' }, { y: "30%", ease: Linear.easeNone });

var staggerStory1Text = new TimelineMax()
    .staggerFrom(".story1-content .story-slide:nth-of-type(2) p, div.comic1-1", 1, { opacity: 0, y: "10%", ease: Power1.easeOut }, .75);
    // .from('div.comic1-1', 1, { opacity: 0, y: "10%", ease: Power1.easeOut}, "-=1");

var whereIsThanos = new TimelineMax()
    .fromTo(".story2-content .story-slide:first-of-type p:first-of-type", 2, { opacity: 1, y: "0%" }, { opacity: 0, y: "40%", ease: Linear.easeNone })
    .fromTo(".story2-content .story-slide:first-of-type p:nth-of-type(2)", 1, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone }, '-=2');

var sideBySide = new TimelineMax()
    .fromTo("div.movie2", 1, {y: "-30%" }, {y: "40%", ease: Linear.easeNone })
    .fromTo("div.comic2", 1, { y: "0%" }, { y: "-40%", ease: Linear.easeNone }, '-=1');

var compareThorTl = new TimelineMax()
    .set("div.movie4-1", { y: "50%" })
    .set("div.movie4-2", { y: "-50%" })
    .fromTo("div.movie4-1", 1, { opacity: 1, x: "-25%" }, { opacity: .5, x: "50%", ease: Linear.easeNone })
    .fromTo("div.movie4-2", 1, { opacity: 0, x: "25%" }, { opacity: .8, x: "-50%", ease: Linear.easeNone }, '-=1');

var comicThorTl = new TimelineMax()
    .fromTo(".comic4", 1, { opacity: 0,x: 0 }, { opacity: 1,x: "60%", ease: Linear.easeNone })
    .fromTo(".movie4-3", 1, { opacity: 0,x: 0 }, { opacity: 1,x: "-50%", ease: Linear.easeNone }, '-=1');

var questionSnapTl = new TimelineMax()
    .fromTo(".story3-content .story-slide:first-of-type p:first-of-type", 1, { y: "0%" }, { y: "70%", ease: Linear.easeNone })
    .fromTo(".story3-content .story-slide:first-of-type p:nth-of-type(2)", 1, { opacity: 0, y: "0%" }, { opacity: 1, y: "-50%", ease: Linear.easeNone });

var thanosMartyrTl = new TimelineMax()
    .from("div.comic3", 1, { opacity: 0, x: "-50%", ease: Linear.easeNone });

var capMjolnirTl = new TimelineMax()
    .staggerFrom(".story5-content .story-slide:nth-of-type(2) div", 1, { opacity: 0, y: "20%", ease: Power3.easeOut }, 1);

// var capMjolnirMoveTl = new TimelineMax()
//     .fromTo(".story5-content .story-slide:nth-of-type(2) div:first-of-type", 1, { y: "-10%" }, { y: "40%", ease: Linear.easeNone })
//     .fromTo(".story5-content .story-slide:nth-of-type(2) div:nth-of-type(2)", 1, { y: "-20%" }, { y: "20%", ease: Linear.easeNone }, '-=1')
//     .fromTo(".story5-content .story-slide:nth-of-type(2) div:nth-of-type(3)", 1, { y: "0%" }, { y: "-20%", ease: Linear.easeNone }, '-=2');

var capComicsTl = new TimelineMax()
    .staggerFrom(".story5-content .story-slide:nth-of-type(3) div", 1, { opacity: 0, y: "20%", ease: Power3.easeOut }, 1);

// var capTextTl = new TimelineMax()
//     .fromTo(".story5-content .story-slide:nth-of-type(2) p:first-of-type", 1, {y: "-100%" }, { y: "-10%", ease: Linear.easeNone });


var charVsThanosTl = new TimelineMax()
    .fromTo("div.movie6-1", 1, { opacity: 1, x: "-10%" }, { opacity: .5, x: "25%", ease: Linear.easeNone })
    .fromTo("div.movie6-2", 1, { opacity: 0, x: "10%" }, { opacity: .8, x: "-25%", ease: Linear.easeNone }, '-=1');

var intenseFightTl = new TimelineMax()
    .fromTo(".story6-content .story-slide:nth-of-type(2) p:first-of-type", 2, { opacity: 1, y: "0%" }, { opacity: 0, y: "40%", ease: Linear.easeNone })
    .fromTo(".story6-content .story-slide:nth-of-type(2) p:nth-of-type(2)", 1, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone }, '-=2');

var capSideTl = new TimelineMax()
    .fromTo(".story6-content .story-slide:nth-of-type(3) p:nth-of-type(1)", 1, { y: "-10%" }, { y: "60%", ease: Linear.easeNone });

var finalBattleTl = new TimelineMax()
    .set("div.movie6-3", { scale: 1.2 })
    .set("div.movie6-6", { scale: 1.2 })
    .fromTo("div.movie6-3", 1, { opacity: 0, x: "0%" }, { opacity: 1, x: "20%", ease: Linear.easeNone })
    .fromTo("div.movie6-4", 1, { opacity: 0, x: "0%" }, { opacity: 1, x: "-20%", ease: Linear.easeNone })
    .fromTo("div.movie6-5", 1, { opacity: 0, x: "0%" }, { opacity: 1, x: "20%", ease: Linear.easeNone })
    .fromTo("div.movie6-6", 1, { opacity: 0, x: "0%" }, { opacity: 1, x: "-20%", ease: Linear.easeNone });

var thanosStruggleTl = new TimelineMax()
    .fromTo("div.movie6-7", 1, { opacity: 0, x: '40%' }, { opacity: 1, x: "20%", ease: Linear.easeNone })
    .fromTo("div.comic6-1", 1, { opacity: 0, x: '-40%' }, { opacity: 1, x: "-20%", ease: Linear.easeNone }, '-=1');

var beforeThanosSnapTl = new TimelineMax()
    .to(".story6-content .story-slide:nth-of-type(4) p:first-of-type", 1, { y: "200%", ease: Linear.easeNone });

var tonyNebulaTl = new TimelineMax()
    .from(".story6-content .story-slide:nth-of-type(5) p", 1, { y: "-100%", ease: Linear.easeNone });


var changeColorsTl = new TimelineMax()
    .to("body, .story-slide", 1, { backgroundColor: "white", ease: Power1.easeBoth })
    .to("h1, h2, p", 1, { color: "black", ease: Power1.easeBoth }, '-=.5')
    .to(".progress-container", 1, { backgroundColor: "white", ease: Power1.easeBoth }, '-=1.5')
    .to(".progress-bar", 1, { backgroundColor: "orange", ease: Power1.easeBoth }, '-=2.5');

var thanosDeadTl = new TimelineMax()
    .to(".end-thanos", 1, { opacity: 0, y: "50%", ease: Linear.easeNone });

var whyTextChangeTl = new TimelineMax()
    .to(".story7-content .story-slide:first-of-type p:first-of-type", 1, { opacity: 0, y: "20%", ease: Linear.easeNone })
    .to(".story7-content .story-slide:nth-of-type(2) p:first-of-type", 1, { opacity: 0, y: "20%", ease: Linear.easeNone })
    .to(".story7-content .story-slide:nth-of-type(3) p:first-of-type", 1, { opacity: 0, y: "20%", ease: Linear.easeNone })
    .to(".story7-content .story-slide:nth-of-type(4) p:first-of-type", 1, { opacity: 0, y: "20%", ease: Linear.easeNone });




// scenes

$('.start-story h2').each(function(){
    var startStoryScroll = new TimelineMax()
        .fromTo($(this), 1, { scale: 1 }, { scale: 2, ease: Linear.easeNone });

    var scrollStartStory = new ScrollMagic.Scene({
        triggerElement: this,
        duration: "100%"
    })
        .setTween(startStoryScroll)

        .addTo(controller);
});

// start of story slide animation

var startStory1 = new ScrollMagic.Scene({
    triggerElement: ".story1-container",
    duration: "0"
})
    .setTween(wipeAnimation1)
    // .addIndicators({
    //     name: 'check wipeAnimation1',
    //     colorStart: 'green',
    //     colorEnd: 'red'
    // })
    .addTo(controller);

var startStory2 = new ScrollMagic.Scene({
    triggerElement: ".story2-container",
    duration: "0"
})
    .setTween(wipeAnimation2)
    .addTo(controller);

var startStory3 = new ScrollMagic.Scene({
    triggerElement: ".story3-container",
    duration: "0"
})
    .setTween(wipeAnimation3)
    .addTo(controller);

var startStory4 = new ScrollMagic.Scene({
    triggerElement: ".story4-container",
    duration: "0"
})
    .setTween(wipeAnimation4)
    .addTo(controller);

var startStory5 = new ScrollMagic.Scene({
    triggerElement: ".story5-container",
    duration: "0"
})
    .setTween(wipeAnimation5)
    .addTo(controller);

var startStory6 = new ScrollMagic.Scene({
    triggerElement: ".story6-container",
    duration: "0"
})
    .setTween(wipeAnimation6)
    .addTo(controller);

// end story slide animation

var infinityScroll = new ScrollMagic.Scene({
    triggerElement: "div.intro-container .panel",
    triggerHook: 'onCenter',
    duration: "100%"
})
.setTween(infinityMove)
// .addIndicators({
//     name: 'check infinity ',
//     colorStart: 'yellow',
//     colorEnd: 'red'
// })
.addTo(controller);


var byeText = new ScrollMagic.Scene({
    triggerElement: "div.intro-container .panel p",
    // offset: 100,
    duration: "50%"
})
.setTween(fadeText)
// .addIndicators({
//     name: 'check byeText ',
//     colorStart: 'pink',
//     colorEnd: 'red'
// })
.addTo(controller);


var staggerComicPanels = new ScrollMagic.Scene({
    triggerElement: "div.overview-container .panel",
    triggerHook: 'onCenter',
    duration: "0"
})
    .setTween(revealComics)
    // .addIndicators({
    //     name: 'check revealComics ',
    //     colorStart: 'orange',
    //     colorEnd: 'red'
    // })
    .addTo(controller);



var story1Images = new ScrollMagic.Scene({
    triggerElement: ".story1-content p",
    triggerHook: 'onCenter',
    duration: "100%"
})
.setTween(imagesApart)
// .addIndicators({
//     name: 'check tearApart ',
//     colorStart: 'yellow',
//     colorEnd: 'red'
// })
.addTo(controller);

var story1Text = new ScrollMagic.Scene({
    triggerElement: ".story1-content .story-slide:nth-of-type(2)",
    triggerHook: 'onCenter',
    duration: "50%"
})
    .setTween(staggerStory1Text)
    // .addIndicators({
    //     name: 'check staggeStory1Text ',
    //     colorStart: 'orange',
    //     colorEnd: 'red'
    // })
    .addTo(controller);
  


var story2TextFade = new ScrollMagic.Scene({
    triggerElement: ".story2-content",
    offset: 225,
    duration: "20%"
})
    .setTween(whereIsThanos)
    // .addIndicators({
    //     name: 'check whereIsThanos',
    //     colorStart: 'pink',
    //     colorEnd: 'red'
    // })
    .addTo(controller);

var story2SideBySide = new ScrollMagic.Scene({
    triggerElement: ".story2-content .story-slide:nth-of-type(2) p:first-of-type",
    duration: "30%"
})
    .setTween(sideBySide)
    // .addIndicators({
    //     name: 'check sideBySide',
    //     colorStart: 'yellow',
    //     colorEnd: 'red'
    // })
    .addTo(controller);  

var compareThor = new ScrollMagic.Scene({
    triggerElement: ".story4-content .story-slide:nth-of-type(1)",
    triggerHook: 'onCenter',
    offset: 150,
    duration: "100%"
})
    .setTween(compareThorTl)
    // .addIndicators({
    //     name: 'check compareThorTl',
    //     colorStart: 'yellow',
    //     colorEnd: 'red'
    // })
    .addTo(controller); 

var comicThor = new ScrollMagic.Scene({
    triggerElement: ".story4-content .story-slide:nth-of-type(2)",
    triggerHook: 'onEnter',
    duration: "50%"
})
    .setTween(comicThorTl)
    // .addIndicators({
    //     name: 'check comicThorTl ',
    //     colorStart: 'orange',
    //     colorEnd: 'red'
    // })
    .addTo(controller);

var questionSnap = new ScrollMagic.Scene({
    triggerElement: ".story3-content .story-slide:first-of-type",
    triggerHook: 'onCenter',
    offset: 100,
    duration: "75%"
})
    .setTween(questionSnapTl)
    // .addIndicators({
    //     name: 'check questionSnapTl ',
    //     colorStart: 'orange',
    //     colorEnd: 'red'
    // })
    .addTo(controller);

var thanosMartyr = new ScrollMagic.Scene({
    triggerElement: ".story3-content .story-slide:nth-of-type(2) p:nth-of-type(2)",
    triggerHook: 'onEnter',
    duration: "50%"
})
    .setTween(thanosMartyrTl)
    // .addIndicators({
    //     name: 'check thanosMartyrTl ',
    //     colorStart: 'green',
    //     colorEnd: 'red'
    // })
    .addTo(controller);

var capMjolnir = new ScrollMagic.Scene({
    triggerElement: ".story5-content .story-slide:nth-of-type(2)",
    offset: 100,
    duration: "0"
})
    .setTween(capMjolnirTl)
    // .addIndicators({
    //     name: 'check capMjolnirTl ',
    //     colorStart: 'purple',
    //     colorEnd: 'red'
    // })
    .addTo(controller);


var capComics = new ScrollMagic.Scene({
    triggerElement: ".story5-content .story-slide:nth-of-type(3)",
    offset: 100,
    duration: "0"
})
    .setTween(capComicsTl)
    // .addIndicators({
    //     name: 'check capComicsTl ',
    //     colorStart: 'purple',
    //     colorEnd: 'red'
    // })
    .addTo(controller);


var charVsThanos = new ScrollMagic.Scene({
    triggerElement: ".story6-content .story-slide:first-of-type",
    offset: 200,
    duration: "70%"
})
    .setTween(charVsThanosTl)
    // .addIndicators({
    //     name: 'check charVsThanosTl ',
    //     colorStart: 'purple',
    //     colorEnd: 'red'
    // })
    .addTo(controller);

var intenseFight = new ScrollMagic.Scene({
    triggerElement: ".story6-content .story-slide:nth-of-type(2)",
    offset: 200,
    duration: "70%"
})
    .setTween(intenseFightTl)
    // .addIndicators({
    //     name: 'check intenseFightTl ',
    //     colorStart: 'purple',
    //     colorEnd: 'red'
    // })
    .addTo(controller);
    
var capSide = new ScrollMagic.Scene({
    triggerElement: ".story6-content .story-slide:nth-of-type(3)",
    offset: 200,
    duration: "70%"
})
    .setTween(capSideTl)
    // .addIndicators({
    //     name: 'check capSideTl ',
    //     colorStart: 'purple',
    //     colorEnd: 'red'
    // })
    .addTo(controller);

var finalBattle = new ScrollMagic.Scene({
    triggerElement: ".story6-content .story-slide:nth-of-type(3)",
    offset: 200,
    duration: "70%"
})
    .setTween(finalBattleTl)
    // .addIndicators({
    //     name: 'check finalBattleTl ',
    //     colorStart: 'yellow',
    //     colorEnd: 'red'
    // })
    .addTo(controller);

var thanosStruggle = new ScrollMagic.Scene({
    triggerElement: ".story6-content .story-slide:nth-of-type(4)",
    triggerHook: 'onCenter',
    // offset: 100,
    duration: "20%"
})
    .setTween(thanosStruggleTl)
    // .addIndicators({
    //     name: 'check thanosStruggleTl ',
    //     colorStart: 'green',
    //     colorEnd: 'red'
    // })
    .addTo(controller);

var beforeThanosSnap = new ScrollMagic.Scene({
    triggerElement: ".story6-content .story-slide:nth-of-type(4)",
    // offset: 100,
    triggerHook: 'onLeave',
    duration: "100%"
})
    .setTween(beforeThanosSnapTl)
    // .addIndicators({
    //     name: 'check beforeThanosSnapTl ',
    //     colorStart: 'pink',
    //     colorEnd: 'red'
    // })
    .addTo(controller);

var tonyNebula = new ScrollMagic.Scene({
    triggerElement: ".story6-content .story-slide:nth-of-type(5)",
    // offset: 100,
    duration: "100%"
})
    .setTween(tonyNebulaTl)
    // .addIndicators({
    //     name: 'check tonyNebulaTl ',
    //     colorStart: 'pink',
    //     colorEnd: 'red'
    // })
    .addTo(controller);

var thanosDead = new ScrollMagic.Scene({
    triggerElement: ".story6-content .story-slide:nth-of-type(6)",
    offset: 100,
    duration: "50%"
})
    .setTween(thanosDeadTl)
    // .addIndicators({
    //     name: 'check thanosDeadTl ',
    //     colorStart: 'pink',
    //     colorEnd: 'red'
    // })
    .addTo(controller);

var changeColors = new ScrollMagic.Scene({
    triggerElement: "div#why",
    triggerHook: 'onCenter',
    duration: "0"
})
    .setTween(changeColorsTl)
    // .addIndicators({
    //     name: 'check changeColorsTl ',
    //     colorStart: 'orange',
    //     colorEnd: 'red'
    // })
    .addTo(controller);

var whyTextChange = new ScrollMagic.Scene({
    triggerElement: ".story7-content .panel",
    triggerHook: 'onCenter',
    duration: "550%"
})
    .setTween(whyTextChangeTl)
    // .addIndicators({
    //     name: 'check whyTextChangeTl ',
    //     colorStart: 'orange',
    //     colorEnd: 'red'
    // })
    .addTo(controller);




var comicPanelAll = document.querySelectorAll('div.overview-container .panel .comic-panel');
var comicPanel1 = document.querySelector('div.overview-container .panel .comic-panel:first-of-type');
var comicPanel2 = document.querySelector('div.overview-container .panel .comic-panel:nth-of-type(2)');
var comicPanel3 = document.querySelector('div.overview-container .panel .comic-panel:nth-of-type(3)');
var comicPanel4 = document.querySelector('div.overview-container .panel .comic-panel:nth-of-type(4)');
var comicPanel5 = document.querySelector('div.overview-container .panel .comic-panel:nth-of-type(5)');
var comicPanel6 = document.querySelector('div.overview-container .panel .comic-panel:nth-of-type(6)');

function goToStory1 () {
    TweenLite
    .to(window, 1, { scrollTo: '.story1-container'});
}
function goToStory2() {
    TweenLite.to(window, 1, { scrollTo: '.story2-container'});
}
function goToStory3() {
    TweenLite.to(window, 1, { scrollTo: '.story3-container'});
}
function goToStory4() {
    TweenLite.to(window, 1, { scrollTo: '.story4-container' });
}
function goToStory5() {
    TweenLite.to(window, 1, { scrollTo: '.story5-container' });
}
function goToStory6() {
    TweenLite.to(window, 1, { scrollTo: '.story6-container' });
}


comicPanel1.addEventListener('click', goToStory1);
comicPanel2.addEventListener('click', goToStory2);
comicPanel3.addEventListener('click', goToStory3);
comicPanel4.addEventListener('click', goToStory4);
comicPanel5.addEventListener('click', goToStory5);
comicPanel6.addEventListener('click', goToStory6);

function revealTitleComic(e) {
    e.target.querySelector('p').classList.add('revealTitle');
}
function hideTitleComic(e) {
    e.target.querySelector('p').classList.remove('revealTitle');
}

for (i = 0; i < comicPanelAll.length; i++) {
    comicPanelAll[i].addEventListener('mouseover', revealTitleComic);
}
for (i = 0; i < comicPanelAll.length; i++) {
    comicPanelAll[i].addEventListener('mouseleave', hideTitleComic);
}



// scrollindicator

window.onscroll = function () { myFunction(); };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

var navBar = document.querySelector('.MyBlog-menu ');

var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
        // downscroll code
        navBar.classList.remove('revealMenu');
    } if (st + 3 < lastScrollTop) {
        // upscroll code
        navBar.classList.add('revealMenu');
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);





