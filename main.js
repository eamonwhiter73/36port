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
        normalScrollElements: '.scrollbar-dynamic',
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

    /*MENU*/

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

    $('.dropdownbutton').click(function(){
        $('.dropdown').css({
            'display': 'none'
        })
    })

    /*EXECUTE ON LOAD*/

    window.addEventListener('load', checkHash);
    
    function checkHash() {
        $('#wrapper > div > div > nav').removeClass('col-lg-30 col-lg-offset-3 col-md-30 col-md-offset-3 col-sm-30 col-sm-offset-3');

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
                var speed2 = 150; // ms

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
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 100;
                $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 173;
                var diff2 = row - soft - titlepouth - 173;
                $('.art').height(diff1);
                $('.music').height(diff2);

                $('.fa-bars').css('color', 'rgba(96, 18, 24, 1)');
                $('.fa-bars').css('display', 'none');
                $('.menuholder').css('display', 'inline-block');
                if($('.resnav').is(':visible')) {
                    $('.resnav').css({'display': 'none', 'left':'-44.45%'});
                }

                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 100;
                $('.forborderskills').height(diffhack);
                
            }
            if($(window).width() < 1200 && $(window).width() > 991) {
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 97;
                $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 168;
                var diff2 = row - soft - titlepouth - 168;
                $('.art').height(diff1);
                $('.music').height(diff2);

                $('.fa-bars').css('color', 'rgba(96, 18, 24, 1)');
                $('.fa-bars').css('display', 'none');  
                $('.menuholder').css('display', 'inline-block');
                if($('.resnav').is(':visible')) {
                    $('.resnav').css({'display': 'none', 'left':'-44.45%'});
                }

                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 96;
                $('.forborderskills').height(diffhack);
            }

            if($(window).width() < 992 && $(window).width() > 767) {
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 36;
                $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 107;
                var diff2 = row - soft - titlepouth - 107;
                $('.art').height(diff1);
                $('.music').height(diff2);

                $('.fa-bars').css('color', 'rgba(96, 18, 24, 1)');
                $('.fa-bars').css('display', 'none');  
                $('.menuholder').css('display', 'inline-block');
                if($('.resnav').is(':visible')) {
                    $('.resnav').css({'display': 'none', 'left':'-44.45%'});
                }

                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 36;
                $('.forborderskills').height(diffhack);
            }

            if($(window).width() < 768 && $(window).width() > 480) {
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 36;
                $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 107;
                var diff2 = row - soft - titlepouth - 107;
                $('.art').height(diff1);
                $('.music').height(diff2);

                $('.fa-bars').css('color', 'rgba(96, 18, 24, 1)');
                $('.fa-bars').css('display', 'none');                    
                $('.menuholder').css('display', 'inline-block');
                if($('.resnav').is(':visible')) {
                    $('.resnav').css({'display': 'none', 'left':'-44.45%'});
                }  
            }

            if($(window).width() < 481 && $(window).width() > 320) {
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 126;
                $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 197;
                var diff2 = row - soft - titlepouth - 197;
                $('.art').height(diff1);
                $('.music').height(diff2);

                if($('.menubutton').is(':visible')) {
                    $('.fa-bars').css('display', 'inline-block');
                    $('.fa-bars').css('color', '#FFF1E4');
                    $('.menuholder').css('display', 'none');
                }
            }

            if($(window).width() < 321) {
                $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 13;
                var diff2 = hack - soft - 13;
                $('.art').height(diff1);
                $('.music').height(diff2);

                if($('.menubutton').is(':visible')) {
                    $('.fa-bars').css('display', 'inline-block');
                    $('.fa-bars').css('color', '#FFF1E4');
                    $('.menuholder').css('display', 'none');
                }
            }
        }

        /*TRANSISIONS*/

        if(location.hash.slice(1) == 'secondPage' || location.hash.substr(1) == 'secondPage/1' || location.hash.substr(1) == 'secondPage/2'){
            $('.forborderhack').css({ 'right': '', 'left': '-500px' }).stop().animate({
                left: "+=500"
            }, 2000, 'easeOutExpo');

            $('.hacktexthack').css({ 'left': '', 'right': '-550px' }).stop().animate({
                    right: "+=550"
            }, 1300, 'easeOutExpo');
        }

        if(location.hash.slice(1) == 'fourthPage') {
            $('.titlepcont').css({ 'left': '-700px', 'right': '', 'opacity': '0'}).stop().animate({
                opacity: 1,
                left: "+=700"
            }, 1500, 'easeOutBounce');

                           
            $('.offsetadj').css({ 'top': '100px', 'right': '', 'opacity': '0'}).stop().animate({
                opacity: 1,
                top: "-=100"
            }, 900, 'easeInOutCubic');

            $('.thanks').hide().fadeIn(3000);
            

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

    /*EXECUTE WHEN PAGE SWITCHED TO FROM OTHER PAGE*/
    
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
                $('.thanks').fadeIn(3000);
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
                var speed2 = 150; // ms

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
                //var hack = $('.hackskilladj').height();
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 100;
                var hack = $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 173;
                var diff2 = row - soft - titlepouth - 173;
                $('.art').height(diff1);
                $('.music').height(diff2);

                $('.fa-bars').css('color', 'rgba(96, 18, 24, 1)');
                $('.fa-bars').css('display', 'none');
                $('.menuholder').css('display', 'inline-block');
                if($('.resnav').is(':visible')) {
                    $('.resnav').css({'display': 'none', 'left':'-44.45%'});
                }

                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 100;
                var hack = $('.forborderskills').height(diffhack);
                
            }
            if($(window).width() < 1200 && $(window).width() > 991) {
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 97;
                var hack = $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 168;
                var diff2 = row - soft - titlepouth - 168;
                $('.art').height(diff1);
                $('.music').height(diff2);

                $('.fa-bars').css('color', 'rgba(96, 18, 24, 1)');
                $('.fa-bars').css('display', 'none');  
                $('.menuholder').css('display', 'inline-block');
                if($('.resnav').is(':visible')) {
                    $('.resnav').css({'display': 'none', 'left':'-44.45%'});
                }

                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 96;
                var hack = $('.forborderskills').height(diffhack);
                
            }

            if($(window).width() < 992 && $(window).width() > 767) {
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 38;
                var hack = $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 106;
                var diff2 = row - soft - titlepouth - 106;
                $('.art').height(diff1);
                $('.music').height(diff2);

                $('.fa-bars').css('color', 'rgba(96, 18, 24, 1)');
                $('.fa-bars').css('display', 'none');  
                $('.menuholder').css('display', 'inline-block');
                if($('.resnav').is(':visible')) {
                    $('.resnav').css({'display': 'none', 'left':'-44.45%'});
                }

                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 36;
                var hack = $('.forborderskills').height(diffhack);
            }

            if($(window).width() < 768 && $(window).width() > 480) {
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 38;
                var hack = $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 110;
                var diff2 = row - soft - titlepouth - 110;
                $('.art').height(diff1);
                $('.music').height(diff2);

                $('.fa-bars').css('color', 'rgba(96, 18, 24, 1)');
                $('.fa-bars').css('display', 'none');                    
                $('.menuholder').css('display', 'inline-block');
                if($('.resnav').is(':visible')) {
                    $('.resnav').css({'display': 'none', 'left':'-44.45%'});
                }
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

        /*RESIZE*/

        $(window).resize(function() {
            if($(window).width() > 1199) {
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 100;
                var hack = $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 179;
                var diff2 = row - soft - titlepouth - 179;
                $('.art').height(diff1);
                $('.music').height(diff2);

                $('.fa-bars').css('color', 'rgba(96, 18, 24, 1)');
                $('.fa-bars').css('display', 'none');
                $('.menuholder').css('display', 'inline-block');
                if($('.resnav').is(':visible')) {
                    $('.resnav').css({'display': 'none', 'left':'-44.45%'});
                }

                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 100;
                var hack = $('.forborderskills').height(diffhack);
            }
            if($(window).width() < 1200 && $(window).width() > 991) {
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 97;
                var hack = $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 171;
                var diff2 = row - soft - titlepouth - 171;
                $('.art').height(diff1);
                $('.music').height(diff2);

                $('.fa-bars').css('color', 'rgba(96, 18, 24, 1)');
                $('.fa-bars').css('display', 'none');  
                $('.menuholder').css('display', 'inline-block');
                if($('.resnav').is(':visible')) {
                    $('.resnav').css({'display': 'none', 'left':'-44.45%'});
                }
                
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 95;
                var hack = $('.forborderskills').height(diffhack);
            }

            if($(window).width() < 992 && $(window).width() > 767) {
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 36;
                var hack = $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 110;
                var diff2 = row - soft - titlepouth - 110;
                $('.art').height(diff1);
                $('.music').height(diff2);

                $('.fa-bars').css('color', 'rgba(96, 18, 24, 1)');
                $('.fa-bars').css('display', 'none');  
                $('.menuholder').css('display', 'inline-block');
                if($('.resnav').is(':visible')) {
                    $('.resnav').css({'display': 'none', 'left':'-44.45%'});
                }

                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 36;
                var hack = $('.forborderskills').height(diffhack);
            }

            if($(window).width() < 768 && $(window).width() > 480) {
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 38;
                var hack = $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 110;
                var diff2 = row - soft - titlepouth - 110;
                $('.art').height(diff1);
                $('.music').height(diff2);

                $('.fa-bars').css('color', 'rgba(96, 18, 24, 1)');
                $('.fa-bars').css('display', 'none');                    
                $('.menuholder').css('display', 'inline-block');
                if($('.resnav').is(':visible')) {
                    $('.resnav').css({'display': 'none', 'left':'-44.45%'});
                }  
            }

            if($(window).width() < 481 && $(window).width() > 320) {
                var row = $('#skills').height();
                var titlepouth = $('.titlepout').height();
                var navh = $('nav').height();
                var diffhack = row - titlepouth - navh - 126;
                var hack = $('.hackskilladj').height(diffhack);
                var hard = $('.hardware').height();
                var soft = $('.software').height();  
                var diff1 = row - hard - titlepouth - 197;
                var diff2 = row - soft - titlepouth - 197;
                $('.art').height(diff1);
                $('.music').height(diff2);

                if($('.menubutton').is(':visible')) {
                    $('.fa-bars').css('display', 'inline-block');
                    $('.fa-bars').css('color', '#FFF1E4');
                    $('.menuholder').css('display', 'none');
                }
            }

            if($(window).width() < 321) {
                var hack = $('.hackskilladj').height();
                var hard = $('.hardware').height();
                var soft = $('.software').height();
                var diff1 = hack - hard - 13;
                var diff2 = hack - soft - 13;
                $('.art').height(diff1);
                $('.music').height(diff2);

                if($('.menubutton').is(':visible')) {
                    $('.fa-bars').css('display', 'inline-block');
                    $('.fa-bars').css('color', '#FFF1E4');
                    $('.menuholder').css('display', 'none');
                }
            }
        });

        if(location.hash.slice(1) == 'secondPage' || location.hash.substr(1) == 'secondPage/1' || location.hash.substr(1) == 'secondPage/2'){
            setTimeout(function(){
                $('.forborderhack').css({ 'right': '', 'left': '-200px', 'opacity': '0' }).stop().animate({
                    opacity: 1,
                    left: "+=200"
                }, 1500, 'easeOutExpo');

                $('.hacktexthack').css({ 'left': '', 'right': '-250px', 'opacity': '0' }).stop().animate({
                        opacity: 1,
                        right: "+=250"
                }, 1300, 'easeOutExpo');
            }, 100);
        }
        if(location.hash.slice(1) == 'fourthPage') {
            $('.titlepcont').css({ 'left': '-200px', 'right': '', 'opacity': '0'}).stop().animate({
                opacity: 1,
                left: "+=200"
            }, 1500, 'easeOutBounce');

                           
            $('.offsetadj').css({ 'top': '100px', 'right': '', 'opacity': '0'}).stop().animate({
                opacity: 1,
                top: "-=100"
            }, 900, 'easeInOutCubic');

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

    /*MENU HASHCHANGE*/

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

    /*$('#leftg').on('click', function() {
        console.log('in rotate left');
        if($('.hackaboximgcont:visible').prev().is('.hackaboximgcont')) {
            $('.hackaboximgcont:visible').prev().css('display', 'block');  
            $('.hackaboximgcont:visible').next().css('display', 'none');
        }
        else {
            console.log('nothing before it');
        }
    });*/

    /*var active = false;

    $('#rightg').on('click', function() {
        if (active) {
            return;
        }
        console.log('in rotate right');
        if($('.hackaboximgcont:visible').next().is('.hackaboximgcont')) {
            active = true;
            console.log('in rotate left');
            if($('.hackaboximgcont:visible').next().is('.hackaboximgcont')) {
                $('.hackaboximgcont:visible').next().css('display', 'block');  
                $('.hackaboximgcont:visible').prev().css('display', 'none');
            }
            else {
                console.log('nothing before it');
            }
        }
        else {
            console.log('nothing after it');
        }

 
    });*/

    /*RESPONSIVE NAV*/
    
    $('.fa-bars').click(function() {
        $('.dropin').css('display', 'none');
        console.log('getting clicked')
        if($('.resnav').css('display') == 'none') {
        console.log('should appear')

            $('.resnav').css({"display": "inline-block", 'opacity': '0'}).animate({
                left: '+=44.45%',
                opacity: 1
            }, 300, function(){
                $('.fp-controlArrow.fp-prev').css('display', 'none');
            });
        }
        else {
            console.log('shold go away')
            $('.resnav').animate({
                left: '-=44.45%',
                opacity: 0
            }, 300, function(){
                $('.resnav').css('display', 'none');
                $('.fp-controlArrow.fp-prev').css('display', 'block');
            });
        }
    })

    $('#projectbuttonres').click(function() {
        if($('.dropin').is(':visible')) {
            $('.dropin').css({"display": "none"});
        }
        else {
            $('.dropin').css({"display": "block"});
        }
    });

    $('.resnavbut').click(function() {
        console.log('clicked resnavbut');
        $('.resnav').css('display', 'none').animate({
            left: '-=44.45%',
            opacity: 0
        }, 300, function(){
            $('.resnav').css('display', 'none');
            $('.fp-controlArrow.fp-prev').css('display', 'block');
        });
    });

    /*BIO*/

    console.log($('.bio').css('display'));
    $('#bio').click(function() {
        console.log('getting clicked')
        if($('.bio').css('display') == 'none') {
        console.log('should appear')

            $('.bio').css({"display": "inline-block", 'opacity': '0'}).animate({
                right: '+=44.45%',
                opacity: 0.98
            }, 300, function(){
                $('.fp-controlArrow.fp-next').css('display', 'none');
            });
        }
        else {
            console.log('shold go away')
            $('.bio').animate({
                right: '-=44.45%',
                opacity: 0
            }, 300, function(){
                $('.bio').css('display', 'none');
                $('.fp-controlArrow.fp-next').css('display', 'block');
            });
        }
    })

    $('#bio2').click(function() {
        console.log('getting clicked')
        if($('.bio').css('display') == 'none') {
        console.log('should appear')

            $('.bio').css({"display": "inline-block", 'opacity': '0'}).animate({
                right: '+=44.45%',
                opacity: 0.98
            }, 300, function(){
                $('.fp-controlArrow.fp-next').css('display', 'none');
            });
        }
        else {
            console.log('shold go away')
            $('.bio').animate({
                right: '-=44.45%',
                opacity: 0
            }, 300, function(){
                $('.bio').css('display', 'none');
                $('.fp-controlArrow.fp-next').css('display', 'block');
            });
        }
    })

    /*ARROWS*/

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
    $('#rightg').on('click', function() {
        console.log('in rotate right');
        if($('.hackaboximgcont:visible').next().is('.hackaboximgcont')) {
            $('.hackaboximgcont:visible').next().css('display', 'block');
            $('.hackaboximgcont:visible').prev().css('display', 'none');
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
        console.log('in rotate right');
        if($('.wpcont:visible').next().is('.hackaboximgcont')) { 
            $('.wpcont:visible').next().css('display', 'block');
            $('.hackaboximgcont:visible').prev().css('display', 'none');
        }
        else if($('.hackaboximgcont:visible').next().is('.hackaboximgcont')) {
            $('.hackaboximgcont:visible').next().css('display', 'block');
            $('.hackaboximgcont:visible').prev().css('display', 'none');
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
            $(this).css('background-color', 'rgba(219,196,176, 0.1ld)')
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

    /*UPDOWNNAV*/

    var arrayslidese = ['secondPage/1', 'secondPage/2'];
    var arrayanchors = ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'];

    $('#upa').click(function() {
        console.log(window.location.href);

        var link = document.location.href.split('/');
        console.log(link[0]+'//'+link[2]);

        var current = location.hash.substr(1);
        if(current=='') {
            window.location = link[0]+'//'+link[2]+'/#firstPage';
            return;
        }
        else if(current.indexOf('/') > -1) {
            window.location = link[0]+'//'+link[2]+'/#firstPage'
            return;
        }
        else {
            var thisindex = arrayanchors.indexOf(current);
            var next = arrayanchors[thisindex - 1];
            console.log(next);
            
            if(!next) {
                window.location = link[0]+'//'+link[2]+'/#firstPage';
                return;
            }

            window.location = link[0]+'//'+link[2]+'/#' + next;
        }
    })

    $('#downa').click(function() {
        var link = document.location.href.split('/');
        var current = location.hash.substr(1);    
        if(current=='') {
            window.location = link[0]+'//'+link[2]+'/#secondPage';
            return;
        }
        else if(current.indexOf('/') > -1) {
            window.location = link[0]+'//'+link[2]+'/#thirdPage';
            return;
        }
        else {
            var thisindex = arrayanchors.indexOf(current);
            var next = arrayanchors[thisindex + 1];
            console.log(next);
            if(!next) {
                window.location = link[0]+'//'+link[2]+'/#fourthPage';
                return;
            }
            window.location = link[0]+'//'+link[2]+'/#' + next;
        }
    })

    /*RESPONSIVE NAV*/

    $('#fullpage').not('.resnav .fa-bars').click(function() {
        $('.resnav').css({'display': 'none', 'left':'-44.45%'});
    })

    $('#fullpage').not('.resnav .fa-bars').click(function() {
        $('.resnav').css({'display': 'none', 'left':'-44.45%'});
    }) 

    $('#fullpage').not('.bio').click(function() {
        $('.bio').css({'display': 'none', 'right':'-44.45%'});
    })

    $('.menubutton').not('#bio').click(function(){
        $('.bio').css({'display': 'none', 'right':'-44.45%'});
    })

    $('.resnavbut').not('#bio2').click(function(){
        $('.bio').css({'display': 'none', 'right':'-44.45%'});
    })

    $('.scrollbar-dynamic').scrollbar();
});