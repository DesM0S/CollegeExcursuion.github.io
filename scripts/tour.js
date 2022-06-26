//слайды
let slides = document.querySelectorAll('.tour-slide')

// определение на какой слайд нужно переключиться
let tourButtonWhere = 0

// переход по слайдам -- вперед
let tourButtonNext = document.querySelectorAll('.tour-btn')
openResult(tourButtonNext)

//переход по слайдам -- назад
let tourButtonBack = document.querySelectorAll('.tour-btn--back')
openResult(tourButtonBack)

let tourInfo = document.querySelectorAll('.tour-btn-info')
openResult(tourInfo)

//переход по слайдам
function openResult(e) {
	e.forEach(e => {
		e.addEventListener('click', () => {
			let a = e.dataset.tourInfoSlide
			tourButtonWhere = e.dataset.toutWhere

			slides.forEach(e => {
				if (e.dataset.tourSlide === tourButtonWhere) {
					e.classList.add('tour-slide--active')

				} else if (e.dataset.tourSlide === a) {
					let element = e.querySelector('.tour-info-modal')
					element.classList.toggle('tour-info-modal--active')

				} else {
					e.classList.remove('tour-slide--active')
				}
			})
		})
	})
}


// let ff = document.querySelectorAll('.tour-info-modal')
// document.addEventListener('click', (e) => {
	
// 	if(!e.target.classList.contains('.tour-info-modal--active')){
// 		console.log(!e.target.classList.contains('tour-info-modal--active'))
		
// 	} else{
// 		console.log(e.target)
// 		ff.forEach(e => {
// 			e.classList.remove('tour-info-modal--active')
// 		})
// 	}
// })


// window.addEventListener('click', e => { // при клике в любом месте окна браузера
// 	const target = e.target // находим элемент, на котором был клик
// 	if (!target.closest('.tour-info-modal--active')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
// 		document.querySelector('.tour-info-modal--active').classList.remove('tour-info-modal--active') // то закрываем окно навигации, удаляя активный класс
// 	}
// })
// document.addEventListener('click', function(e) {
// 	console.log(e.target.class)
//   if (e.target.class != document.querySelector('.tour-info-modal')) {
// 		console.log('ss')
//     // block.classList.add('hide');
//   }
// });