
function slidesPluggin(activeSlide = 0) {

	const slides = document.querySelectorAll('.slide');

	slides[activeSlide].classList.add('active');

	slides.forEach((slide) => slide.addEventListener('click', function () {

		slides.forEach((slide) => slide.classList.remove('active'));

		this.classList.add('active');
	}));
};

slidesPluggin(4);  //! по умолчанию, без аргументов - нулевая позиция активна





