$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '0em',
        paddingBottom: '0px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
  
    $(window).load(function() {
        if($(window).width() > 1199) {        
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '17px'});
            $('.hacktext>p').fitText(2, { minFontSize: '15.2px', maxFontSize: '15.4px'});
            $('.titlewp').fitText(1.8);
            $('.subtitlewp').fitText(2, { maxFontSize: '20px'});
            $('.wordtext>p').fitText(0.5, { minFontSize: '16px', maxFontSize: '17px'});
            $('.titleap').fitText(1.5);
            $('.subtitleap').fitText(2, { minFontSize: '16px', maxFontSize: '18px'});
            $('.pcont>p').fitText(2, { minFontSize: '15px', maxFontSize: '15px'});
        }

        if($(window).width() < 1201 && $(window).width() > 992) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '17px'});
            $('.hacktext>p').fitText(2.8, { minFontSize: '14px', maxFontSize: '14px'});
            $('.titlewp').fitText(1.8);
            $('.subtitlewp').fitText(2, { maxFontSize: '20px'});
            $('.wordtext>p').fitText(0.8, { minFontSize: '15px', maxFontSize: '16.5px'});
            $('.pcont>p').fitText(1.5, { minFontSize: '13.9px', maxFontSize: '13.9px'});
            $('.subtitleap').fitText(2, { minFontSize: '16px', maxFontSize: '18px'});
        }

        if($(window).width() < 993 && $(window).width() > 767) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '15px'});
            $('.hacktext>p').fitText(2.6, { minFontSize: '12.6px', maxFontSize: '12.8px'});
            $('.titlewp').fitText(1.6);
            $('.subtitlewp').fitText(2, { minFontSize:'17px', maxFontSize: '19px'});
            $('.wordtext>p').fitText(1.8, { minFontSize: '15px', maxFontSize: '15.5px'});
            $('.pcont>p').fitText(2.4, { minFontSize: '12px', maxFontSize: '12.6px'});

        }

        if($(window).width() < 768 && $(window).width() > 480) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '15px'});
            $('.hacktext>p').fitText(1.2, { minFontSize: '12.6px', maxFontSize: '13px'});
            $('.titlewp').fitText(2);
            $('.subtitlewp').fitText(2, { maxFontSize: '20px'});
            $('.pcont>p').fitText(1.8, { minFontSize: '11px', maxFontSize: '11.8px'});
        }

        if($(window).width() < 481) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '15px'});
            $('.hacktext>p').fitText(1.5, { minFontSize: '12px', maxFontSize: '12px'});
            $('.wordtext>p').fitText(1.5, { minFontSize: '14px', maxFontSize: '14px'});
            $('.pcont>p').fitText(3, { minFontSize: '11px', maxFontSize: '11px'});
            $('.subtitleap').fitText(2.7, { minFontSize: '12px',  maxFontSize: '12.5px'});
            $('.titleap').fitText(1.5);
            $('.titlewp').fitText(1.8),
            $('.subtitlewp').fitText(2, { maxFontSize: '17px'});
        }
    });

    $(window).resize(function() {
        if($(window).width() > 1199) {        
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '17px'});
            $('.hacktext>p').fitText(2, { minFontSize: '15.2px', maxFontSize: '15.4px'});
            $('.titlewp').fitText(1.8);
            $('.subtitlewp').fitText(2, { maxFontSize: '20px'});
            $('.wordtext>p').fitText(0.5, { minFontSize: '16px', maxFontSize: '17px'});
            $('.titleap').fitText(1.5);
            $('.subtitleap').fitText(2, { minFontSize: '16px', maxFontSize: '18px'});
            $('.pcont>p').fitText(2, { minFontSize: '15px', maxFontSize: '15px'});
        }

        if($(window).width() < 1201 && $(window).width() > 992) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '17px'});
            $('.hacktext>p').fitText(2.8, { minFontSize: '14px', maxFontSize: '14px'});
            $('.titlewp').fitText(1.8);
            $('.subtitlewp').fitText(2, { maxFontSize: '20px'});
            $('.wordtext>p').fitText(0.8, { minFontSize: '15px', maxFontSize: '16.5px'});
            $('.pcont>p').fitText(1.5, { minFontSize: '13.9px', maxFontSize: '13.9px'});
            $('.subtitleap').fitText(2, { minFontSize: '16px', maxFontSize: '18px'});
        }

        if($(window).width() < 993 && $(window).width() > 767) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '15px'});
            $('.hacktext>p').fitText(2.6, { minFontSize: '12.6px', maxFontSize: '12.8px'});
            $('.titlewp').fitText(1.6);
            $('.subtitlewp').fitText(2, { minFontSize:'17px', maxFontSize: '19px'});
            $('.wordtext>p').fitText(1.8, { minFontSize: '15px', maxFontSize: '15.5px'});
            $('.pcont>p').fitText(2.4, { minFontSize: '12px', maxFontSize: '12.6px'});

        }

        if($(window).width() < 768 && $(window).width() > 480) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '15px'});
            $('.hacktext>p').fitText(1.2, { minFontSize: '12.6px', maxFontSize: '13px'});
            $('.titlewp').fitText(2);
            $('.subtitlewp').fitText(2, { maxFontSize: '20px'});
            $('.pcont>p').fitText(1.8, { minFontSize: '11px', maxFontSize: '11.8px'});
        }

        if($(window).width() < 481) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '15px'});
            $('.hacktext>p').fitText(1.5, { minFontSize: '12px', maxFontSize: '12px'});
            $('.wordtext>p').fitText(1.5, { minFontSize: '14px', maxFontSize: '14px'});
            $('.pcont>p').fitText(3, { minFontSize: '11px', maxFontSize: '11px'});
            $('.subtitleap').fitText(2.7, { minFontSize: '12px',  maxFontSize: '12.5px'});
            $('.titleap').fitText(1.5);
            $('.titlewp').fitText(1.8),
            $('.subtitlewp').fitText(2, { maxFontSize: '17px'});
        }
    });

    if(location.hash.slice(1) == 'thirdPage') {
        $('nav').css({
            'background-color': '#A10000'
        })
    }
    if(location.hash.slice(1) == 'secondPage') {
        $('nav').css({
            'background-color': '#B24949'
        })
    }
    if(location.hash.slice(1) == 'firstPage') {
        $('nav').css({
            'background-color': 'rgba(96, 18, 24, 0.86)'
        })
    }
    if(location.hash.slice(1) == 'fourthPage') {
        $('nav').css({
            'background-color': '#aaaaaa'
        })
    }

    $(window).on('hashchange',function(){ 
        console.log(location.hash.slice(1));
        if(location.hash.slice(1) == 'fourthPage') {
            $('.fp-controlArrow.fp-prev').css({
                'border-color': 'transparent #aaa transparent transparent'
            })

            $('.fp-controlArrow.fp-next').css({
                'border-color': 'transparent transparent transparent #aaa'
            })
        }
        else {
            $('.fp-controlArrow.fp-prev').css({
                'border-color': 'transparent #fff transparent transparent'
            })

            $('.fp-controlArrow.fp-next').css({
                'border-color': 'transparent transparent transparent #fff'
            })
        }

        if(location.hash.slice(1) == 'thirdPage') {
            $('nav').css({
                'background-color': '#A10000'
            })
        }
        if(location.hash.slice(1) == 'secondPage') {
            $('nav').css({
                'background-color': '#B24949'
            })
        }
        if(location.hash.slice(1) == 'firstPage') {
            $('nav').css({
                'background-color': 'rgba(96, 18, 24, 0.86)'
            })
        }
        if(location.hash.slice(1) == 'fourthPage') {
            $('nav').css({
                'background-color': '#aaaaaa'
            })
        }
    }); 
});