var tools = {
    isString: function (obj) {
        return typeof obj === 'string';
    },
    isObject: function (obj) {
        return typeof obj === 'object';
    },
    isNumber: function (obj) {
        return typeof obj === 'number';
    },
    isUndefined: function (value) {
        return typeof value === 'undefined';
    },
    isDefined: function (value) {
        return typeof value !== 'undefined';
    }
};

function scrollToElement(element)
{
    console.log('scroll to ', element, $(element).length);

    if ($(element).length)
    {
        var block;

        if ($(element).closest('.popup').length)
        {
            block = $(element).closest('.popup');
        }
        else {
            block = $(element);
        }

        block.stop().animate({ scrollTop: $(element).position().top }, 'fast');
    }
}

Array.max = function(array) {
    return Math.max.apply(Math, array);
};

Array.min = function(array) {
    return Math.min.apply(Math, array);
};

function showif(selected, needle, element)
{
    if (selected == needle)
    {
        $(element).show();
    }
    else {
        $(element).hide();
    }
}

function is_null(x)
{
	return x == null;
}

function is_undefined(x)
{
	return typeof(x) == 'undefined';
}

function is_touch_device()
{
    return ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || 'onmsgesturechange' in window);
}

function updateCaptcha(captcha, ev)
{
    ev.preventDefault();

    if ($(captcha).length)
    {
        $(captcha).attr('src', $(captcha).attr('src').split( '?' )[0] + '?v=' + Math.random());
    }

    return !1;
}