$(function () {
	$('header details').on('mouseover', function () {
		$(this).attr('open', true);
	}).on('mouseout', function () {
		$(this).attr('open', false);
	})
});

//открываем корзину
$(document).ready(function () {
	$('.header__cart').click(function (event) {
		$('.cart-content').toggleClass('active');
		if ($('.like-content').hasClass('active')) {
			$('.like-content').toggleClass('active');
		}
	});
});

//Открываем лайк
$(document).ready(function () {
	$('.header__like').click(function (event) {
		$('.like-content').toggleClass('active');
		if ($('.cart-content').hasClass('active')) {
			$('.cart-content').toggleClass('active');
		}
	});
});

$(document).ready(function () {
	$('.img-scale').click(function (event) {
		$('<div class="img-scaling"></div>').appendTo('.wrapper');
		$(this).clone().appendTo('.img-scaling');
	});
	$('body').on('click', '.img-scaling', function (event) {
		$(this).remove();
	});
});

function onToggle(event) {
	if (event.target.open) {
		document.querySelectorAll(".buy__dropdown-menues > .buy__dropdown-menu[open]").forEach((el) => {
			// Исключаем из перебора елемент который мы только что открыли
			if (el === event.target) {
				return;
			}
			// Закрываем все остальные елементы <details>
			el.open = false;
		});
	}
}
document
	.querySelectorAll(".buy__dropdown-menues > .buy__dropdown-menu")
	.forEach((el) => el.addEventListener("toggle", onToggle))

let myImageSlider = new Swiper('.image-slider', {
	// Стрелки
	navigation: {
		nextEl: '._about__slider-button-next',
		prevEl: '._about__slider-button-prev'
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	loop: true,

});

let myBlogImageSlider = new Swiper('.blog-image-slider', {

	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.blog-swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	loop: true,
	slidesPerView: 2,
	spaceBetween: 20,
});

let mySertificatesSlider = new Swiper('.sertificates-slider', {
	navigation: {
		nextEl: '._sertificates__slider-button-next',
		prevEl: '._sertificates__slider-button-prev'
	},
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	loop: true,
	slidesPerView: 5,
	spaceBetween: 20,
});
