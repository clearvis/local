var CARDBACK = {
	current: null,
	delay: 600,
	timer: null,
	setDialogs: function () {
		var screenWidth =  $('.card-wall-medium').width(),
			screenBottom = $('.card-wall-medium').scrollTop() + $('.card-wall-medium').height();	
		
		$('.wall-card-medium_back').parent().hover(function(){
			// store the dialog being hovered
			CARDBACK.current = $(this);
			CARDBACK.timer = setTimeout(function(){
				// find the dialog, 
				CARDBACK.current.find(".wall-card-medium_back").fadeIn('fast');
			}, CARDBACK.delay);
		}, function(){
			// on mouseout, clear timer and hide dialog
			clearTimeout(CARDBACK.timer);
			$(this).find(".wall-card-medium_back").fadeOut('fast');
		})//.attr("title", ""); // clear the title to stop browser tooltips
		
		$(".wall-card-medium_back").each(function() { // grab the containing element
			var container = $(this).parent(),
				top = 0,//container.height(), // default placement
				totalHeight = top + $(this).outerHeight(),
				width = $(this).outerWidth(),
				offset = container.offset(),
				left = 0;

			// give it relative position if required
			if (container.css('position') != 'absolute' && container.css('position') != 'fixed') {
				container.css({position: 'relative'});
			}

			// re-position if it's off the right of the screen
			if (offset.left + ( width * 2 ) > screenWidth) {
				left = -36;
				//console.log(screenWidth);
				//$(this).addClass('left');
			}
			else {
				//$(this).removeClass('left');
				left = 0;
			}
			
			// re-position if it's off the bottom of the screen
			if (offset.top + ( totalHeight / 2 ) > screenBottom) {
				top = 0 - $(this).outerHeight();
				//$(this).addClass('above');
			} 
			else {
				//$(this).removeClass('above');
				top = 0;
			}

			// finally set the css properties to position onscreen
			$(this).css({
				"top": top,
				"left": left
			});
		});
	}
}

 
// A $( document ).ready() block.
//$( document ).ready(function() {
	CARDBACK.setDialogs();
	console.log('Document is ready');
//});
	
$(window).ready(function() {
	CARDBACK.setDialogs();
	console.log('Window is ready');
});

$(window).resize(function(){
	CARDBACK.setDialogs();
	console.log('Window is resized');
});
