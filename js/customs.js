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

		
		$('.countDays').append('<p>дней</p>');
		$('.countHours').append('<p>часов</p>');
		$('.countMinutes').append('<p>минут</p>');
		$('.countSeconds').append('<p>секунд</p>');
	
	});