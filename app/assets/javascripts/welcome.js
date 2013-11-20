$(document).ready(function() {
  console.log("above opn");
  $("#nav").onePageNav({
	    currentClass: 'current',
	    changeHash: false,
	    scrollSpeed: 750,
	    scrollOffset: 30,
	    scrollThreshold: 0.5,
	    filter: '',
	    easing: 'swing',
	    begin: function() {
  },
		end: function() {},
		scrollChange: function($currentListItem) { }	
  });
});
