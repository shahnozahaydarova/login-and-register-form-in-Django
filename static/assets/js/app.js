$(function () {
    'use strict';

    $(document).on('click', '.password-indicator', function () {
        var PASSWORD_FIELD = $(this).closest('.password-wrapper').find('input');
        $(this).toggleClass('fa-eye-slash');
        var attrType = PASSWORD_FIELD.attr('type');
        if(attrType == 'password') {
            PASSWORD_FIELD.attr('type', 'text');
        } else {
            PASSWORD_FIELD.attr('type', 'password');
        }
    })

    $('.login-popover').popover({
        trigger: 'hover',
        container: 'body'
    })

    $("#commonForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
            },
            password: {
                required: true,
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "Please enter your email address",
            },
            password: {
                required: "Please enter your password",
            }
        }
    });
})

/** Particles js start **/
$.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function(){
    particlesJS('particles-js',
        {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 500
                    }
                },
                "color": {
                    "value": "#b1c900"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }
    );

});

/** Login 6 start **/
(function($){
    var canvas = $('#bg').children('canvas'),
        background = canvas[0],
        foreground1 = canvas[1],
        foreground2 = canvas[2],
        config = {
            circle: {
                amount: 18,
                layer: 3,
                color: [157, 97, 207],
                alpha: 0.3
            },
            line: {
                amount: 12,
                layer: 3,
                color: [255, 255, 255],
                alpha: 0.3
            },
            speed: 0.5,
            angle: 20
        };

    if (background.getContext){
        var bctx = background.getContext('2d'),
            fctx1 = foreground1.getContext('2d'),
            fctx2 = foreground2.getContext('2d'),
            M = window.Math, // Cached Math
            degree = config.angle/360*M.PI*2,
            circles = [],
            lines = [],
            wWidth, wHeight, timer;

        requestAnimationFrame = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function(callback, element) { setTimeout(callback, 1000 / 60); };

        cancelAnimationFrame = window.cancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.msCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            clearTimeout;

        var setCanvasHeight = function(){
            wWidth = $(window).width();
            wHeight = $(window).height(),

                canvas.each(function(){
                    this.width = wWidth;
                    this.height = wHeight;
                });
        };

        var drawCircle = function(x, y, radius, color, alpha){
            var gradient = fctx1.createRadialGradient(x, y, radius, x, y, 0);
            gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
            gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');

            fctx1.beginPath();
            fctx1.arc(x, y, radius, 0, M.PI*2, true);
            fctx1.fillStyle = gradient;
            fctx1.fill();
        };

        var drawLine = function(x, y, width, color, alpha){
            var endX = x+M.sin(degree)*width,
                endY = y-M.cos(degree)*width,
                gradient = fctx2.createLinearGradient(x, y, endX, endY);
            gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
            gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');

            fctx2.beginPath();
            fctx2.moveTo(x, y);
            fctx2.lineTo(endX, endY);
            fctx2.lineWidth = 3;
            fctx2.lineCap = 'round';
            fctx2.strokeStyle = gradient;
            fctx2.stroke();
        };

        var drawBack = function(){
            bctx.clearRect(0, 0, wWidth, wHeight);

            var gradient = [];

            gradient[0] = bctx.createRadialGradient(wWidth*0.3, wHeight*0.1, 0, wWidth*0.3, wHeight*0.1, wWidth*0.9);
            gradient[0].addColorStop(0, 'rgb(0, 26, 77)');
            gradient[0].addColorStop(1, 'transparent');

            bctx.translate(wWidth, 0);
            bctx.scale(-1,1);
            bctx.beginPath();
            bctx.fillStyle = gradient[0];
            bctx.fillRect(0, 0, wWidth, wHeight);

            gradient[1] = bctx.createRadialGradient(wWidth*0.1, wHeight*0.1, 0, wWidth*0.3, wHeight*0.1, wWidth);
            gradient[1].addColorStop(0, 'rgb(0, 150, 240)');
            gradient[1].addColorStop(0.8, 'transparent');

            bctx.translate(wWidth, 0);
            bctx.scale(-1,1);
            bctx.beginPath();
            bctx.fillStyle = gradient[1];
            bctx.fillRect(0, 0, wWidth, wHeight);

            gradient[2] = bctx.createRadialGradient(wWidth*0.1, wHeight*0.5, 0, wWidth*0.1, wHeight*0.5, wWidth*0.5);
            gradient[2].addColorStop(0, 'rgb(40, 20, 105)');
            gradient[2].addColorStop(1, 'transparent');

            bctx.beginPath();
            bctx.fillStyle = gradient[2];
            bctx.fillRect(0, 0, wWidth, wHeight);
        };

        var animate = function(){
            var sin = M.sin(degree),
                cos = M.cos(degree);

            if (config.circle.amount > 0 && config.circle.layer > 0){
                fctx1.clearRect(0, 0, wWidth, wHeight);
                for (var i=0, len = circles.length; i<len; i++){
                    var item = circles[i],
                        x = item.x,
                        y = item.y,
                        radius = item.radius,
                        speed = item.speed;

                    if (x > wWidth + radius){
                        x = -radius;
                    } else if (x < -radius){
                        x = wWidth + radius
                    } else {
                        x += sin*speed;
                    }

                    if (y > wHeight + radius){
                        y = -radius;
                    } else if (y < -radius){
                        y = wHeight + radius;
                    } else {
                        y -= cos*speed;
                    }

                    item.x = x;
                    item.y = y;
                    drawCircle(x, y, radius, item.color, item.alpha);
                }
            }

            if (config.line.amount > 0 && config.line.layer > 0){
                fctx2.clearRect(0, 0, wWidth, wHeight);
                for (var j=0, len = lines.length; j<len; j++){
                    var item = lines[j],
                        x = item.x,
                        y = item.y,
                        width = item.width,
                        speed = item.speed;

                    if (x > wWidth + width * sin){
                        x = -width * sin;
                    } else if (x < -width * sin){
                        x = wWidth + width * sin;
                    } else {
                        x += sin*speed;
                    }

                    if (y > wHeight + width * cos){
                        y = -width * cos;
                    } else if (y < -width * cos){
                        y = wHeight + width * cos;
                    } else {
                        y -= cos*speed;
                    }

                    item.x = x;
                    item.y = y;
                    drawLine(x, y, width, item.color, item.alpha);
                }
            }

            timer = requestAnimationFrame(animate);
        };

        var createItem = function(){
            circles = [];
            lines = [];

            if (config.circle.amount > 0 && config.circle.layer > 0){
                for (var i=0; i<config.circle.amount/config.circle.layer; i++){
                    for (var j=0; j<config.circle.layer; j++){
                        circles.push({
                            x: M.random() * wWidth,
                            y: M.random() * wHeight,
                            radius: M.random()*(20+j*5)+(20+j*5),
                            color: config.circle.color,
                            alpha: M.random()*0.2+(config.circle.alpha-j*0.1),
                            speed: config.speed*(1+j*0.5)
                        });
                    }
                }
            }

            if (config.line.amount > 0 && config.line.layer > 0){
                for (var m=0; m<config.line.amount/config.line.layer; m++){
                    for (var n=0; n<config.line.layer; n++){
                        lines.push({
                            x: M.random() * wWidth,
                            y: M.random() * wHeight,
                            width: M.random()*(20+n*5)+(20+n*5),
                            color: config.line.color,
                            alpha: M.random()*0.2+(config.line.alpha-n*0.1),
                            speed: config.speed*(1+n*0.5)
                        });
                    }
                }
            }

            cancelAnimationFrame(timer);
            timer = requestAnimationFrame(animate);
            drawBack();
        };

        $(document).ready(function(){
            setCanvasHeight();
            createItem();
        });
        $(window).resize(function(){
            setCanvasHeight();
            createItem();
        });
    }
})(jQuery);






























