;( function( $ ) {
	"use strict";

	window.body = $('body');
	window._this = null;

	$.app = {
		
		initSandwich: function()
		{
			this.sandwich.init({
				keyHooks: !0,
				selector: '.js-sandwich-menu',
				wrapper: '.layout-wrapper',
				overlay: '#menu-overlay'
			});
		},

		initSelect: function()
		{
			$('select').selectbox();
		},

		initMask: function()
		{
			$(".js-date-watcher").mask("99/99/9999");
			$(".js-phone-watcher").mask("+ 7 (999) 999-99-99");
			$(".js-cartnumber-watcher").mask("999-999-999");
		},

		initPopup: function()
		{
			$.popup.init('.js-open-popup', {
				cssPosition: false,
				wrapper: '.layout-wrapper'
			});

			$('.open-popup-link').magnificPopup({
				type:'inline',
				midClick: true
			});
		},
		
		initMagnific: function()
		{ 
			$('.zoom').magnificPopup({
				type:'image',
				preloader: true,
				gallery: {
					enabled: true
				},
				zoom: {
					enabled: true,
					duration: 300,
					easing: 'ease-in-out',
					opener: function(openerElement) {
						return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				}
			 });
		},

		slickCarousel: function()
		{
			if ($('.js-carousel').length && $('.js-carousel').find('.slick-slide').length)
			{
				var count = 4, classname = 'carousel';

				$('.js-carousel').each(function(){
					count = 4;
					classname = 'carousel';

					if ($(this).data('viewcount'))
					{
						count = parseInt($(this).data('viewcount'));
					}

					if ($(this).data('classname'))
					{
						classname = $(this).data('classname');
					}

					$(this).slick({
						infinite: true,
						dots: false,
						draggable: true,
						speed: 170,
						slidesToShow: count,
						slidesToScroll: 1,
						prevArrow: '<button type="button" class="'+classname+'__navigation '+classname+'__navigation_prev slick-prev"></button>',
						nextArrow: '<button type="button" class="'+classname+'__navigation '+classname+'__navigation_next slick-next"></button>',
						responsive: [
							{
								breakpoint: 1024,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 3,
									infinite: true,
									dots: true
								}
							},
							{
								breakpoint: 600,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2
								}
							},
							{
								breakpoint: 480,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1
								}
							}
						]
					});
				});
			}
		},

		slickSider: function()
		{
			if ($('#slider').length > 0 && $('#slider').find('.slider__item').length > 1)
			{
				$('#slider').slick({
					infinite: true,
					dots: true,
					draggable: false,
					speed: 300,
					fade: true,
					autoplay: true,
					autoplaySpeed: 4500,
					pauseOnHover: false,
					cssEase: 'ease',
					prevArrow: '<button type="button" class="slider__navigation slider__navigation_prev slick-prev"></button>',
					nextArrow: '<button type="button" class="slider__navigation slider__navigation_next slick-next"></button>'
				});
			}
		},

		toggle: function()
		{
			var selector, block, target, button;

			$('.js-toggle-trigger').each(function(){
				if ($($(this).data('toggle')).length)
				{
					selector = $(this).data('toggle');
					button = $(this);
					block = $(selector);

					body.on('click', function(e){
						target = $(e.target);

						if (!target.closest(selector).length && !target.closest('.js-toggle-trigger').length && block.hasClass('active'))
						{
							button.removeClass('animate');
							block.removeClass('transform');

							setTimeout(function(){
								block.removeClass('active');
							}, 135);
						}
					});		
				}
			});

			body.on('click', '.js-toggle-trigger', function(e){
				e.preventDefault();

				if ($(this).data('toggle'))
				{
					block = $($(this).data('toggle'));
					button = $(this);

					if (block.length)
					{
						if (!block.hasClass('active'))
						{
							button.addClass('animate');
							block.addClass('active');

							setTimeout(function(){
								block.addClass('transform');
							}, 5);
						}
						else
						{
							button.removeClass('animate');
							block.removeClass('transform');

							setTimeout(function(){
								block.removeClass('active');
							}, 135);
						}
					}
					
				}

			});
		},
		
		hashJump: function()
		{
			if (window.location.hash)
			{
				var hash = window.location.hash.substr(1), jumpto = null;
				
				if ($('a[name="' +hash+ '"]').length)
				{
					jumpto = $('a[name="' +hash+ '"]').eq(0);
				}
				
				if ($('#' +hash).length)
				{
					jumpto = $('#' +hash).eq(0);
				}

				if (jumpto !== null)
				{
					$('html, body').stop().animate({ scrollTop: jumpto.offset().top }, 'fast');
				}
			}
		},

		updateImage: function()
		{
			body.on('click', '.js-update-image', function(e){
				e.preventDefault();
				$(this).find('img').attr('src', $(this).find('img').attr('src').split('?')[0] + '?u=' + Math.random());
			});
		},

		zoomit: function()
		{
			var wrapper, holder, image;

			body.on('click', '.js-zoom-image', function(e){
				
				e.preventDefault();

				image = $(this).attr('href');

				if ($(this).closest('.js-zoom-wrapper').length)
				{
					wrapper = $(this).closest('.js-zoom-wrapper');
					
					if (wrapper.find('.js-zoom-holder').length)
					{
						holder = wrapper.find('.js-zoom-holder');

						holder.html('');

						wrapper.find('.current').removeClass('current');


						holder.html('<img src="' + image + '" alt="">');

						$(this).addClass('current');
					}
				}

				return !1;
			});
		},

		hoverBind: function()
		{
			body.on('mouseenter', '.js-bind-hover', function(){
				$(this).addClass('hover');
			});

			body.on('mouseleave', '.js-bind-hover', function(){
				$(this).removeClass('hover');
			});
		},

		toggleClass: function()
		{
			body.on('click', '.js-toggle-class', function(e){
				var wrapper = $(this).closest('.js-toggle-wrapper');

				if (!$(this).hasClass('current'))
				{
					wrapper.find('.current').removeClass('current');
					$(this).addClass('current');
				}
			});
		},

		initViewer: function()
		{
			body.on('click', '.js-viewer-trigger', function(e){
				e.preventDefault();

				var viewer = $(this).closest('.js-viewer'),
					image = $(this).attr('href'),
					count = viewer.find('.js-viewer-count'),
					total = viewer.find('.js-viewer-total');

				viewer.find('.current').removeClass('current');
				viewer.find('.js-viewer-image').html('<img src="' + image + '" class="viewer__image__src" alt="">');

				$(this).addClass('current');
				
				return !1;
			});
		},

		init: function()
		{
			_this = this;

			this.slickCarousel();

			this.initPopup();

			this.initMask();
			this.initSelect();
			this.initSandwich();
			this.hoverBind();
			this.toggleClass();
			this.initViewer();
			this.initMagnific();
			// this.ajaxForm.init();

			// $.popup.open('ballot-1');
		}
		
	};

})( jQuery );