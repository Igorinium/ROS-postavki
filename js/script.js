$(function () {
	$('header details').on('mouseover', function () {
		$(this).attr('open', true);
	}).on('mouseout', function () {
		$(this).attr('open', false);
	})
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

$('document').ready(function () {
	loadGoods();
});
function loadGoods() {
	$.getJSON('goods.json', function (data) {
		var out = '';
		for (var key in data) {
			out += '<div class="buy__products-wrapper">';
			out += '<a href="#" class="buy__products-item">';
			out += '<img src="' + data[key].image + '" alt="">';
			out += '<p class="buy__products-name">' + data[key]['name'] + '</p>';
			out += '<div class="space-for-text">';
			out += '<h4>' + data[key]['description'] + '</h4>';
			out += '<p class="articul">Артикул: ' + data[key]['articul'] + '</p>';
			out += '</div>';
			out += '<div class="buy-product-price">' + data[key]['cost'] + '</div>';
			out += '</a>';
			out += '<div class="buy__buttons">';
			out += '<div class="in-cart">В корзину</div>';
			out += '<div class="like"> <img src="img/svg/like.svg" alt=""></div>';
			out += '</div>';
			out += '</div>';
		}
		$('#goods').html(out);
	})
}