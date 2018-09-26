$(function() {

	$('.add-item').on('click', function(event) {
		  event.preventDefault();
      let listItem = $('.item-input').val();
		  let itemHtml = "<li><span class='item-check'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'></span></li>";
        $('.shopping-list').prepend(itemHtml);
        $('.item-input').val();
  });
// This code is executed when someone clicks the "X" button at the top right of the shopping-item
  
	$(".shopping-list").on('click', '.item-remove', function(event) {
      $('.item-remove').parent().remove()
;	});
// This code is executed when someone clicks the checkbox in the shopping-item section
  
	$(".shopping-list").on('click', '.item-check', function(event) {
// Use event.currentTarget to add and remove the "complete" class to the checkbox
    
$(event.currentTarget).toggleClass('complete');
    $(this).next().css('text-decoration', 'line-through')
  });


//Trying to figure out to fix bug in the progrqm. Hitting add item without entering text in the input still produces a box. Also trying to figure out to create a counter to let user know how many items they currently have
  if ($('.item-input').isEmptyObject({}) !== $('.item.input').val()) {
    return false;
  }
});