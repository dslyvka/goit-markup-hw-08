$(document).ready(function () {
  $('#anchor').on('click', 'a', function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1000);
  });
});
