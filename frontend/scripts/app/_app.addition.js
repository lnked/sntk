;(function ($) {
    "use strict";

    $.app = $.app = $.app || {};

    $.app.initAddition = function()
    {
        _this = this;

        body.on('click', '.js-add-element', function(e){
            var $form, counter, data, _container, _template;

            e.preventDefault();

            if ($(this).data('template') && $('#' + $(this).data('template')).length)
            {
                $form = $(this).closest('.js-form-addition');
                counter = $form.find('tbody').find('tr').length;

                if(!counter) {
                    counter = 1;
                }

                data = {};
                
                if ($(this).data('addclass'))
                {
                    data.addclass = $(this).data('addclass');
                }

                _container = $form.find('tbody');
                
                data.index = ++counter;
                
                $form.data('additional_counter', counter);

                _template = $(template($(this).data('template'), data));

                _container.append(_template);
                
                _this.initSelect(_template);
            }
        });
    };

    $.app.initRemove = function()
    {
        body.on('click', '.js-remove-element', function(e){
            e.preventDefault();

            if ($(this).data('element') && $($(this).data('element')).length)
            {
                var $item;

                if ($(this).data('cookie'))
                {
                    $.cookie($(this).data('cookie'), 'hidden', { path: '/' });
                }

                if ($(this).hasClass('js-remove-closest'))
                {
                    $item = $(this).closest($(this).data('element'));

                    $item.stop().animate({ 'height': 0, 'opacity': 0 }, 250, function(){
                        $item.remove();
                    });
                }
                else {
                    $item = $($(this).data('element'));

                    $item.stop().animate({ marginTop: '-400px' }, 0, function(){
                        setTimeout(function(){
                            $item.remove();
                        }, 600);
                    });
                }
            }
        });
    };

})(jQuery);