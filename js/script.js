$(function () {
	/*advanced menu*/

	var $linkAdv = $('.menu__advanced__item').find('a');

	$linkAdv.on('click', function (e) {
		e.preventDefault();

		$('.menu__advanced__item').removeClass('menu__advanced__item_active');
		$(this).closest('.menu__advanced__item').toggleClass('menu__advanced__item_active');
	});
});