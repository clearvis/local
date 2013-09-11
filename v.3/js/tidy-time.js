jQuery(document).ready(function($) {
	

	var tidyTime = $('.tidyTime');
		tidyTime.tidyTime({
				before:'Hey Tammy! It\'s ',
				after:' and 3 of your friends shared this on Twitter'
			});
		
		setInterval(function(){
		
			tidyTime.tidyTime({
				before:'Hey Tammy! It\'s ',
				after:' and 3 of your friends shared this on Twitter'
			});
		
		},30000);



});