
import Swiper from 'swiper';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import "../../scss/base/swiper.scss";
//Полный набор стилей с scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
//Полный набор стилей с node_modules
// import 'swiper/css';

function initSliders() {
	if (document.querySelector('.appartaments__slider')) { //Указываем класс нужного слайдера
		new Swiper('.appartaments__slider', { //Указываем класс нужного слайдера
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			
			pagination: {
				el: '.appartaments__pagination',
				clickable: true,
			},
		});
	}

	if (document.querySelector('.inclub__slider')) { //Указываем класс нужного слайдера
		new Swiper('.inclub__slider', { //Указываем класс нужного слайдера
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.inclub__pagination',
				clickable: true,
			},
		});
	}

	if (document.querySelector('.galery__slider')) { //Указываем класс нужного слайдера
		new Swiper('.galery__slider', { //Указываем класс нужного слайдера
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.galery__pagination',
				clickable: true,
			},
			
		});
	}
	
	if (document.querySelector('.reviews__slider')) { //Указываем класс нужного слайдера
		new Swiper('.reviews__slider', { //Указываем класс нужного слайдера
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			
			//autoHeight: true,
			speed: 800,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.reviews__pagination',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView:1.2,
					spaceBetween:10,
					centeredSlides: true,
				},
				768: {
					slidesPerView:2,
					spaceBetween: 30,
					speed: 1000,
					slidesPerGroup:2,
				}
			}
		});
	}

	if (document.querySelector('.gastronom__slider')) { //Указываем класс нужного слайдера
		new Swiper('.gastronom__slider', { //Указываем класс нужного слайдера
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.gastronom__pagination',
				clickable: true,
			},
		});
	}

	if (document.querySelector('.description__slider')) { //Указываем класс нужного слайдера
		new Swiper('.description__slider', { //Указываем класс нужного слайдера
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			speed: 800,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.description__pagination',
				clickable: true,
			},
		});
	}

}
//Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	//Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});