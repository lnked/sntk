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

		initSelect: function(group)
		{
			if (typeof(group) == 'undefined')
			{
				$('select').not('.is-system').selectbox();
			}
			else
			{
				group.find('select').not('.is-system').selectbox();
			}
		},

		initMask: function()
		{
			$(".js-date-watcher").mask("99/99/9999");
			$(".js-inn-watcher").mask("999999999999");
			$(".js-phone-watcher").mask("+ 7 (999) 999-99-99");
			$(".js-cartnumber-watcher").mask("999-999-999");
		},

		initPopup: function()
		{
			$.popup.init('.js-open-popup', {
				wrapper: '.layout-wrapper',
				cssPosition: true
			});

			$('.open-popup-link').magnificPopup({
				type:'inline', midClick: true
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

		slickSlider: function()
		{
			if ($('.js-slider').length && $('.js-slider').find('.slick-slide').length)
			{
				var count = 4, classname = 'slider', width = $(window).width(), timeout;

				$('.js-slider').find('.slick-slide').css({
					'width': width + 'px'
				});

				$(window).on('resize', function(){
					clearTimeout(timeout);

					timeout = setTimeout(function(){
						width = $(window).width();
						
						$('.js-slider').find('.slick-slide').css({
							'width': width + 'px'
						});
					}, 10);
				});

				$('.js-slider').each(function(){
					count = 4;
					classname = 'slider';

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
						speed: 300,
						fade: false,
						arrows: false,
						autoplay: true,
						autoplaySpeed: 5000,
						pauseOnHover: false,
						useTransform: false,
						variableWidth: true,
						cssEase: 'ease'
					});
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
		
		initJump: function()
		{
			body.on('click', '.js-jumpto', function(e){
				e.preventDefault();

				if ($(this).data('target') && $($(this).data('target')).length)
				{
					$(this).closest('.popup').stop().animate({ scrollTop: $($(this).data('target')).position().top }, 'fast');
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

		setCurrent: function(viewer)
		{
			var list = viewer.find('.js-viewer-list');

			viewer.find('.js-viewer-count').html(list.find('.current').closest('.viewer__list__item').index()+1);
			viewer.find('.js-viewer-total').html(list.find('.viewer__list__item').length);
		},

		initViewer: function()
		{
			_this = this;

			body.on('click', '.js-viewer-prev', function(e){
				e.preventDefault();

				var viewer = $(this).closest('.js-viewer'),
					list = viewer.find('.js-viewer-list'),
					index = list.find('.current').closest('.viewer__list__item').index(), next;

				if (list.find('.viewer__list__item').eq(index-1).length)
				{
					next = list.find('.viewer__list__item').eq(index-1);
				}
				else {
					next = list.find('.viewer__list__item').eq(list.find('.viewer__list__item').length);
				}

				next.find('.js-viewer-trigger').trigger('click');

				_this.setCurrent(viewer);
			});

			body.on('click', '.js-viewer-next', function(e){
				e.preventDefault();

				var viewer = $(this).closest('.js-viewer'),
					list = viewer.find('.js-viewer-list'),
					index = list.find('.current').closest('.viewer__list__item').index(), next;

				if (list.find('.viewer__list__item').eq(index+1).length)
				{
					next = list.find('.viewer__list__item').eq(index+1);
				}
				else {
					next = list.find('.viewer__list__item').eq(0);
				}

				next.find('.js-viewer-trigger').trigger('click');

				_this.setCurrent(viewer);
			});

			body.on('click', '.js-viewer-trigger', function(e){
				e.preventDefault();

				var viewer = $(this).closest('.js-viewer'),
					image = $(this).attr('href');

				viewer.find('.current').removeClass('current');
				viewer.find('.js-viewer-image').html('<img src="' + image + '" class="viewer__image__src" alt="">');

				$(this).addClass('current');

				_this.setCurrent(viewer);
				
				return !1;
			});

			_this.setCurrent($('.js-viewer'));
		},

		initEvents: function()
		{
			if ($('.events-item').length)
			{
				var stack = [], max = 0;

				$('.events-item').each(function(){
					stack.push($(this).outerHeight());
				});

				if (stack.length)
				{
					max = Array.max(stack);
				}

				if (max > 0)
				{
					$('.events-item').css({
						'min-height': max + 'px'
					})
				}
			}
		},

		initMarker: function()
		{
			var $item;

			body.on('mouseenter', '.js-marker', function(){
				$item = $(this).find('.map-presence__marker__tooltip');
				$item.addClass('show');
				
				setTimeout(function(){
					$item.addClass('animate');
				}, 5);
			});

			body.on('mouseleave', '.js-marker', function(){
				$item = $(this).find('.map-presence__marker__tooltip');
				$item.removeClass('animate');

				setTimeout(function(){
					$item.removeClass('show');
				}, 300);
			});
		},

		init: function()
		{
			_this = this;

			this.slickCarousel();
			this.slickSlider();

			this.initPopup();
			this.initMarker();
			this.initEvents();

			this.initAddition();
			this.initMask();
			this.initSelect();
			this.initSandwich();
			this.hoverBind();
			this.toggleClass();
			this.initViewer();
			this.initMagnific();
			this.initJump();
		}

	};

})( jQuery );