const sr =  ScrollReveal();

// Title animation
sr.reveal('#t1', {
    origin: 'bottom' ,
    distance: '300px' ,
    duration:1000,
    reset: true
});

sr.reveal('#p1', {
    origin: 'bottom' ,
    distance: '300px' ,
    delay: 500,
    duration:1000,
    reset: true
});

// Timeline animation
if (window.innerWidth < 600) {
    sr.reveal('.timeline2 ul li div', {
        origin: 'bottom' ,
        distance: '200px' ,
        duration:1000,
        reset: true
    });
    sr.reveal('.timeline2 ul li:nth-child(even) div', {
        origin: 'bottom' ,
        distance: '200px' ,
        duration:1000,
        reset: true
    });
} else {
    sr.reveal('.timeline2 ul li div', {
        origin: 'right' ,
        distance: '200px' ,
        duration:1000,
        reset: true
    });
    sr.reveal('.timeline2 ul li:nth-child(even) div', {
        origin: 'left' ,
        distance: '200px' ,
        duration:1000,
        reset: true
    });
};

sr.reveal('.timeline2 ul li:nth-child(even) .time', {
    origin: 'right' ,
    distance: '200px' ,
    duration:1000,
    reset: true
});

sr.reveal('.timeline2 ul li:nth-child(odd) .time', {
    origin: 'left' ,
    distance: '200px' ,
    duration:1000,
    reset: true
});

// Skill animation
if (window.innerWidth > 600) {
    sr.reveal('.firstRow', {
        origin: 'left' ,
        distance: '200px' ,
        duration:1000,
        reset: true
    });
    sr.reveal('.secondRow', {
        origin: 'right' ,
        distance: '200px' ,
        duration:1000,
        reset: true
    });
};

sr.reveal('#photo', {
    origin: 'bottom' ,
    distance: '300px' ,
    duration:2000,
    reset: false
});

// Formation animation
if (window.innerWidth > 650) {
    sr.reveal('.details2', {
        origin: 'right' ,
        distance: '200px' ,
        duration:1000,
        reset: true
    });
    sr.reveal('.details1', {
        origin: 'left' ,
        distance: '200px',
        duration:1000,
        reset: true
    });
};

// var svg = document.querySelector('svg');

// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();
//   var isOutside = (rect.top >= window.innerHeight) || (rect.bottom <= 0);
//   return !isOutside;
// }

// window.addEventListener('scroll', function(e) {
//   svg.classList.toggle('in-view', isElementInViewport(svg));
// });