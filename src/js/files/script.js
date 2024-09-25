// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Подключение галереи Fancybox
Fancybox.bind('[data-fancybox]', {
	//
});
import daterangepicker from 'daterangepicker'

window.addEventListener("DOMContentLoaded", () => {
	document.addEventListener("click", documentActions);
	let flag = true;
	let flag2 = true;
	function documentActions (e) {
		const targetElement = e.target;
		console.log(targetElement);

		//закрытие бургера вне клика по нему
		if (
			!targetElement.closest('.menсu__icon') &&
			!targetElement.closest('.menu__body') &&
			flag == true
		) {
			flag = false;
		} else if (
			!targetElement.closest('.menсu__icon') &&
			!targetElement.closest('.menu__body') &&
			flag == false
		) {
			flag = true;
			document.querySelector('.menu-open')
				? document.documentElement.classList.remove('lock')
				: null;
			document.querySelector('.menu-open')
				? document.documentElement.classList.remove('menu-open')
				: null;
		}

		// Открытие сабменю

		if (document.querySelector('.menu-open') && targetElement.closest(".menu__item") && targetElement.closest("header") && !targetElement.closest(".menu__item").classList.contains("_menu__item-active")) {
			
			const menuItemMobile = targetElement.closest('.menu__list').querySelectorAll('.menu__item')
			menuItemMobile.forEach(element => {
				element.classList.remove('_menu__item-active')
			});
			const sublistMobile = targetElement.closest('.menu__list').querySelectorAll('.menu__sublist')
			sublistMobile.forEach(element => {
				element.classList.remove("_sub-menu-open")
			});
			targetElement.closest(".menu__item").classList.add("_menu__item-active");
			targetElement.closest(".menu__item").querySelector(".menu__sublist") ? targetElement.closest(".menu__item").querySelector(".menu__sublist").classList.add("_sub-menu-open") : null;
		} else if (targetElement.closest(".menu__item") &&
			targetElement.closest("header") &&
			targetElement.closest(".menu__item").classList.contains("_menu__item-active") && 
			!targetElement.closest('.sublist-menu__link')) {
				console.log(2);
				
			targetElement.closest(".menu__item").classList.remove("_menu__item-active");
			targetElement.closest(".menu__item").querySelector(".menu__sublist").classList.remove("_sub-menu-open")
		}
		//Установка количества проживающих по клику на кнопку "Готово"
		if (targetElement.closest('.quantity-banner__body')) {
			targetElement.closest('.quantity-banner').classList.toggle('_active-dialog')
		}

		if (targetElement.closest('.dialog__button')) {
			let quantityAdult = document.querySelector('.quantity-banner__adult')
			let quantityChildren = document.querySelector('.quantity-banner__children')
			quantityAdult.innerText = document.querySelector('.input-q-a').value
			quantityChildren.innerText = document.querySelector('.input-q-c').value
			targetElement.closest('.quantity-banner').classList.remove('_active-dialog')
		}

		//Закрытие этого окна вне клика по окну
		if (!targetElement.closest('.dialog') && !targetElement.closest('.quantity-banner') && flag2 && document.querySelector('._active-dialog')) {
			document.querySelector('.quantity-banner').classList.remove('_active-dialog')
		}

	
	}

	//Убрал тень у банера, если стандартный фон и нет формы.
	const wrapper = document.querySelector('.banner__content')
	if (!wrapper.classList.contains('banner__form') && document.querySelector('.header-temnyy')) {
		wrapper.style.boxShadow = 'none'
	}
})

	// По календарю
	const checkIn = document.querySelectorAll('.check-in');
	const checkOut = document.querySelectorAll('.check-out');
	const monthnames = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    const banner = document.querySelector('.banner') 
    const checkInDateElement = banner.querySelector('.check-in');
    const checkOutDateElement = banner.querySelector('.check-out');
    const checkInInputElement = banner.querySelector('input[name="check-in"]');
    const checkOutInputElement = banner.querySelector('input[name="exit"]');
    const dateRangePickerElements = banner.querySelectorAll('.item-banner__img');
    
	 checkIn.forEach(element => {
		element.innerHTML = `${new Date().getUTCDate()}.${monthnames[new Date().getUTCMonth()]}.${new Date().getUTCFullYear()}`;
	 });
	 checkOut.forEach(element => {
		element.innerHTML = `${new Date().getUTCDate() + 3}.${monthnames[new Date().getUTCMonth()]}.${new Date().getUTCFullYear()}`;
	 });
	 // Функция для обновления дат и полей ввода
    function updateDates(start, end) {
        checkInDateElement.textContent = start.format('DD.MM.YYYY');
        checkOutDateElement.textContent = end.format('DD.MM.YYYY');
        checkInInputElement.value = start.format('DD.MM.YYYY');
        checkOutInputElement.value = end.format('DD.MM.YYYY');
      }
  
    // Инициализация daterangepicker
    dateRangePickerElements.forEach(function(pickerElement) {
      new daterangepicker(pickerElement, {
        autoUpdateInput: false, // Не обновлять поля ввода автоматически
        locale: {
			  format: 'DD.MM.YYYY',
			  separator: ' - ',
			  applyLabel: 'Применить',
			  cancelLabel: 'Отмена',
			  fromLabel: 'С',
			  toLabel: 'По',
			  weekLabel: 'Нед',
			  customRangeLabel: 'Настройка',
			  monthNames: [
				  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
				  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
				],
				daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
				firstDay: 1 
			},
			endDate:  `${new Date().getDate() + 3}`,
      }, function(start, end, label) {
			updateDates(start, end);
      });
	});
	//  const elem = document.createElement('div')
	//  let bottom = document.querySelector("body > div:nth-child(3) > div.drp-buttons");
	//  elem.setAttribute('class', 'custom');
	//  elem.innerHTML = `
	//  <span class="custom__bold">Заезд</span>
	
	//  `
	//  bottom.prepend(elem);
	//  bottom.innerHTML = '<div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn btn btn-sm btn-default" type="button">Отмена</button><button class="applyBtn btn btn-sm btn-primary" type="button">Применить</button> </div>'
    // Обработчик клика по изображению календаря
    dateRangePickerElements.forEach(function(pickerElement) {
      pickerElement.addEventListener('click', function() {
      //   this.previousElementSibling.click(); // Активируем клик по скрытому полю ввода
        document.querySelector('input[type="hidden"]').click(); // Активируем клик по скрытому полю ввода
      });
    });

