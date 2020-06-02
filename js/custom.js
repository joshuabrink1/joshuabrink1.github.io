	//Background
	var backgrounds = [
		'./images/bg1.jpg',
		'./images/bg2.jpg',
		'./images/bg3.jpg',
		'./images/bg4.jpg'
	  ];


	  var images = new Array()
	  function preload() {
		  for (var i = 0; i < preload.arguments.length; i++) {
			  images[i] = new Image()
			  images[i].src = preload.arguments[i]
		  }
	  }
	//   preload(
	// 	'../../images/bg1.jpg',
	// 	'../../images/bg2.jpg',
	// 	'../../images/bg3.jpg',
	// 	'../../images/bg4-d.jpg'
	//   ) 
	preload('./images/bg2.jpg');
		
	var imgIdx = 0;
	function swapBackgrounds() {
		$(this).addClass('change').attr('data-content','bar');
		if(++imgIdx >= backgrounds.length) {

			imgIdx = 0;
		} else {
			preload(backgrounds[imgIdx])
		}
		$bg.animate({ opacity: 0.9}, 2000, function() {
			
			$bg.css("background-image", "url('" + backgrounds[imgIdx] + "')").animate({opacity: 1},2000);
		});
	}


 setInterval(swapBackgrounds, 10000);

//  'use strict';

// function Tabs() {
//   var bindAll = function() {
//     var menuElements = document.querySelectorAll('[data-tab]');
//     for(var i = 0; i < menuElements.length ; i++) {
//       menuElements[i].addEventListener('click', change, false);
//     }
//   }

//   var clear = function() {
//     var menuElements = document.querySelectorAll('[data-tab]');
//     for(var i = 0; i < menuElements.length ; i++) {
//       menuElements[i].classList.remove('active');
//       var id = menuElements[i].getAttribute('data-tab');
//       document.getElementById(id).classList.remove('active');
//     }
//   }

//   var change = function(e) {
//     clear();
//     e.target.classList.add('active');
//     var id = e.currentTarget.getAttribute('data-tab');
//     document.getElementById(id).classList.add('active');
//   }

//   bindAll();
// }

// var connectTabs = new Tabs();

     //Switch Image

	 
	 $('#wp').on({
		'click': function(){
            $("#switchContainer img").addClass("transparent");
            $("#switchContainer img#wpImage").removeClass("transparent");

            $('#switchContainer button').removeClass("bolded");
			$('#wp').addClass("bolded");
			$('.switch.description').fadeOut(function() {
				$(this).text("We supply a 300g/m² paper-backed vinyl wallpaper. A specially formulated acrylic lacquer topcoat to ensure even ink saturation and extremely strong ink adhesion across the width of the product.")
				.fadeIn();
			  });
		}
	});
	$('#vin').on({
		'click': function(){
            $("#switchContainer img").addClass("transparent");
			$("#switchContainer img#vinImage").removeClass("transparent");

            $('#switchContainer button').removeClass("bolded");
            $('#vin').addClass("bolded");
			$('.switch.description').fadeOut(function() {
				$(this).text("The Printing Specialist provides a 215 micron, White, Structured matt self-adhesive vinyl with a High tack Clear adhesive. For indoor and short outdoor applications on non-corrugated surfaces.")
				.fadeIn();
			  });
		}
	});
	$('#cont').on({
		'click': function(){
            $("#switchContainer img").addClass("transparent");
			$("#switchContainer img#contImage").removeClass("transparent");
            $("#switchContainer #swap").removeClass("transparent");

            $('#switchContainer button').removeClass("bolded");
			$('#cont').addClass('bolded');

			$('.switch.description').fadeOut(function() {
				$(this).text("Contra-vision, also known as one-way vision is a special vinyl that when applied to the outside of the window you would be able to see in but not out. However the one down side to this material is that it does not work well at night if there is more light on the inside than the outside.")
				.fadeIn();
			  });
		}
	});

	var clicks = 0;
	$('#swap').on({
		'click': function(){
            
            if($('#cont').hasClass('bolded')) {
                $("#switchContainer img#contImage").toggleClass("transparent");
                $("#switchContainer img#contImage2").toggleClass("transparent");
            }
            else if ($('#wp').hasClass('bolded')) {
                $("#switchContainer img#wpImage").toggleClass("transparent");
                $("#switchContainer img#wpImage2").toggleClass("transparent");
            }
            else {
                $("#switchContainer img#vinImage").toggleClass("transparent");
                $("#switchContainer img#vinImage2").toggleClass("transparent");
            }


            // $('#switchContainer button').removeClass("bolded");
			// $('#cont').addClass('bolded');

			// $('#conView').fadeOut(function() {
			// 	if(clicks % 2 == 0) {
			// 		$(this).text("Outside")
			// 		.fadeIn();

			// 	}
			// 	else {
			// 		$(this).text("Inside")
			// 		.fadeIn();	
			// 	}
			// 	clicks ++;
			//   });
		}
	});

	$('#vinView').on({
		'click': function(){
            $("#switchContainer img").addClass("transparent");
            $("#switchContainer #swap").addClass("transparent");
            $("#switchContainer img#vinyl-decal").removeClass("transparent");

            $('#switchContainer button').removeClass("bolded");
			$('#vinView').addClass("bolded");
            
			$('.switch.description').fadeOut(function() {
				$(this).text("Lettering or graphics are cut to a shape or design, and are ready to apply be applied to any smooth. Vinyl lettering is different to printed stickers because of the fact that vinyl lettering is cut out of a roll of vinyl, the excess is weeded and the remaining cut letters are pre-spaced and are held together using a temporary transfer tape.")
				.fadeIn();
				});	

		}
	});
