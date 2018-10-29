window.addEventListener("DOMContentLoaded", function() {

	/* more btn */
	var allbtn = document.querySelectorAll(".review__more");

	[].forEach.call( allbtn, function (item) {
		item.addEventListener('click', function() {
			if (!item.parentNode.querySelector(".review__text").classList.contains("review__text_full")){
				item.parentNode.querySelector(".review__text").classList.add("review__text_full");
				item.classList.add("review__more_minus");
			}else{
				item.parentNode.querySelector(".review__text").classList.remove("review__text_full");
				item.classList.remove("review__more_minus");
			}
		});
	});

	$('.review-block').slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		arrows: true,
		speed: 500,
		variableWidth: true,
		centerMode: true
	});

});
