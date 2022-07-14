$('.lend-kinds__block').on({
    mouseenter: function () {
        $(this).find('.lend-kinds__descr').stop().slideDown();
    },
    mouseleave: function () {
        $(this).find('.lend-kinds__descr').stop().slideUp();
    }
});



$(".lend-service__slider").slick({
    slide: ".lend-service__block",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    prevArrow: ".lend-service__prev1",
    nextArrow: ".lend-service__next1",
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
});

let counter = document.querySelectorAll('.counter');
let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
window.addEventListener('scroll', function () {
    if (limit == counter.length) { return; }

    for (let i = 0; i < counter.length; i++) {
        console.log(1);
        let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
        let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
        if (pos < win && counter[i].dataset.stop === "0") {
            counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
            let x = 0;
            limit++; // Счетчик будет запущен, увеличиваем переменную на 1
            let int = setInterval(function () {
                // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
                x = x + Math.ceil(counter[i].dataset.to / 25);
                counter[i].innerText = x.toLocaleString();
                if (x > counter[i].dataset.to) {
                    //Как только досчитали - стираем интервал.
                    counter[i].innerText = (counter[i].dataset.to / 1).toLocaleString();
                    clearInterval(int);
                }
            }, 30);
        }
    }
});
if (screen.width >= 992) {
    let bg = $('.lend-main1');
    let bg2 = $('.lend-main2');
    let bg3 = $('.lend-main3');
    let bg4 = $('.lend-main4');
    let bg5 = $('.lend-main5');
    let bg6 = $('.lend-main6');

    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.css('transform', 'translate(-' + x * 30 + 'px, ' + y * 30 + 'px)');
        bg2.css('transform', 'translate(' + x * 20 + 'px, -' + y * 20 + 'px)');
        bg3.css('transform', 'translate(-' + x * 60 + 'px, ' + y * 60 + 'px)');
        bg4.css('transform', 'translate(' + x * 30 + 'px, -' + y * 30 + 'px)');
        bg5.css('transform', 'translate(-' + x * 50 + 'px, ' + y * 50 + 'px)');
        bg6.css('transform', 'translate(' + x * 10 + 'px, -' + y * 10 + 'px)');
    });
}
if (screen.width <= 767) {
    $(".lend-brands__wrap").slick({
        slide: ".lend-brands__block",
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        prevArrow: ".lend-brands__prev",
        nextArrow: ".lend-brands__next"
    });
    $('.lend-types__img .price-keyboard').css('fill', '#2CB6BF');
    $('.lend-types__drop').on('click', function () {
        $(this).toggleClass('active');
        $('.lend-types__list').toggle();
    });
    $('.lend-types__list a').on('click', function (e) {
        e.preventDefault();
        $('.lend-types__drop').toggleClass('active');
        $('.lend-types__list').toggle();
        $('.lend-types__drop span').html($(this).text());

        $('.lend-types__img .korp').css('fill', '#fff');
        $('.lend-types__img .korp-w').css('fill', '#fff');
        $('.lend-types__img .price-keyboard').css('fill', '#fff');
        $('.lend-types__img .butt').css('fill', '#fff');
        $('.lend-types__img .raz').css('fill', '#fff');
        $('.lend-types__img .screen').css('fill', '#fff');
        $('.lend-types__img .mat').css('stroke', '#fff');
        $('.lend-types__img ellipse.mat').css('fill', '#fff');
        $('.lend-types__img .mat').css('stroke', '#fff');
        $('.lend-types__img ellipse.mat').css('fill', '#fff');
    });
    $('.lend-types__list a.price-keyboard').on('click', function () {
        $('.lend-types__img .price-keyboard').css('fill', '#2CB6BF');
    });
    $('.lend-types__list a.korp').on('click', function () {
        $('.lend-types__img .korp').css('fill', '#2CB6BF');
        $('.lend-types__img .korp-w').css('fill', '#fff');
    });
    $('.lend-types__list a.butt').on('click', function () {
        $('.lend-types__img .butt').css('fill', '#2CB6BF');
    });

    $('.lend-types__list a.raz').on('click', function () {
        $('.lend-types__img .raz').css('fill', '#2CB6BF');
    });
    $('.lend-types__list a.screen').on('click', function () {
        $('.lend-types__img .screen').css('fill', '#2CB6BF');
        $('.lend-types__img .mat').css('stroke', '#2CB6BF');
        $('.lend-types__img ellipse.mat').css('fill', '#2CB6BF');
    });
    $('.lend-types__list a.mat').on('click', function () {
        $('.lend-types__img .mat').css('stroke', '#2CB6BF');
        $('.lend-types__img ellipse.mat').css('fill', '#2CB6BF');
    });

} else {
    $('.lend-types__list a.korp').on({
        mouseenter: function () {
            $('.lend-types__img .korp').css('fill', '#2CB6BF');
            $('.lend-types__img .korp-w').css('fill', '#fff');
            $('.lend-types__arrow2').css('display', 'flex');
        },
        mouseleave: function () {
            $('.lend-types__img .korp').css('fill', '#fff');
            $('.lend-types__img .korp-w').css('fill', '#fff');
            $('.lend-types__arrow2').css('display', 'none');
        }
    });
    $('.lend-types__list a.price-keyboard').on({
        mouseenter: function () {
            $('.lend-types__img .price-keyboard').css('fill', '#2CB6BF');
            $('.lend-types__arrow5').css('display', 'flex');
        },
        mouseleave: function () {
            $('.lend-types__img .price-keyboard').css('fill', '#fff');
            $('.lend-types__arrow5').css('display', 'none');
        }
    });
    $('.lend-types__list a.butt').on({
        mouseenter: function () {
            $('.lend-types__img .butt').css('fill', '#2CB6BF');
            $('.lend-types__arrow4').css('display', 'flex');
        },
        mouseleave: function () {
            $('.lend-types__img .butt').css('fill', '#fff');
            $('.lend-types__arrow4').css('display', 'none');
        }
    });
    $('.lend-types__list a.raz').on({
        mouseenter: function () {
            $('.lend-types__img .raz').css('fill', '#2CB6BF');
            $('.lend-types__arrow6').css('display', 'flex');
        },
        mouseleave: function () {
            $('.lend-types__img .raz').css('fill', '#fff');
            $('.lend-types__arrow6').css('display', 'none');
        }
    });
    $('.lend-types__list a.screen').on({
        mouseenter: function () {
            $('.lend-types__img .screen').css('fill', '#2CB6BF');
            $('.lend-types__img .mat').css('stroke', '#2CB6BF');
            $('.lend-types__img ellipse.mat').css('fill', '#2CB6BF');
            $('.lend-types__arrow3').css('display', 'flex');
        },
        mouseleave: function () {
            $('.lend-types__img .screen').css('fill', '#fff');
            $('.lend-types__img .mat').css('stroke', '#fff');
            $('.lend-types__img ellipse.mat').css('fill', '#fff');
            $('.lend-types__arrow3').css('display', 'none');
        }
    });
    $('.lend-types__list a.mat').on({
        mouseenter: function () {
            $('.lend-types__img .mat').css('stroke', '#2CB6BF');
            $('.lend-types__img ellipse.mat').css('fill', '#2CB6BF');
            $('.lend-types__arrow7').css('display', 'flex');
        },
        mouseleave: function () {
            $('.lend-types__img .mat').css('stroke', '#fff');
            $('.lend-types__img ellipse.mat').css('fill', '#fff');
            $('.lend-types__arrow7').css('display', 'none');
        }
    });
    $('.lend-types__list a.head').on({
        mouseenter: function () {
            $('.lend-types__arrow1').css('display', 'flex');
        },
        mouseleave: function () {
            $('.lend-types__arrow1').css('display', 'none');
        }
    });
}