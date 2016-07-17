$(document).ready(function() {
    "use strict";

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
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
  
    /*$(window).load(function() {
        if($(window).width() > 1199) {        
            $('.titlep').fitText(0.9);
            $('.titlepwp').fitText(0.9);
            $('.titlepios').fitText(0.9);
            $('.titlepskill').fitText(0.9);
            $('.titlepcont').fitText(0.9);
            //$('.subtitle').fitText(2.2, { maxFontSize: '18px'});
            //$('.hacktext>p').fitText(2, { minFontSize: '14px', maxFontSize: '15px'});
            $('.titlewp').fitText(1.8);
            $('.subtitlewp').fitText(2, { maxFontSize: '20px'});
            $('.wordtext>p').fitText(0.5, { minFontSize: '16px', maxFontSize: '17px'});
            $('.titleap').fitText(1.5);
            $('.subtitleap').fitText(2, { minFontSize: '16px', maxFontSize: '18px'});
            $('.pcont>p').fitText(2, { minFontSize: '15px', maxFontSize: '15px'});
        }

        if($(window).width() < 1201 && $(window).width() > 992) {
            $('.titlep').fitText(0.9);
            $('.titlepwp').fitText(0.9);
            $('.titlepios').fitText(0.9);
            $('.titlepskill').fitText(0.9);
            $('.titlepcont').fitText(0.9);
            //$('.subtitle').fitText(2.2, { maxFontSize: '18px'});
            //$('.hacktext>p').fitText(2.8, { minFontSize: '14px', maxFontSize: '15px'});
            $('.titlewp').fitText(1.8);
            $('.subtitlewp').fitText(2, { maxFontSize: '20px'});
            $('.wordtext>p').fitText(0.8, { minFontSize: '15px', maxFontSize: '16.5px'});
            $('.pcont>p').fitText(1.5, { minFontSize: '13.9px', maxFontSize: '13.9px'});
            $('.subtitleap').fitText(2, { minFontSize: '16px', maxFontSize: '18px'});
        }

        if($(window).width() < 993 && $(window).width() > 767) {
            $('.titlep').fitText(0.9);
            $('.titlepwp').fitText(0.9);
            $('.titlepios').fitText(0.9);
            $('.titlepskill').fitText(0.9);
            $('.titlepcont').fitText(0.9);
            //$('.subtitle').fitText(2.7, { minFontSize: '15px'});
            //$('.hacktext>p').fitText(2.6, { minFontSize: '12.6px', maxFontSize: '12.8px'});
            $('.titlewp').fitText(1.6);
            $('.subtitlewp').fitText(2, { minFontSize:'17px', maxFontSize: '19px'});
            $('.wordtext>p').fitText(1.8, { minFontSize: '15px', maxFontSize: '15.5px'});
            $('.pcont>p').fitText(2.4, { minFontSize: '12px', maxFontSize: '12.6px'});

        }

        if($(window).width() < 768 && $(window).width() > 480) {
            $('.titlep').fitText(0.9);
            $('.titlepwp').fitText(0.9);
            $('.titlepios').fitText(0.9);
            $('.titlepskill').fitText(0.9);
            $('.titlepcont').fitText(0.7);
            //$('.subtitle').fitText(2.7, { minFontSize: '15px'});
            //$('.hacktext>p').fitText(1.2, { minFontSize: '12.6px', maxFontSize: '15px'});
            $('.titlewp').fitText(2);
            $('.subtitlewp').fitText(2, { maxFontSize: '20px'});
            $('.pcont>p').fitText(1.8, { minFontSize: '11px', maxFontSize: '11.8px'});
        }

        if($(window).width() < 481) {
            $('.titlep').fitText(0.9);
            $('.titlepwp').fitText(0.9);
            $('.titlepios').fitText(0.9);
            $('.titlepskill').fitText(0.9);
            $('.titlepcont').fitText(0.7);
            //$('.subtitle').fitText(2.7, { minFontSize: '15px'});
            //$('.hacktext>p').fitText(1.5, { minFontSize: '12px', maxFontSize: '12px'});
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
            $('.titlep').fitText(0.9);
            $('.titlepwp').fitText(0.9);
            $('.titlepios').fitText(0.9);
            $('.titlepskill').fitText(0.9);
            $('.titlepcont').fitText(0.9);
            //$('.subtitle').fitText(2.2, { maxFontSize: '18px'});
            //$('.hacktext>p').fitText(2, { minFontSize: '14px', maxFontSize: '15px'});
            $('.titlewp').fitText(1.8);
            $('.subtitlewp').fitText(2, { maxFontSize: '20px'});
            $('.wordtext>p').fitText(0.5, { minFontSize: '16px', maxFontSize: '17px'});
            $('.titleap').fitText(1.5);
            $('.subtitleap').fitText(2, { minFontSize: '16px', maxFontSize: '18px'});
            $('.pcont>p').fitText(2, { minFontSize: '15px', maxFontSize: '15px'});
        }

        if($(window).width() < 1201 && $(window).width() > 992) {
            $('.titlep').fitText(0.9);
            $('.titlepwp').fitText(0.9);
            $('.titlepios').fitText(0.9);
            $('.titlepskill').fitText(0.9);
            $('.titlepcont').fitText(0.9);
            //$('.subtitle').fitText(2.2, { maxFontSize: '18px'});
            //$('.hacktext>p').fitText(2.8, { minFontSize: '14px', maxFontSize: '15px'});
            $('.titlewp').fitText(1.8);
            $('.subtitlewp').fitText(2, { maxFontSize: '20px'});
            $('.wordtext>p').fitText(0.8, { minFontSize: '15px', maxFontSize: '16.5px'});
            $('.pcont>p').fitText(1.5, { minFontSize: '13.9px', maxFontSize: '13.9px'});
            $('.subtitleap').fitText(2, { minFontSize: '16px', maxFontSize: '18px'});
        }

        if($(window).width() < 993 && $(window).width() > 767) {
            $('.titlep').fitText(0.9);
            $('.titlepwp').fitText(0.9);
            $('.titlepios').fitText(0.9);
            $('.titlepskill').fitText(0.9);
            $('.titlepcont').fitText(0.9);
            //$('.subtitle').fitText(2.7, { minFontSize: '15px'});
            //$('.hacktext>p').fitText(2.6, { minFontSize: '12.6px', maxFontSize: '12.8px'});
            $('.titlewp').fitText(1.6);
            $('.subtitlewp').fitText(2, { minFontSize:'17px', maxFontSize: '19px'});
            $('.wordtext>p').fitText(1.8, { minFontSize: '15px', maxFontSize: '15.5px'});
            $('.pcont>p').fitText(2.4, { minFontSize: '12px', maxFontSize: '12.6px'});

        }

        if($(window).width() < 768 && $(window).width() > 480) {
            $('.titlep').fitText(0.9);
            $('.titlepwp').fitText(0.9);
            $('.titlepios').fitText(0.9);
            $('.titlepskill').fitText(0.9);
            $('.titlepcont').fitText(0.7);
            //$('.subtitle').fitText(2.7, { minFontSize: '15px'});
            //$('.hacktext>p').fitText(1.2, { minFontSize: '12.6px', maxFontSize: '15px'});
            $('.titlewp').fitText(2);
            $('.subtitlewp').fitText(2, { maxFontSize: '20px'});
            $('.pcont>p').fitText(1.8, { minFontSize: '11px', maxFontSize: '11.8px'});
        }

        if($(window).width() < 481) {
            $('.titlep').fitText(0.9);
            $('.titlepwp').fitText(0.9);
            $('.titlepios').fitText(0.9);
            $('.titlepskill').fitText(0.9);
            $('.titlepcont').fitText(0.7);
            //$('.subtitle').fitText(2.7, { minFontSize: '15px'});
            //$('.hacktext>p').fitText(1.5, { minFontSize: '12px', maxFontSize: '12px'});
            $('.wordtext>p').fitText(1.5, { minFontSize: '14px', maxFontSize: '14px'});
            $('.pcont>p').fitText(3, { minFontSize: '11px', maxFontSize: '11px'});
            $('.subtitleap').fitText(2.7, { minFontSize: '12px',  maxFontSize: '12.5px'});
            $('.titleap').fitText(1.5);
            $('.titlewp').fitText(1.8),
            $('.subtitlewp').fitText(2, { maxFontSize: '17px'});
        }
    });*/

    /*if(location.hash.slice(1) == 'thirdPage') {
        $('nav').css({
            'background-color': '#A10000'
        })
    }
    if(location.hash.slice(1) == 'secondPage') {
        $('nav').css({
            'background-color': '#B24949'
        })
    }*/
    /*if(location.hash.slice(1) == 'fourthPage') {
        $('nav').css({
            'background-color': '#aaaaaa'
        })
    }*/
    /*else if(location.hash.slice(1) == 'thirdPage') {
        $('.fp-controlArrow.fp-prev').css({
            'border-color': 'transparent #A10000 transparent transparent'
        })

        $('.fp-controlArrow.fp-next').css({
            'border-color': 'transparent transparent transparent #A10000'
        })
    }
    else if(location.hash.slice(1) == 'secondPage'){
        $('.fp-controlArrow.fp-prev').css({
            'border-color': 'transparent rgb(96, 18, 24) transparent transparent'
        })

        $('.fp-controlArrow.fp-next').css({
            'border-color': 'transparent transparent transparent rgb(96, 18, 24)'
        })
    }
    else {
        $('.fp-controlArrow.fp-prev').css({
            'border-color': 'transparent #aaa transparent transparent'
        })

        $('.fp-controlArrow.fp-next').css({
            'border-color': 'transparent transparent transparent #aaa'
        })
    }*/

    $('#projectsbutton').mouseenter(function() {
        $('.dropdown').css({
            "display": "inline"
        })
    })

    $('#projectsbutton').mouseleave(function() {
        $('.dropdown').css({
            "display": "none"
        })
    })

    $('.dropdownbutton').hover(function(){
        $('.dropdown').css({
            'display': 'block'
        })
    })

    $('.dropdownbutton').hover(function(){
        $('.dropdown').css({
            'display': 'block'
        })
    })

    $('.dropdownbutton').mouseleave(function(){
        $('.dropdown').css({
            'display': 'none'
        })
    })

    window.addEventListener('load', checkHash);
    
    function checkHash() {
        $('.showme').hide();
        $('.changesmallmarg').hide();

        if(location.hash.slice(1) == 'thirdPage') {
            console.log("in third page");
            setTimeout(function() {
                console.log('in forborderskills visible');
                var step = 0;
                var step2 = 0;
                var content = $(".showme");
                var content2 = $('.changesmallmarg');
                var max = content.length;
                var max2 = content2.length;
                var speed = 100; // ms
                var speed2 = 250; // ms

                var handle = setInterval(function () {
                    if (step >= max) {
                        clearInterval(handle);
                    } else {
                        var item = content[step];
                        $(item).show();
                    }
                    step++;
                }, speed);

                var handle2 = setInterval(function () {
                    if (step2 >= max2) {
                        clearInterval(handle2);
                    } else {
                        var item2 = content2[step2];
                        $(item2).fadeIn();
                    }
                    step2++;
                }, speed2);
            }, 400);

            $('.titlepskill').css({ 'right': '-100px', 'left': '', 'opacity': '0'}).stop().animate({
                opacity: 1,
                right: "+=100"
            }, 1000, 'linear');

            if($(window).width() > 1199) {
                var hack = $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 23;
                var diff2 = hack - soft - 23;
                $('.art').height(diff1);
                $('.music').height(diff2);
            }

            if($(window).width() < 1200 && $(window).width() > 992) {
                var hack = $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 25;
                var diff2 = hack - soft - 25;
                $('.art').height(diff1);
                $('.music').height(diff2);
            }

            if($(window).width() < 993 && $(window).width() > 767) {
                var hack = $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 21;
                var diff2 = hack - soft - 21;
                $('.art').height(diff1);
                $('.music').height(diff2);
            }
            if($(window).width() < 768 && $(window).width() > 480) {
                var hack = $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 18;
                var diff2 = hack - soft - 18;
                $('.art').height(diff1);
                $('.music').height(diff2);
            }

            if($(window).width() < 481 && $(window).width() > 320) {
                var hack = $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 15;
                var diff2 = hack - soft - 15;
                $('.art').height(diff1);
                $('.music').height(diff2);
            }

            if($(window).width() < 321) {
                var hack = $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 13;
                var diff2 = hack - soft - 13;
                $('.art').height(diff1);
                $('.music').height(diff2);
            }


        }

        if(location.hash.slice(1) == 'secondPage' || location.hash.substr(1) == 'secondPage/1' || location.hash.substr(1) == 'secondPage/2'){
            $('.forborderhack').css({ 'right': '', 'left': '-500px' }).stop().animate({
                left: "+=500"
            }, 1300, 'easeOutExpo');

            $('.hacktexthack').css({ 'left': '', 'right': '-550px' }).stop().animate({
                    right: "+=550"
            }, 2000, 'easeOutExpo');
        }

        if(location.hash.slice(1) == 'fourthPage') {
            $('.titlepcont').css({ 'left': '-700px', 'right': '', 'opacity': '0'}).stop().animate({
                opacity: 1,
                left: "+=700"
            }, 2500, 'easeOutBounce');

                           
            $('.offsetadj').css({ 'top': '100px', 'right': '', 'opacity': '0'}).stop().animate({
                opacity: 1,
                top: "-=100"
            }, 2000, 'easeInOutCubic');

            if($('.offsetadj').is(':visible')) {
                $('.thanks').hide().fadeIn(3000);
            }

            $('.margincoloringl').css({'left': '-10%', 'right': '', 'opacity': '0'}).animate({
                left: '+=10%',
                opacity: '1'
            }, 2000);

            $('.margincoloringr').css({'right': '-10%', 'left': '', 'opacity': '0'}).animate({
                right: '+=10%',
                opacity: '1'
            }, 2000)
        }
    }
    
    $(window).on('hashchange',function(){
        var y = 0;
        //console.log(location.hash.slice(1));
        var intervalID2 = setInterval(function() {
            $('.showme').hide();
            $('.changesmallmarg').hide();

            if (++y === 1) {
                window.clearInterval(intervalID2);
            };
        }, 700);

        
        if(location.hash.slice(1) == 'firstPage') {
            setTimeout(function(){
                $('.homejumbo').css({'left': '-80px', 'opacity' : '0'}).animate({
                    opacity: 1,
                    left: "+=80px"
                }, 1000, "easeOutExpo");
            },300);
        }

        if(location.hash.slice(1) == 'fourthPage') {
            if($('.offsetadj').is(':visible')) {
                $('.thanks').hide().fadeIn(3000);
            }
        }
        if(location.hash.slice(1) == 'thirdPage') {
            console.log("in third page");
            //get the html content
            //if($(".forborderskills").is(':visible')) {

            setTimeout(function() {
                var step = 0;
                var content = $(".showme");
                var max = content.length;
                var speed = 100; // ms


                var handle = setInterval(function () {
                    if (step >= max) {
                        clearInterval(handle);
                    } else {
                        var item = content[step];
                        $(item).show();
                    }
                    step++;
                }, speed);
            }, 600);

            setTimeout(function() {
                var step2 = 0;
                var content2 = $('.changesmallmarg');
                var max2 = content2.length;
                var speed2 = 290; // ms

                var handle2 = setInterval(function () {
                    if (step2 >= max2) {
                        clearInterval(handle2);
                    } else {
                        var item2 = content2[step2];
                        $(item2).fadeIn();
                    }
                    step2++;
                }, speed2);
            }, 600);

            $('.forborderskills').css({'left': '-350px', 'right': '', 'opacity': '0'}).animate({
                left: '+=350',
                opacity: 1
            }, 1000);

            $('.hackskilladj').css({'right': '-600px', 'left': '', 'opacity': '0'}).animate({
                right: '+=600',
                opacity: 1
            }, 1000);

            $('.titlepskill').css({ 'right': '-100px', 'left': '', 'opacity': '0'}).stop().animate({
                opacity: 1,
                right: "+=100"
            }, 1000, 'linear');

            if($(window).width() > 1199) {
                var hack = $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 28;
                var diff2 = hack - soft - 28;
                $('.art').height(diff1);
                $('.music').height(diff2);
            }
            if($(window).width() < 1200 && $(window).width() > 992) {
                var hack = $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 25;
                var diff2 = hack - soft - 25;
                $('.art').height(diff1);
                $('.music').height(diff2);
            }

            if($(window).width() < 993 && $(window).width() > 767) {
                var hack = $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 21;
                var diff2 = hack - soft - 21;
                $('.art').height(diff1);
                $('.music').height(diff2);
            }

            if($(window).width() < 768 && $(window).width() > 480) {
                var hack = $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 18;
                var diff2 = hack - soft - 18;
                $('.art').height(diff1);
                $('.music').height(diff2);
            }

            if($(window).width() < 481 && $(window).width() > 320) {
                var hack = $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 15;
                var diff2 = hack - soft - 15;
                $('.art').height(diff1);
                $('.music').height(diff2);
            }

            if($(window).width() < 321) {
                var hack = $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 13;
                var diff2 = hack - soft - 13;
                $('.art').height(diff1);
                $('.music').height(diff2);
            }
        }

        if(location.hash.slice(1) == 'secondPage' || location.hash.substr(1) == 'secondPage/1' || location.hash.substr(1) == 'secondPage/2'){
            setTimeout(function(){
                $('.forborderhack').css({ 'right': '', 'left': '-200px', 'opacity': '0' }).stop().animate({
                    opacity: 1,
                    left: "+=200"
                }, 2200, 'easeOutExpo');

                $('.hacktexthack').css({ 'left': '', 'right': '-250px', 'opacity': '0' }).stop().animate({
                        opacity: 1,
                        right: "+=250"
                }, 2300, 'easeOutExpo');
            }, 100);
        }
        if(location.hash.slice(1) == 'fourthPage') {
            $('.titlepcont').css({ 'left': '-200px', 'right': '', 'opacity': '0'}).stop().animate({
                opacity: 1,
                left: "+=200"
            }, 2500, 'easeOutBounce');

                           
            $('.offsetadj').css({ 'top': '100px', 'right': '', 'opacity': '0'}).stop().animate({
                opacity: 1,
                top: "-=100"
            }, 2000, 'easeInOutCubic');

            $('.margincoloringl').css({'left': '-10%', 'right': '', 'opacity': '0'}).animate({
                left: '+=10%',
                opacity: '1'
            }, 2000);

            $('.margincoloringr').css({'right': '-10%', 'left': '', 'opacity': '0'}).animate({
                right: '+=10%',
                opacity: '1'
            }, 2000)
        }
    });

    $('.read').click(function() {
        $('.readpanel').css({
            "display": "block"
        })
    });

    $('.closemine').click(function() {
        $('.readpanel').css({
            "display": "none"
        })
    });

    $('#projectsbutton').mouseenter(function() {
        $('.apex-dn').css({
            "display": "block"
        })
    });

    $('#projectsbutton').mouseleave(function() {
        $('.apex-dn').css({
            "display": "none"
        })  
    });

    $('.menubutton').mouseenter(function() {
        $(this).css({
            "color": "#ffffff"
        })
        $(this).animate({
            top: "+=1",
        }, 100, function() {
            // Animation complete.
        });
    });

    $('.menubutton').mouseleave(function() {
        $(this).animate({
            top: "-=1",
        }, 200, function() {
            // Animation complete.
        });  
        $(this).css({
            "color": "#FFF1E4"
        })   
    });

    $('.dropdownbutton').mouseenter(function() {
        $(this).animate({
            left: "+=1",
            width: "-=1"
        }, 100, function() {
            // Animation complete.
        });
        $(this).css({
            "color": "#ffffff"
        }) 
    });

    $('.dropdownbutton').mouseleave(function() {
        $(this).animate({
            left: "-=1",
            width: "+=1"
        }, 200, function() {
            // Animation complete.
        });
        $(this).css({
            "color": "#FFF1E4"
        }) 
    });

    $('#leftg').on('click', function() {
        console.log('in rotate left');
        if($('.hackaboximgcont:visible').prev().is('.hackaboximgcont')) {
            $('.hackaboximgcont:visible').prev().css('display', 'block');  
            $('.hackaboximgcont:visible').next().css('display', 'none');
        }
        else {
            console.log('nothing before it');
        }
    });

    var active = false;

    $('#rightg').on('click', function() {
        if (active) {
            return;
        }
        console.log('in rotate right');
        if($('.hackaboximgcont:visible').next().is('.hackaboximgcont')) {
            active = true;
            $('.hackaboximgcont:visible').next().css({
                'opacity': '0',
                'position': 'absolute',
                'left': '100%',
                'display': 'block'
            });
            $('.hackaboximgcont:visible').next().animate({
                opacity: '1',
                left: '-=100%'
            }, 600, function(){
                $('.hackaboximgcont:visible').prev().css('display', 'none');
                $('.hackaboximgcont:visible').css('position', 'relative');
                active = false;
            })
            //$('.hackaboximgcont:visible').next().css('display', 'block');
        }
        else {
            console.log('nothing after it');
        }

 
    });

    $('#leftgw').on('click', function() {
        console.log('in rotate left');
        if($('.hackaboximgcont:visible').prev().is('.hackaboximgcont')) {
            $('.hackaboximgcont:visible').prev().css('display', 'block');  
            $('.hackaboximgcont:visible').next().css('display', 'none');
        }
        else if($('.hackaboximgcont:visible').prev().is('.wpcont')) {
            $('.hackaboximgcont:visible').prev().css('display', 'block');  
            $('.wpcont:visible').next().css('display', 'none');
        } 
        else {
            console.log('nothing before it');
        }
    });
    $('#rightgw').on('click', function() {
        if (active) {
            return;
        }
        console.log('in rotate right');
        if($('.wpcont:visible').next().is('.hackaboximgcont')) {
            active = true;
            $('.wpcont:visible').next().css({
                'opacity': '0',
                'position': 'absolute',
                'left': '100%',
                'display': 'block'
            });
            $('.wpcont:visible').next().animate({
                opacity: '1',
                left: '-=100%'
            }, 600, function(){
                $('.hackaboximgcont:visible').prev().css('display', 'none');
                $('.hackaboximgcont:visible').css('position', 'relative');
                active = false;
            })
        }
        else if($('.hackaboximgcont:visible').next().is('.hackaboximgcont')) {

            active = true;
            $('.hackaboximgcont:visible').next().css({
                'opacity': '0',
                'position': 'absolute',
                'left': '100%',
                'display': 'block'
            });
            $('.hackaboximgcont:visible').next().animate({
                opacity: '1',
                left: '-=100%'
            }, 600, function(){
                $('.hackaboximgcont:visible').prev().css('display', 'none');
                $('.hackaboximgcont:visible').css('position', 'relative');
                active = false;
            })
        }
        else {
            console.log('nothing after it');
        }
    });

    $('.forborder').magnificPopup({
      delegate: 'a.imsel', // child items selector, by clicking on it popup will open
      type: 'image'
      // other options
    });

    $('.forborderskills').children().each(function(index, value){
        if(index < 3 || (index > 5 && index < 9) || index > 11) {
            $(this).css('background-color', 'rgba(219,196,176, 0.7)')
        }
        else {
            $(this).css('background-color', 'rgba(219,196,176, 0.1)')
        }
    })

    $('.hackskilladj>.row').children().each(function(index, value){
        if(index == 0 || index == 3) {
            $(this).css('background-color', 'rgba(96, 18, 24, 0.13)');
            $(this).css('border', 'none');
        }
        else {
            $(this).css('background-color', 'rgba(219,196,176, 0.1)')
        }
    })

    $(window).resize(function() {
        if($(window).width() > 1199) {
            var hack = $('.hackskilladj').height();
            var hard = $('.hardware').height();
            var soft = $('.software').height();
            var diff1 = hack - hard - 28;
            var diff2 = hack - soft - 28;
            $('.art').height(diff1);
            $('.music').height(diff2);
        }
        if($(window).width() < 1200 && $(window).width() > 992) {
            var hack = $('.hackskilladj').height();
            var hard = $('.hardware').height();
            var soft = $('.software').height();
            var diff1 = hack - hard - 25;
            var diff2 = hack - soft - 25;
            $('.art').height(diff1);
            $('.music').height(diff2);
        }

        if($(window).width() < 993 && $(window).width() > 767) {
            var hack = $('.hackskilladj').height();
            var hard = $('.hardware').height();
            var soft = $('.software').height();
            var diff1 = hack - hard - 21;
            var diff2 = hack - soft - 21;
            $('.art').height(diff1);
            $('.music').height(diff2);
        }

        if($(window).width() < 768 && $(window).width() > 480) {
            var hack = $('.hackskilladj').height();
            var hard = $('.hardware').height();
            var soft = $('.software').height();
            var diff1 = hack - hard - 18;
            var diff2 = hack - soft - 18;
            $('.art').height(diff1);
            $('.music').height(diff2);
        }

        if($(window).width() < 481 && $(window).width() > 320) {
            var hack = $('.hackskilladj').height();
            var hard = $('.hardware').height();
            var soft = $('.software').height();
            var diff1 = hack - hard - 15;
            var diff2 = hack - soft - 15;
            $('.art').height(diff1);
            $('.music').height(diff2);
        }

        if($(window).width() < 321) {
            var hack = $('.hackskilladj').height();
            var hard = $('.hardware').height();
            var soft = $('.software').height();
            var diff1 = hack - hard - 13;
            var diff2 = hack - soft - 13;
            $('.art').height(diff1);
            $('.music').height(diff2);
        }
    });
});