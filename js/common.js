$(document).ready(function() {

	$(".popup").magnificPopup({
		removalDelay: 500,
		mainClass: 'mfp-move-from-top'
	});

	var touch = $('.touch-menu');
	var menu = $('.nav');
	
	$(touch).on('click', function(e) {
	    e.preventDefault();
	    menu.slideToggle();
	});
	$(window).resize(function(){
	    var wid = $(window).width();
	    if(wid > 760 && menu.is(':hidden')) {
	        menu.removeAttr('style');
	    }
	});

	var canvas = document.getElementById('canvas1')
	var ctx_1 = canvas.getContext('2d')

	ctx_1.canvas.width  = 150;
	ctx_1.canvas.height = 150;

	var myDoughnutChart = new Chart(ctx_1, {
	    type: 'doughnut',
	    data: {
		    datasets: [{
		    	backgroundColor: ['#f85c37', '#ecf0f1'],
		    	borderColor: ['#555', '#555'],
		    	borderWidth: [1, 1],
		    	hoverBackgroundColor: ['#f85c37', '#ecf0f1'],
		    	hoverBorderColor: ['#555', '#555'],
		    	data: [70, 30]
	    	}]
	    },
	    options: {
	    	cutoutPercentage: 90,
	    	responsive: false,
	    	animation: {
	    		duration: 900,
	    		easing: 'easeOutBounce'
	    	}
	    }
	});

	var ctx_2 = document.getElementById('canvas2').getContext('2d')

	ctx_2.canvas.width  = 150;
	ctx_2.canvas.height = 150;

	var myDoughnutChart = new Chart(ctx_2, {
	    type: 'doughnut',
	    data: {
		    datasets: [{
		    	backgroundColor: ['#f85c37', '#ecf0f1'],
		    	borderColor: ['#555', '#555'],
		    	borderWidth: [1, 1],
		    	hoverBackgroundColor: ['#f85c37', '#ecf0f1'],
		    	hoverBorderColor: ['#555', '#555'],
		    	data: [90, 10]
	    	}]
	    },
	    options: {
	    	cutoutPercentage: 90,
	    	responsive: false,
	    	animation: {
	    		duration: 900,
	    		easing: 'easeOutBounce'
	    	}
	    }
	});

	var ctx_3 = document.getElementById('canvas3').getContext('2d')

	ctx_3.canvas.width  = 150;
	ctx_3.canvas.height = 150;

	var myDoughnutChart = new Chart(ctx_3, {
	    type: 'doughnut',
	    data: {
		    datasets: [{
		    	backgroundColor: ['#f85c37', '#ecf0f1'],
		    	borderColor: ['#555', '#555'],
		    	borderWidth: [1, 1],
		    	hoverBackgroundColor: ['#f85c37', '#ecf0f1'],
		    	hoverBorderColor: ['#555', '#555'],
		    	data: [55, 45]
	    	}]
	    },
	    options: {
	    	cutoutPercentage: 90,
	    	responsive: false,
	    	animation: {
	    		duration: 900,
	    		easing: 'easeOutBounce'
	    	}
	    }
	});

	var ctx_4 = document.getElementById('canvas4').getContext('2d')

	ctx_4.canvas.width  = 150;
	ctx_4.canvas.height = 150;


	var myDoughnutChart = new Chart(ctx_4, {
	    type: 'doughnut',
	    data: {
		    datasets: [{
		    	backgroundColor: ['#f85c37', '#ecf0f1'],
		    	borderColor: ['#555', '#555'],
		    	borderWidth: [1, 1],
		    	hoverBackgroundColor: ['#f85c37', '#ecf0f1'],
		    	hoverBorderColor: ['#555', '#555'],
		    	data: [55, 45]
	    	}]
	    },
	    options: {
	    	cutoutPercentage: 90,
	    	responsive: false,
	    	animation: {
	    		duration: 900,
	    		easing: 'easeOutBounce'
	    	}
	    }
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});