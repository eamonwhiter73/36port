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
            $('.hacktext>p').fitText(2, { minFontSize: '15.5px', maxFontSize: '15.6px'});
            $('.titlewp').fitText(1.5);
            $('.subtitlewp').fitText(2, { minFontSize: '17px'});
            $('.wordtext>p').fitText(0.5, { minFontSize: '18px', maxFontSize: '18.3px'});
            $('.titleap').fitText(1.5);
            $('.subtitleap').fitText(2, { minFontSize: '17px'});
            $('.pcont>p').fitText(2, { minFontSize: '15px', maxFontSize: '15px'});
        }

        if($(window).width() < 1201 && $(window).width() > 992) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '17px'});
            $('.hacktext>p').fitText(2.8, { minFontSize: '14.7px', maxFontSize: '15px'});
            $('.titlewp').fitText(1.5);
            $('.subtitlewp').fitText(2, { minFontSize: '17px'});
            $('.wordtext>p').fitText(0.5, { minFontSize: '17px', maxFontSize: '17.4px'});
            $('.pcont>p').fitText(2, { minFontSize: '13.5px', maxFontSize: '14.8px'});
        }

        if($(window).width() < 993 && $(window).width() > 767) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '15px'});
            $('.hacktext>p').fitText(1.2, { minFontSize: '12.6px', maxFontSize: '13.2px'});
            $('.titlewp').fitText(1.2);
            $('.subtitlewp').fitText(1.5, { minFontSize: '17px'});
            $('.wordtext>p').fitText(1.8, { minFontSize: '15px', maxFontSize: '15.4px'});
            $('.pcont>p').fitText(1.2, { minFontSize: '13px', maxFontSize: '13.3px'});

        }

        if($(window).width() < 768 && $(window).width() > 480) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '15px'});
            $('.hacktext>p').fitText(1.2, { minFontSize: '12.6px', maxFontSize: '13px'});
            $('.titlewp').fitText(1.5);
            $('.subtitlewp').fitText(2, { minFontSize: '17px'});
            $('.pcont>p').fitText(1.2, { minFontSize: '12.6px', maxFontSize: '12.6px'});
        }

        if($(window).width() < 481) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '15px'});
            $('.hacktext>p').fitText(1.5, { minFontSize: '12px', maxFontSize: '12px'});
            $('.wordtext>p').fitText(1.5, { minFontSize: '14px', maxFontSize: '14px'});
            $('.pcont>p').fitText(1.5, { minFontSize: '11.7px', maxFontSize: '11.7px'});
            $('.subtitleap').fitText(2.7, { minFontSize: '14px'});
            $('.titleap').fitText(1.5);
        }
    });

    $(window).resize(function() {
        if($(window).width() > 1199) {        
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '17px'});
            $('.hacktext>p').fitText(2, { minFontSize: '15.5px', maxFontSize: '15.6px'});
            $('.titlewp').fitText(1.5);
            $('.subtitlewp').fitText(2, { minFontSize: '17px'});
            $('.wordtext>p').fitText(0.5, { minFontSize: '18px', maxFontSize: '18.3px'});
            $('.titleap').fitText(1.5);
            $('.subtitleap').fitText(2, { minFontSize: '17px'});
            $('.pcont>p').fitText(2, { minFontSize: '15px', maxFontSize: '15px'});
        }

        if($(window).width() < 1201 && $(window).width() > 992) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '17px'});
            $('.hacktext>p').fitText(2.8, { minFontSize: '14.7px', maxFontSize: '15px'});
            $('.titlewp').fitText(1.5);
            $('.subtitlewp').fitText(2, { minFontSize: '17px'});
            $('.wordtext>p').fitText(0.5, { minFontSize: '17px', maxFontSize: '17.4px'});
            $('.pcont>p').fitText(2, { minFontSize: '13.5px', maxFontSize: '14.8px'});
        }

        if($(window).width() < 993 && $(window).width() > 767) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '15px'});
            $('.hacktext>p').fitText(1.2, { minFontSize: '12.6px', maxFontSize: '13.2px'});
            $('.titlewp').fitText(1.2);
            $('.subtitlewp').fitText(1.5, { minFontSize: '17px'});
            $('.wordtext>p').fitText(1.8, { minFontSize: '15px', maxFontSize: '15.4px'});
            $('.pcont>p').fitText(1.2, { minFontSize: '13px', maxFontSize: '13.3px'});

        }

        if($(window).width() < 768 && $(window).width() > 480) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '15px'});
            $('.hacktext>p').fitText(1.2, { minFontSize: '12.6px', maxFontSize: '13px'});
            $('.titlewp').fitText(1.5);
            $('.subtitlewp').fitText(2, { minFontSize: '17px'});
            $('.pcont>p').fitText(1.2, { minFontSize: '12.6px', maxFontSize: '12.6px'});
        }

        if($(window).width() < 481) {
            $('.logo').fitText(0.67);
            $('.titlep').fitText(1.5);
            $('.subtitle').fitText(2.7, { minFontSize: '15px'});
            $('.hacktext>p').fitText(1.5, { minFontSize: '12px', maxFontSize: '12px'});
            $('.wordtext>p').fitText(1.5, { minFontSize: '14px', maxFontSize: '14px'});
            $('.pcont>p').fitText(1.5, { minFontSize: '11.7px', maxFontSize: '11.7px'});
            $('.subtitleap').fitText(2.7, { minFontSize: '14px'});
            $('.titleap').fitText(1.5);
        }
    });

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
    }); 
});