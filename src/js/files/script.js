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
	var idItemListLk;
	document.addEventListener("click", documentActions);

	function documentActions (e) {
		const targetElement = e.target;
		console.log(targetElement);

		if (targetElement.closest('.quantity-banner')) {
			targetElement.closest('.quantity-banner').classList.add('_active-dialog')
		}

		if (targetElement.closest('.dialog__button')) {
			let quantityAdult = document.querySelector('.quantity-banner__adult')
			let quantityChildren = document.querySelector('.quantity-banner__children')
			quantityAdult.innerText = document.querySelector('.input-q-a').value
			quantityChildren.innerText = document.querySelector('.input-q-c').value
			targetElement.closest('.quantity-banner').classList.remove('_active-dialog')
		}
	}
})
// export function dataPickFn(){
    const banner = document.querySelector('.banner') 
    const checkInDateElement = banner.querySelector('.check-in');
    const checkOutDateElement = banner.querySelector('.check-out');
    const checkInInputElement = banner.querySelector('input[name="check-in"]');
    const checkOutInputElement = banner.querySelector('input[name="exit"]');
    const dateRangePickerElements = banner.querySelectorAll('.item-banner__img');
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
	  }
      }, function(start, end, label) {
        updateDates(start, end);
      });
    });
  
    // Обработчик клика по изображению календаря
    dateRangePickerElements.forEach(function(pickerElement) {
      pickerElement.addEventListener('click', function() {
        this.previousElementSibling.click(); // Активируем клик по скрытому полю ввода
      });
    });
// }

