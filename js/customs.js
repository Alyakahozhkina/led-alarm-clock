// JavaScript Document
jQuery.noConflict();

	'use strict';	


	jQuery(document).ready(function($) {
			$('.header__burger').click(function(){
				$('.header__burger').toggleClass('open-menu');
				$('.nav-menu').toggleClass('open-menu');
				$('.header-box-text').toggleClass('open-menu');
				$('body').toggleClass('fixed-page');
			});




				// BUTTON-UP
			let button = $('#button-up');	
			$(window).scroll(function() {
				if ($(window).scrollTop() > 700) {
					button.addClass('show');
				} else {
					button.removeClass('show');
				}
			});	 
			button.on('click', function(){
			$('body, html').animate({
			scrollTop: 0
			}, 500);
			return false;
			});
		
			
		var note = $('#note'),
			ts = new Date(2021, 07, 10),
			newYear = true;
		
		if((new Date()) > ts){
			// The new year is here! Count towards something else.
			// Notice the *1000 at the end - time must be in milliseconds
			ts = (new Date()).getTime() + 10*24*60*60*1000;
			newYear = false;
		}
			
		$('#countdown').countdown({
			timestamp	: ts,
			callback	: function(days, hours, minutes, seconds){
				
				var message = "";
				
				message += days + " day" + ( days==1 ? '':'s' ) + ", ";
				message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
				message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
				message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
				
				if(newYear){
					message += "left until the new year!";
				}
				else {
					message += "left to 10 days from now!";
				}
				
				note.html(message);
			}
		});
		$('#countdown2').countdown({
			timestamp	: ts,
			callback	: function(days, hours, minutes, seconds){
				
				var message = "";
				
				message += days + " day" + ( days==1 ? '':'s' ) + ", ";
				message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
				message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
				message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
				
				if(newYear){
					message += "left until the new year!";
				}
				else {
					message += "left to 10 days from now!";
				}
				
				note.html(message);
			}
		});

		
		$('.countDays').append('<p>????????</p>');
		$('.countHours').append('<p>??????????</p>');
		$('.countMinutes').append('<p>??????????</p>');
		$('.countSeconds').append('<p>????????????</p>');
	
	});