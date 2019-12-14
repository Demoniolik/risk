$(document).ready(function() {

	$('.popup-item').magnificPopup({
		type: 'inline',
		preloader: false
	});

});

function logoHide(){
  $('.container-logo').css('display', 'none');
  $('.content').css('display', 'block');

}
setTimeout(logoHide, 3000);


$("#menu .dropdown .item-head").click(function(e){
  e.preventDefault();
  $(this).parent("#menu .dropdown").toggleClass("active");
});


function getCheckedCheckBoxes() {
  var checkboxes = document.getElementsByClassName('checkbox');
  var checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать 
  for (var index = 0; index < checkboxes.length; index++) {
     if (checkboxes[index].checked) {
        checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
        alert(checkboxes[index].value); // делайте что нужно - это для наглядности
     }
  }
  return checkboxesChecked; // для использования в нужном месте
}